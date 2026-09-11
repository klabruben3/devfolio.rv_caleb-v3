const thinkingCards = [
  {
    id: 1,
    topic: "Living Software",
    note: "What happens when a portfolio stops being a page and starts becoming a system you operate?",
    type: "question",
    rot: -2.1,
  },
  {
    id: 2,
    topic: "Academic Systems",
    note: "Students don't necessarily lack information. The information is just scattered across too many places.",
    type: "observation",
    rot: 1.4,
  },
  {
    id: 3,
    topic: "AI Assistants",
    note: "An assistant becomes much more useful when it can fetch the right context instead of being given everything.",
    type: "idea",
    rot: -0.8,
  },
  {
    id: 4,
    topic: "Multiplayer Networking",
    note: "The viewport is only a projection. The world has to exist somewhere else.",
    type: "observation",
    rot: 2.2,
  },
  {
    id: 5,
    topic: "Developer Tooling",
    note: "The decisions behind a project are often more valuable than the final repository.",
    type: "idea",
    rot: -1.5,
  },
  {
    id: 6,
    topic: "System Design",
    note: "Most architecture problems eventually become questions about where truth should live.",
    type: "question",
    rot: 0.6,
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

const timelineNodes = [
  {
    year: 2024,
    items: [
      {
        label: "Devfolio begins",
        type: "project",
        desc: "Started building a personal portfolio. It gradually became something much less static.",
      },
      {
        label: "Frontend → full-stack",
        type: "lesson",
        desc: "UI work kept leading into auth, databases, permissions, deployment and system state.",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        label: "Building beyond the interface",
        type: "tech",
        desc: "Started treating databases, authorization and realtime behaviour as part of the product rather than backend details.",
      },
      {
        label: "Realtime systems",
        type: "research",
        desc: "Presence, chat and synchronized state became recurring problems in the things I wanted to build.",
      },
      {
        label: "Supabase becomes infrastructure",
        type: "tech",
        desc: "Auth turned into RLS, realtime, storage, server-side validation and increasingly stateful applications.",
      },
    ],
  },
  {
    year: 2026,
    items: [
      {
        label: "Devfolio v3",
        type: "project",
        desc: "Rebuilt the portfolio as a realtime public/private workspace with anonymous visitors, admin auth, presence and live conversations.",
      },
      {
        label: "Buhle Bezwe ECD",
        type: "project",
        desc: "Shipped a client-facing website for a real early childhood development centre.",
      },
      {
        label: "Workbench",
        type: "project",
        desc: "Started building an internal engineering workspace for projects, ideas, decisions, bugs, patterns and AI-assisted knowledge capture.",
      },
      {
        label: "Academiq",
        type: "project",
        desc: "Turned an academic planner into a full academic workspace and started putting it in front of real students.",
      },
      {
        label: "Iris",
        type: "experiment",
        desc: "Moved from chatbot-style AI toward assistants that can selectively fetch application state and use tools.",
      },
      {
        label: "Medusa",
        type: "research",
        desc: "Started building a document-processing pipeline for turning university study guides into structured academic data.",
      },
      {
        label: "Phase Shift",
        type: "present",
        desc: "Currently exploring authoritative multiplayer simulation, persistent world space, interpolation and networked movement.",
      },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

const projects = [
  {
    id: "academiq",
    name: "Academiq",
    tagline: "An academic workspace that understands the semester",
    status: "Live",
    year: "2026 – present",
    problem:
      "Academic information is fragmented across study guides, learning platforms, calendars, spreadsheets, announcements and individual module pages.",
    motivation:
      "I wanted one place where a student could understand what is happening academically — what is next, where they stand, and what needs attention.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "AI SDK",
    ],
    lesson:
      "The difficult part isn't displaying academic data. It's modelling enough of the rules behind it that the software can actually reason about a student's semester.",
    future:
      "Deeper academic integrations, stronger document intelligence, better reasoning through Iris and a much larger module template ecosystem.",
  },
  {
    id: "devfolio",
    name: "Devfolio v3",
    tagline: "A portfolio that became a workspace",
    status: "Active",
    year: "2024 – present",
    problem:
      "Most portfolios become stale the moment they're deployed. They show work, but they don't participate in it.",
    motivation:
      "I wanted my portfolio to feel alive — something I could operate from the inside while everyone else experiences the public-facing version.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Realtime",
    ],
    lesson:
      "A public website and an internal tool don't necessarily have to be separate products. Identity, permissions and state can completely change what the same interface becomes.",
    future:
      "Move more of the site into database-driven content and continue turning it into a configurable digital headquarters for my work.",
  },
  {
    id: "workbench",
    name: "Workbench",
    tagline: "Engineering everything",
    status: "Active",
    year: "2026 – present",
    problem:
      "Repositories remember code. They are much worse at remembering why the code became what it is.",
    motivation:
      "I wanted somewhere to keep projects, ideas, decisions, bugs, patterns, technologies and engineering notes connected to the actual work.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "AI SDK",
      "OpenAI",
    ],
    lesson:
      "AI becomes more interesting when it works against structured personal context instead of behaving like an isolated chat window.",
    future:
      "Let the workspace understand ongoing engineering work, surface patterns and eventually publish selected parts directly into Devfolio.",
  },
  {
    id: "medusa",
    name: "Medusa",
    tagline: "Documents in. Structured academic data out.",
    status: "Active",
    year: "2026 – present",
    problem:
      "University study guides contain the information Academiq needs, but that information arrives as messy human-oriented documents rather than predictable schemas.",
    motivation:
      "Adding every module manually doesn't scale. I wanted to see how far a document-processing system could go toward building modules automatically.",
    tech: [
      "Python",
      "FastAPI",
      "VoyageAI",
      "ChromaDB",
      "Groq",
      "PDF Processing",
    ],
    lesson:
      "Extraction isn't just an LLM problem. Layout, tables, chunking, retrieval, validation and strict schema rules often matter more than the final prompt.",
    future:
      "More reliable extraction, OCR support, stronger validation and tighter integration with Academiq's module creation pipeline.",
  },
  {
    id: "phase-shift",
    name: "Phase Shift",
    tagline: "A world that exists beyond the viewport",
    status: "Active",
    year: "2026 – present",
    problem:
      "Multiplayer movement becomes fragile when clients are allowed to define their own version of where the world is.",
    motivation:
      "I wanted to understand multiplayer architecture below the visual layer: authority, simulation, latency, interpolation and world state.",
    tech: [
      "TypeScript",
      "Socket.IO",
      "Node.js",
      "Realtime",
      "Authoritative Server",
    ],
    lesson:
      "Screen coordinates and world coordinates are fundamentally different things. Once the server owns the world, the client becomes a projection of it.",
    future:
      "Smooth interpolation, input reconciliation, vicinity-based updates and server-managed spatial partitioning.",
  },
  {
    id: "buhle-bezwe",
    name: "Buhle Bezwe ECD",
    tagline: "A digital home for a growing ECD centre",
    status: "Live",
    year: "2026",
    problem:
      "The centre needed a modern online presence that could clearly communicate its programmes, services and identity to parents.",
    motivation:
      "It was an opportunity to build something for a real organisation rather than another project existing only as a technical exercise.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    lesson:
      "Real products have audiences, constraints and content that exist independently of what is technically interesting to build.",
    future:
      "Parent and administrative tooling could eventually turn the public site into a larger operational platform.",
  },
];

// ─── Ideas ────────────────────────────────────────────────────────────────────

const ideas = [
  {
    id: 1,
    name: "Digital Headquarters",
    status: "Thinking",
    date: "Sep 2026",
    why: "What if a personal site was also the interface its owner used to run their work?",
    tags: ["product", "workspace", "identity"],
    rot: -1.8,
  },
  {
    id: 2,
    name: "Persistent Assistant Memory",
    status: "Researching",
    date: "Sep 2026",
    why: "Long-running assistants shouldn't need the entire conversation to remember what actually matters.",
    tags: ["AI", "memory", "RAG"],
    rot: 1.2,
  },
  {
    id: 3,
    name: "Academic Document Intelligence",
    status: "Building",
    date: "2026",
    why: "A study guide already describes the module. Software should be able to turn that description into usable structure.",
    tags: ["AI", "documents", "academia"],
    rot: -0.5,
  },
  {
    id: 4,
    name: "Living Portfolio",
    status: "Building",
    date: "2026",
    why: "Projects change constantly. A portfolio should be able to change with them without becoming another site to maintain.",
    tags: ["portfolio", "systems", "publishing"],
    rot: 2.0,
  },
  {
    id: 5,
    name: "Persistent Multiplayer World",
    status: "Building",
    date: "Sep 2026",
    why: "The world should exist independently of whoever happens to be looking at it.",
    tags: ["multiplayer", "networking", "systems"],
    rot: -1.3,
  },
  {
    id: 6,
    name: "Engineering Memory",
    status: "Researching",
    date: "2026",
    why: "Git remembers what changed. I want something that remembers why.",
    tags: ["dev tools", "AI", "knowledge"],
    rot: 0.7,
  },
];

// ─── Technologies ─────────────────────────────────────────────────────────────

const techs = [
  {
    name: "TypeScript",
    since: "Core stack",
    projects: ["Academiq", "Devfolio", "Workbench", "Phase Shift"],
    why: "It became the common language across nearly everything I build on the web.",
    evolution:
      "Started as a safer way to write frontend code. Now I use the type system to think about APIs, state and system boundaries.",
  },
  {
    name: "Next.js / React",
    since: "Core stack",
    projects: ["Academiq", "Devfolio", "Workbench", "Buhle Bezwe"],
    why: "Most of the products I wanted to build lived somewhere between application and website.",
    evolution:
      "The interesting problems gradually moved from components toward architecture, data flow and product behaviour.",
  },
  {
    name: "Supabase / PostgreSQL",
    since: "Core stack",
    projects: ["Devfolio", "Academiq", "Workbench"],
    why: "I needed auth. Then realtime. Then RLS. Then synchronization. It quietly became infrastructure.",
    evolution:
      "I think much more carefully now about ownership, permissions, synchronization and where authoritative state lives.",
  },
  {
    name: "AI SDK / LLM APIs",
    since: "2026",
    projects: ["Iris", "Workbench"],
    why: "I became more interested in assistants that can use application state and tools than chatbots that only generate text.",
    evolution:
      "The focus has shifted from prompting toward context selection, tool design, token efficiency and persistent memory.",
  },
  {
    name: "Python / FastAPI",
    since: "2026",
    projects: ["Medusa"],
    why: "Document processing and the AI/data ecosystem made Python the practical choice for Medusa.",
    evolution:
      "It has become the backend side of the work that doesn't naturally belong inside a Next.js application.",
  },
  {
    name: "Socket.IO / Realtime",
    since: "2026",
    projects: ["Phase Shift", "Devfolio"],
    why: "Realtime features eventually made me curious about what happens when synchronization becomes the actual product.",
    evolution:
      "Presence and chat led toward authoritative simulation, interpolation and distributed world state.",
  },
];

// ─── Thoughts ─────────────────────────────────────────────────────────────────

const thoughts = [
  {
    id: 1,
    date: "Sep 2026",
    text: "The more I build with AI, the less interesting raw generation becomes. Context, tools and memory are where the system starts becoming useful.",
    tag: "AI",
  },
  {
    id: 2,
    date: "Sep 2026",
    text: "A viewport isn't a world. It's only one person's projection of it. That distinction changes almost everything about multiplayer architecture.",
    tag: "systems",
  },
  {
    id: 3,
    date: "Sep 2026",
    text: "I'm becoming more interested in software that stays alive after deployment — systems I can operate, change and continue building through.",
    tag: "building",
  },
  {
    id: 4,
    date: "Aug 2026",
    text: "Once real people start using something, the problems change. Features stop being hypothetical and small inconsistencies suddenly matter.",
    tag: "product",
  },
  {
    id: 5,
    date: "Aug 2026",
    text: "The hard part of Academiq isn't the dashboard. It's translating the strange rules of an academic semester into something software can understand.",
    tag: "academia",
  },
  {
    id: 6,
    date: "2026",
    text: "Git is very good at remembering what changed. I'm increasingly interested in systems that can also remember why.",
    tag: "reflection",
  },
];

// ─── Type badges ──────────────────────────────────────────────────────────────

const typeStyles: Record<string, string> = {
  idea: "bg-[#E9B44C]/10 text-[#E9B44C] border border-[#E9B44C]/25",
  experiment:
    "bg-[#7CA982]/10 text-[#7CA982] border border-[#7CA982]/25",
  project:
    "bg-[rgba(240,237,230,0.06)] text-[#F0EDE6] border border-[rgba(240,237,230,0.15)]",
  research:
    "bg-[#9B7ECC]/10 text-[#9B7ECC] border border-[#9B7ECC]/25",
  tech: "bg-[#4AADCC]/10 text-[#4AADCC] border border-[#4AADCC]/25",
  lesson:
    "bg-[#CC7E7E]/10 text-[#CC7E7E] border border-[#CC7E7E]/25",
  observation:
    "bg-[#9B7ECC]/10 text-[#9B7ECC] border border-[#9B7ECC]/25",
  question:
    "bg-[#E9B44C]/10 text-[#E9B44C] border border-[#E9B44C]/25",
  present:
    "bg-[#7CA982]/15 text-[#7CA982] border border-[#7CA982]/40",
};

const statusStyles: Record<string, string> = {
  Thinking: "text-[#7A7A6A]",
  Researching: "text-[#9B7ECC]",
  Planning: "text-[#4AADCC]",
  Building: "text-[#7CA982]",
  Paused: "text-[#E9B44C]",
  Abandoned: "text-[#CC7E7E]",
  Completed: "text-[#F0EDE6]",
  Live: "text-[#7CA982]",
  Active: "text-[#4AADCC]",
};

// ─── Main exports ─────────────────────────────────────────────────────────────

export {
  statusStyles,
  typeStyles,
  thoughts,
  techs,
  ideas,
  projects,
  timelineNodes,
  thinkingCards,
};

// ─── Ecosystem Map ────────────────────────────────────────────────────────────

export const nodes = [
  {
    id: "product",
    label: "Product",
    sub: "Systems",
    x: 90,
    y: 200,
    type: "idea",
  },
  {
    id: "ai",
    label: "AI",
    sub: "Assistants",
    x: 290,
    y: 90,
    type: "experiment",
  },
  {
    id: "academic",
    label: "Academic",
    sub: "Software",
    x: 510,
    y: 70,
    type: "project",
  },
  {
    id: "realtime",
    label: "Realtime",
    sub: "Systems",
    x: 240,
    y: 300,
    type: "experiment",
  },
  {
    id: "documents",
    label: "Document",
    sub: "Intelligence",
    x: 460,
    y: 290,
    type: "research",
  },
  {
    id: "tooling",
    label: "Developer",
    sub: "Tooling",
    x: 680,
    y: 170,
    type: "idea",
  },
  {
    id: "multiplayer",
    label: "Multiplayer",
    sub: "Architecture",
    x: 620,
    y: 360,
    type: "project",
  },
];

export const edges = [
  ["product", "ai"],
  ["product", "realtime"],
  ["product", "tooling"],
  ["ai", "academic"],
  ["ai", "documents"],
  ["ai", "tooling"],
  ["academic", "documents"],
  ["realtime", "academic"],
  ["realtime", "multiplayer"],
];

export const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export const nodeColorMap: Record<string, string> = {
  idea: "#E9B44C",
  experiment: "#7CA982",
  project: "#F0EDE6",
  research: "#9B7ECC",
};