import fs from 'fs';
import path from 'path';
import Parser from 'rss-parser';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables (useful for local testing)
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOOLS_JSON_PATH = path.join(__dirname, '../src/data/tools.json');

// Initialize Gemini
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("CRITICAL ERROR: GEMINI_API_KEY is missing from environment variables.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

const parser = new Parser();

// The schema we want Gemini to return
const SCHEMA = `
[
  {
    "category_id": "writing", // must be one of: writing, image, video, coding, chatbot, audio, productivity, marketing, data, design, search
    "tool": {
      "name": "Tool Name",
      "tagline": "Short description of the tool",
      "specs": [
        {"key": "Company", "val": "Creator"},
        {"key": "Features", "val": "Key features"}
      ],
      "tags": ["Tag1", "Tag2"]
    }
  }
]
`;

async function run() {
  console.log("Starting AI Tools Auto-Updater...");

  // 1. Read existing tools
  const data = JSON.parse(fs.readFileSync(TOOLS_JSON_PATH, 'utf8'));
  const existingTools = data.flatMap(cat => cat.tools.map(t => t.name.toLowerCase()));
  
  console.log(`Currently tracking ${existingTools.length} tools.`);

  // 2. Fetch RSS Feeds for new tech/AI releases
  const feedUrls = [
    'https://techcrunch.com/category/artificial-intelligence/feed/',
    // You could add ProductHunt or other feeds here
  ];

  let rawContent = "";
  for (const url of feedUrls) {
    try {
      console.log(`Fetching feed: ${url}`);
      const feed = await parser.parseURL(url);
      feed.items.slice(0, 15).forEach(item => {
        rawContent += `Title: ${item.title}\nContent: ${item.contentSnippet}\n\n`;
      });
    } catch (err) {
      console.error(`Failed to fetch ${url}:`, err.message);
    }
  }

  if (!rawContent) {
    console.log("No content fetched. Exiting.");
    return;
  }

  // 3. Ask Gemini to extract new tools
  const prompt = `
You are an expert AI software directory curator.
Below is a text extract from recent AI news feeds. I want you to extract any NEW artificial intelligence software tools, platforms, or models mentioned.
DO NOT include general concepts, companies (unless the company IS the tool, e.g., OpenAI vs ChatGPT), or hardware. Only software tools.

CRITICAL: DO NOT include any of the following tools, as they are already in the database:
${existingTools.join(', ')}

For any NEW tools you find (or if you don't find any in the text, you can suggest 1-2 brand new highly popular AI tools that are missing from the list above), output them strictly in this JSON format.
If no new tools are found and you have no suggestions, output an empty array: []

SCHEMA REQUIRED:
${SCHEMA}

TEXT EXTRACT:
${rawContent}

Return ONLY valid JSON. No markdown backticks, no explanations.
`;

  console.log("Sending data to Gemini API for extraction...");
  let resultText = "";
  try {
    const result = await model.generateContent(prompt);
    resultText = result.response.text();
  } catch (err) {
    console.error("Gemini API Error:", err.message);
    process.exit(1);
  }

  // 4. Parse Gemini Output
  // Clean up potential markdown formatting from Gemini response
  const cleanedText = resultText.replace(/```json/gi, '').replace(/```/g, '').trim();
  
  let newTools = [];
  try {
    newTools = JSON.parse(cleanedText);
  } catch (err) {
    console.error("Failed to parse Gemini JSON output. Raw output was:");
    console.error(cleanedText);
    process.exit(1);
  }

  if (!newTools || newTools.length === 0) {
    console.log("No new tools found to add today.");
    return;
  }

  console.log(`Gemini suggested ${newTools.length} new tools!`);

  // 5. Append new tools to database
  let toolsAdded = 0;
  
  newTools.forEach(entry => {
    const catId = entry.category_id;
    const newTool = entry.tool;
    
    const category = data.find(c => c.id === catId);
    if (!category) {
      console.warn(`Category ${catId} not found for tool ${newTool.name}. Skipping.`);
      return;
    }

    // Double check existence
    if (!existingTools.includes(newTool.name.toLowerCase())) {
      newTool.rank = "#" + (category.tools.length + 1);
      category.tools.push(newTool);
      existingTools.push(newTool.name.toLowerCase()); // prevent dupes in same run
      toolsAdded++;
      console.log(`+ Added ${newTool.name} to ${catId}`);
    } else {
      console.log(`- Skipped ${newTool.name} (already exists)`);
    }
  });

  if (toolsAdded > 0) {
    fs.writeFileSync(TOOLS_JSON_PATH, JSON.stringify(data, null, 2));
    console.log(`Success! ${toolsAdded} new tools written to tools.json.`);
  } else {
    console.log("No new unique tools were added.");
  }
}

run();
