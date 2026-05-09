const fs = require('fs');

const path = './src/data/tools.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const newTools = {
  "writing": [
    {
      "name": "Wordtune",
      "tagline": "Your personal writing companion and editor",
      "specs": [
        {"key": "Company", "val": "AI21 Labs"},
        {"key": "Features", "val": "Rewrite, shorten, expand, tone check"},
        {"key": "Integration", "val": "Chrome extension, MS Word, Google Docs"}
      ],
      "tags": ["Freemium", "Editing"]
    },
    {
      "name": "Frase",
      "tagline": "SEO content creation & optimization platform",
      "specs": [
        {"key": "Company", "val": "Frase"},
        {"key": "Features", "val": "Content briefs, SEO scoring, AI writer"},
        {"key": "Best for", "val": "Content marketers, SEO agencies"}
      ],
      "tags": ["Paid", "SEO Writing"]
    },
    {
      "name": "ProWritingAid",
      "tagline": "Premium grammar checker and style editor",
      "specs": [
        {"key": "Company", "val": "ProWritingAid"},
        {"key": "Features", "val": "Style improvements, grammar, reports"},
        {"key": "Integration", "val": "Desktop app, browser, Scrivener, Word"}
      ],
      "tags": ["Freemium", "Grammar"]
    },
    {
      "name": "Hemingway Editor AI",
      "tagline": "Make your writing bold, clear, and concise",
      "specs": [
        {"key": "Company", "val": "Hemingway Ltd"},
        {"key": "Features", "val": "Readability grade, AI rewrite suggestions"},
        {"key": "Access", "val": "Web app, Desktop app"}
      ],
      "tags": ["Freemium", "Clarity"]
    }
  ],
  "image": [
    {
      "name": "Playground AI",
      "tagline": "Free-to-use AI image creator and editor",
      "specs": [
        {"key": "Company", "val": "Playground AI"},
        {"key": "Features", "val": "Mixed image editing, canvas, SDXL"},
        {"key": "Free Plan", "val": "500 images per day"}
      ],
      "tags": ["Freemium", "Canvas Editor"]
    },
    {
      "name": "Tensor.art",
      "tagline": "Free online stable diffusion generator and model host",
      "specs": [
        {"key": "Company", "val": "TensorArt"},
        {"key": "Features", "val": "LoRA support, ControlNet, community models"},
        {"key": "Free Plan", "val": "100 credits daily"}
      ],
      "tags": ["Freemium", "Stable Diffusion"]
    },
    {
      "name": "Fooocus",
      "tagline": "Open-source image generating software based on SDXL",
      "specs": [
        {"key": "License", "val": "Open Source"},
        {"key": "Features", "val": "Simple UI, prompt expansion, offline use"},
        {"key": "Requirements", "val": "Local GPU (Nvidia recommended)"}
      ],
      "tags": ["Free / OSS", "Local"]
    },
    {
      "name": "Lexica",
      "tagline": "Stable Diffusion search engine and image generator",
      "specs": [
        {"key": "Company", "val": "Lexica"},
        {"key": "Model", "val": "Aperture v3.5"},
        {"key": "Features", "val": "Prompt search, fast generation"}
      ],
      "tags": ["Freemium", "Search Engine"]
    }
  ],
  "video": [
    {
      "name": "Haiper AI",
      "tagline": "Next-gen foundational video generation model",
      "specs": [
        {"key": "Company", "val": "Haiper"},
        {"key": "Features", "val": "Text-to-video, image-to-video, repainting"},
        {"key": "Resolution", "val": "HD generation"}
      ],
      "tags": ["Freemium", "Text→Video"]
    },
    {
      "name": "Kapwing AI",
      "tagline": "Collaborative online video editor powered by AI",
      "specs": [
        {"key": "Company", "val": "Kapwing"},
        {"key": "Features", "val": "Auto-subtitles, script-to-video, smart cut"},
        {"key": "Format", "val": "Web-based collaborative editor"}
      ],
      "tags": ["Freemium", "Video Editor"]
    },
    {
      "name": "Fliki",
      "tagline": "Turn text into videos with AI voices instantly",
      "specs": [
        {"key": "Company", "val": "Fliki"},
        {"key": "Features", "val": "Text-to-video, blog-to-video, 2000+ voices"},
        {"key": "Use Cases", "val": "YouTube, TikTok, Instagram Reels"}
      ],
      "tags": ["Freemium", "Social Media"]
    },
    {
      "name": "Synthesys",
      "tagline": "AI video, audio, and avatar creation suite",
      "specs": [
        {"key": "Company", "val": "Synthesys"},
        {"key": "Features", "val": "Custom avatars, voice cloning, image gen"},
        {"key": "Languages", "val": "140+ languages"}
      ],
      "tags": ["Paid", "Avatars"]
    }
  ],
  "coding": [
    {
      "name": "Codeium",
      "tagline": "Free AI code completion and developer chat",
      "specs": [
        {"key": "Company", "val": "Exafunction"},
        {"key": "Features", "val": "Auto-complete, chat, repository search"},
        {"key": "Integration", "val": "VS Code, JetBrains, Visual Studio, Neovim"}
      ],
      "tags": ["Free", "Code Completion"]
    },
    {
      "name": "Sourcegraph Cody",
      "tagline": "AI coding assistant that knows your entire codebase",
      "specs": [
        {"key": "Company", "val": "Sourcegraph"},
        {"key": "Features", "val": "Codebase context, chat, unit tests"},
        {"key": "Models", "val": "Claude 3, GPT-4o"}
      ],
      "tags": ["Freemium", "Codebase Search"]
    },
    {
      "name": "CodiumAI",
      "tagline": "Generate meaningful tests and PR reviews for busy devs",
      "specs": [
        {"key": "Company", "val": "CodiumAI"},
        {"key": "Features", "val": "Test generation, code analysis, PR agent"},
        {"key": "Support", "val": "Python, JS, TS, Java, C++"}
      ],
      "tags": ["Freemium", "Testing"]
    },
    {
      "name": "v0 by Vercel",
      "tagline": "Generative UI system by Vercel",
      "specs": [
        {"key": "Company", "val": "Vercel"},
        {"key": "Features", "val": "UI from text prompt, React/Tailwind export"},
        {"key": "Integration", "val": "Next.js, Shadcn UI"}
      ],
      "tags": ["Freemium", "UI Generation"]
    },
    {
      "name": "Aider",
      "tagline": "AI pair programming in your terminal",
      "specs": [
        {"key": "License", "val": "Open Source"},
        {"key": "Features", "val": "Multi-file edit, automatic git commits"},
        {"key": "Models", "val": "Claude 3.5 Sonnet, GPT-4o, DeepSeek"}
      ],
      "tags": ["Free / OSS", "Terminal"]
    }
  ],
  "chatbot": [
    {
      "name": "YouChat",
      "tagline": "The AI search engine you control",
      "specs": [
        {"key": "Company", "val": "You.com"},
        {"key": "Features", "val": "Web access, multi-model (GPT-4, Claude, Gemini)"},
        {"key": "Access", "val": "Web, Mobile app"}
      ],
      "tags": ["Freemium", "Search"]
    },
    {
      "name": "Replika",
      "tagline": "The AI companion who cares",
      "specs": [
        {"key": "Company", "val": "Luka Inc."},
        {"key": "Features", "val": "Emotional support, memory, AR/VR integration"},
        {"key": "Platform", "val": "iOS, Android, Oculus"}
      ],
      "tags": ["Freemium", "Companion"]
    },
    {
      "name": "HuggingChat",
      "tagline": "Open-source alternative to ChatGPT",
      "specs": [
        {"key": "Company", "val": "Hugging Face"},
        {"key": "Features", "val": "Open models, web search, community tools"},
        {"key": "Models", "val": "Llama 3, Mistral, Command R+"}
      ],
      "tags": ["Free", "Open Source"]
    },
    {
      "name": "Chatsonic",
      "tagline": "AI chat assistant with real-time Google data",
      "specs": [
        {"key": "Company", "val": "Writesonic"},
        {"key": "Features", "val": "Web search, image generation, PDF chat"},
        {"key": "Integration", "val": "Chrome Extension"}
      ],
      "tags": ["Freemium", "Real-time"]
    }
  ],
  "audio": [
    {
      "name": "Lovo.ai",
      "tagline": "Award-winning AI voice generator and text-to-speech",
      "specs": [
        {"key": "Company", "val": "Lovo"},
        {"key": "Features", "val": "500+ voices, 100 languages, video editor"},
        {"key": "Use Cases", "val": "Marketing, eLearning, YouTube"}
      ],
      "tags": ["Freemium", "Voiceover"]
    },
    {
      "name": "Murf AI",
      "tagline": "Versatile studio-quality text to speech software",
      "specs": [
        {"key": "Company", "val": "Murf"},
        {"key": "Features", "val": "Voice cloning, pitch control, video syncing"},
        {"key": "Voices", "val": "120+ text-to-speech voices"}
      ],
      "tags": ["Paid", "TTS"]
    },
    {
      "name": "Kits AI",
      "tagline": "AI voice platform designed for musicians",
      "specs": [
        {"key": "Company", "val": "Kits"},
        {"key": "Features", "val": "Voice models, royalty-free voices, stem separation"},
        {"key": "Access", "val": "Web app"}
      ],
      "tags": ["Freemium", "Music Production"]
    }
  ],
  "productivity": [
    {
      "name": "Tome",
      "tagline": "AI-powered storytelling and presentation format",
      "specs": [
        {"key": "Company", "val": "Tome"},
        {"key": "Features", "val": "Generative presentations, interactive embeds"},
        {"key": "Design", "val": "Mobile-responsive layouts"}
      ],
      "tags": ["Freemium", "Presentations"]
    },
    {
      "name": "SaneBox",
      "tagline": "AI email management and inbox cleanup tool",
      "specs": [
        {"key": "Company", "val": "SaneBox"},
        {"key": "Features", "val": "Email filtering, do-not-disturb, tracking"},
        {"key": "Integration", "val": "Gmail, Outlook, iCloud"}
      ],
      "tags": ["Paid", "Email Management"]
    },
    {
      "name": "Clockwise",
      "tagline": "AI calendar assistant that optimizes your schedule",
      "specs": [
        {"key": "Company", "val": "Clockwise"},
        {"key": "Features", "val": "Focus time scheduling, meeting conflict resolution"},
        {"key": "Integration", "val": "Google Calendar, Slack, Asana"}
      ],
      "tags": ["Freemium", "Scheduling"]
    }
  ],
  "marketing": [
    {
      "name": "Mutiny",
      "tagline": "No-code AI personalization platform for B2B",
      "specs": [
        {"key": "Company", "val": "Mutiny"},
        {"key": "Features", "val": "Website personalization, ABM scaling"},
        {"key": "Integrations", "val": "Salesforce, Clearbit, Marketo"}
      ],
      "tags": ["Paid", "B2B Personalization"]
    },
    {
      "name": "AdCreative.ai",
      "tagline": "Generate conversion-focused ad creatives using AI",
      "specs": [
        {"key": "Company", "val": "AdCreative"},
        {"key": "Features", "val": "Banner generation, ROAS insights, copy generation"},
        {"key": "Platforms", "val": "Facebook, Google, LinkedIn Ads"}
      ],
      "tags": ["Paid", "Ad Creatives"]
    },
    {
      "name": "Phrasee",
      "tagline": "Enterprise AI content platform for digital marketing",
      "specs": [
        {"key": "Company", "val": "Phrasee"},
        {"key": "Features", "val": "Email subject lines, brand safety, performance prediction"},
        {"key": "Clients", "val": "Enterprise brands"}
      ],
      "tags": ["Paid", "Email Marketing"]
    }
  ],
  "data": [
    {
      "name": "Hex",
      "tagline": "Collaborative analytics and data science workspace",
      "specs": [
        {"key": "Company", "val": "Hex"},
        {"key": "Features", "val": "Magic AI, SQL, Python, interactive data apps"},
        {"key": "Integration", "val": "Snowflake, BigQuery, dbt"}
      ],
      "tags": ["Freemium", "Data Science"]
    },
    {
      "name": "DataRobot",
      "tagline": "Value-driven AI platform for the enterprise",
      "specs": [
        {"key": "Company", "val": "DataRobot"},
        {"key": "Features", "val": "Predictive models, MLOps, generative AI APIs"},
        {"key": "Deployment", "val": "Cloud, On-premise"}
      ],
      "tags": ["Paid", "Enterprise ML"]
    }
  ],
  "design": [
    {
      "name": "Framer AI",
      "tagline": "Generate stunning websites from text prompts",
      "specs": [
        {"key": "Company", "val": "Framer"},
        {"key": "Features", "val": "AI site generation, copywriting, color palettes"},
        {"key": "Output", "val": "Published production-ready website"}
      ],
      "tags": ["Freemium", "Website Builder"]
    },
    {
      "name": "Relume",
      "tagline": "AI website builder for Figma & Webflow",
      "specs": [
        {"key": "Company", "val": "Relume"},
        {"key": "Features", "val": "Wireframes, sitemaps, UI component library"},
        {"key": "Integration", "val": "Figma, Webflow"}
      ],
      "tags": ["Freemium", "Wireframing"]
    },
    {
      "name": "Galileo AI",
      "tagline": "Generative AI for high-fidelity UI design",
      "specs": [
        {"key": "Company", "val": "Galileo"},
        {"key": "Features", "val": "Text-to-UI, editable Figma designs"},
        {"key": "Export", "val": "Directly to Figma"}
      ],
      "tags": ["Paid", "UI Generation"]
    }
  ],
  "search": [
    {
      "name": "Komo",
      "tagline": "AI-powered search engine without ads",
      "specs": [
        {"key": "Company", "val": "Komo"},
        {"key": "Features", "val": "Chat, explore, ad-free search experience"},
        {"key": "Privacy", "val": "Private searches"}
      ],
      "tags": ["Free", "Ad-Free Search"]
    },
    {
      "name": "Andi",
      "tagline": "Generative AI search for the next generation",
      "specs": [
        {"key": "Company", "val": "Andi Search"},
        {"key": "Features", "val": "Summarized answers, conversational interface"},
        {"key": "Access", "val": "Web app"}
      ],
      "tags": ["Free", "Conversational"]
    },
    {
      "name": "Arc Search",
      "tagline": "The browser that browses for you",
      "specs": [
        {"key": "Company", "val": "The Browser Company"},
        {"key": "Features", "val": "Browse for me, auto-summarization, ad block"},
        {"key": "Platform", "val": "iOS"}
      ],
      "tags": ["Free", "Mobile Browser"]
    }
  ]
};

data.forEach(category => {
  if (newTools[category.id]) {
    const startRank = category.tools.length + 1;
    newTools[category.id].forEach((tool, index) => {
      // Check if tool already exists by name
      const exists = category.tools.find(t => t.name.toLowerCase() === tool.name.toLowerCase());
      if (!exists) {
        tool.rank = "#" + (startRank + index);
        category.tools.push(tool);
      }
    });
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log('Successfully updated tools.json');
