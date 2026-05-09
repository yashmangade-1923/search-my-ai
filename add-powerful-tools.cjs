const fs = require('fs');
const path = './src/data/tools.json';

const data = JSON.parse(fs.readFileSync(path, 'utf8'));

const newPowerfulTools = {
  "coding": [
    {
      "name": "Antigravity",
      "tagline": "Advanced autonomous agentic coding assistant by Google Deepmind",
      "specs": [
        {"key": "Company", "val": "Google Deepmind"},
        {"key": "Capabilities", "val": "Autonomous execution, complex repository navigation, planning"},
        {"key": "Architecture", "val": "Agentic Loop with Tool Execution"}
      ],
      "tags": ["Agent", "Google", "Autonomous"]
    },
    {
      "name": "Devin",
      "tagline": "The world's first fully autonomous AI software engineer",
      "specs": [
        {"key": "Company", "val": "Cognition AI"},
        {"key": "Capabilities", "val": "Self-driven debugging, end-to-end feature building, CLI & browser integration"},
        {"key": "Status", "val": "Early Access / Enterprise"}
      ],
      "tags": ["Autonomous", "Agent", "Paid"]
    },
    {
      "name": "Supermaven",
      "tagline": "The fastest copilot with a 1-million-token context window",
      "specs": [
        {"key": "Company", "val": "Supermaven"},
        {"key": "Context Window", "val": "1,000,000 tokens"},
        {"key": "Features", "val": "Ultra-low latency code generation, deep codebase understanding"}
      ],
      "tags": ["Speed", "Context", "Freemium"]
    },
    {
      "name": "Blackbox AI",
      "tagline": "AI built specifically for developers to code faster",
      "specs": [
        {"key": "Company", "val": "Blackbox"},
        {"key": "Features", "val": "Code search, autocompletion, real-time code generation"},
        {"key": "Access", "val": "VS Code, Web"}
      ],
      "tags": ["Freemium", "Search"]
    }
  ],
  "data": [
    {
      "name": "Palantir AIP",
      "tagline": "Activate large language models securely on your private enterprise network",
      "specs": [
        {"key": "Company", "val": "Palantir Technologies"},
        {"key": "Features", "val": "Data ontology, defense-grade security, enterprise agents"},
        {"key": "Use Cases", "val": "Defense, Supply Chain, Healthcare"}
      ],
      "tags": ["Enterprise", "Security"]
    },
    {
      "name": "Scale GenAI Platform",
      "tagline": "The data platform powering the world's best generative AI",
      "specs": [
        {"key": "Company", "val": "Scale AI"},
        {"key": "Capabilities", "val": "RLHF, data labeling, model evaluation, red-teaming"},
        {"key": "Clients", "val": "OpenAI, Meta, Microsoft"}
      ],
      "tags": ["Enterprise", "Data"]
    },
    {
      "name": "AlphaFold 3",
      "tagline": "Predicting the structure of life’s molecules with unprecedented accuracy",
      "specs": [
        {"key": "Company", "val": "Google Deepmind & Isomorphic Labs"},
        {"key": "Features", "val": "Protein folding, drug discovery, biological interaction modeling"},
        {"key": "Impact", "val": "Nobel Prize winning architecture"}
      ],
      "tags": ["Science", "BioTech", "Google"]
    }
  ],
  "productivity": [
    {
      "name": "AutoGPT",
      "tagline": "An experimental open-source attempt to make GPT fully autonomous",
      "specs": [
        {"key": "Company", "val": "Significant Gravitas"},
        {"key": "Features", "val": "Task chaining, internet access, memory management"},
        {"key": "Deployment", "val": "Local CLI, Docker"}
      ],
      "tags": ["Open Source", "Agent", "Autonomous"]
    },
    {
      "name": "Harvey",
      "tagline": "Generative AI platform designed specifically for elite law firms",
      "specs": [
        {"key": "Company", "val": "Harvey AI"},
        {"key": "Features", "val": "Contract analysis, legal research, regulatory compliance"},
        {"key": "Clients", "val": "PwC, Allen & Overy"}
      ],
      "tags": ["Enterprise", "Legal", "Paid"]
    }
  ],
  "search": [
    {
      "name": "Glean",
      "tagline": "The AI-powered work assistant that connects all your company's knowledge",
      "specs": [
        {"key": "Company", "val": "Glean"},
        {"key": "Features", "val": "Enterprise search, knowledge graph, strict permissions"},
        {"key": "Integrations", "val": "Slack, Google Drive, Jira, Confluence"}
      ],
      "tags": ["Enterprise", "Search"]
    }
  ],
  "chatbot": [
    {
      "name": "Mistral Le Chat",
      "tagline": "A multilingual conversational AI from Europe's leading AI lab",
      "specs": [
        {"key": "Company", "val": "Mistral AI"},
        {"key": "Models", "val": "Mistral Large, Mistral Nemo"},
        {"key": "Features", "val": "High reasoning capabilities, open-weight access"}
      ],
      "tags": ["Freemium", "Multilingual"]
    },
    {
      "name": "Cohere Command R+",
      "tagline": "Enterprise-grade LLM built specifically for RAG and tool use",
      "specs": [
        {"key": "Company", "val": "Cohere"},
        {"key": "Features", "val": "Retrieval Augmented Generation (RAG), extensive language support"},
        {"key": "Focus", "val": "Data privacy, enterprise deployment"}
      ],
      "tags": ["Enterprise", "RAG"]
    }
  ]
};

let toolsAdded = 0;

data.forEach(category => {
  if (newPowerfulTools[category.id]) {
    const startRank = category.tools.length + 1;
    newPowerfulTools[category.id].forEach((tool, index) => {
      // Check if tool already exists by name
      const exists = category.tools.find(t => t.name.toLowerCase() === tool.name.toLowerCase());
      if (!exists) {
        tool.rank = "#" + (startRank + index);
        category.tools.push(tool);
        toolsAdded++;
      }
    });
  }
});

fs.writeFileSync(path, JSON.stringify(data, null, 2));
console.log(`Successfully added ${toolsAdded} powerful tools to tools.json`);
