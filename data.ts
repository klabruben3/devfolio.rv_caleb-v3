const thinkingCards = [
  {
    id: 1,
    topic: "Human Discovery Platforms",
    note: "How do people find each other when they don't know what they're looking for?",
    type: "question",
    rot: -2.1,
  },
  {
    id: 2,
    topic: "Academic Analytics",
    note: "Citation graphs miss the real story — the *why* behind research paths.",
    type: "observation",
    rot: 1.4,
  },
  {
    id: 3,
    topic: "AI Systems",
    note: "Models that explain their uncertainty are more useful than confident ones.",
    type: "idea",
    rot: -0.8,
  },
  {
    id: 4,
    topic: "Multiplayer Networking",
    note: "State sync is a philosophy problem before it's a technical one.",
    type: "question",
    rot: 2.2,
  },
  {
    id: 5,
    topic: "Speech Recognition",
    note: "Accent bias is a dataset problem that sounds like an ML problem.",
    type: "observation",
    rot: -1.5,
  },
  {
    id: 6,
    topic: "Distributed Systems",
    note: "Clocks lie. Networks lie. Design accordingly.",
    type: "idea",
    rot: 0.6,
  },
];

const timelineNodes = [
  {
    year: 2022,
    items: [
      {
        label: "First TypeScript project",
        type: "tech",
        desc: "Migrated a Python scraper to TS. Hated it, then couldn't go back.",
      },
      {
        label: "Built a todo app (seriously)",
        type: "experiment",
        desc: "The cliché that taught me more about state than any tutorial.",
      },
      {
        label: "Discovered graph databases",
        type: "research",
        desc: "Neo4j changed how I think about data relationships.",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        label: "Meridian v0.1",
        type: "project",
        desc: "Academic graph for connecting researchers. First real users.",
      },
      {
        label: "Learned Python for ML",
        type: "tech",
        desc: "Needed it for Meridian's recommendation engine. Stayed for pandas.",
      },
      {
        label: "Failed: real-time collaboration",
        type: "lesson",
        desc: "CRDTs are beautiful until you try to explain them to a user.",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        label: "Echo — speech prototype",
        type: "project",
        desc: "Multilingual speech recognition for education. Abandoned after 3 months.",
      },
      {
        label: "Rust experiment",
        type: "tech",
        desc: "Rewrote a networking module. 10x faster, 100x more humbling.",
      },
      {
        label: "Lattice — multiplayer state",
        type: "project",
        desc: "Distributed game state sync. Still running.",
      },
      {
        label: "GLSL shaders",
        type: "research",
        desc: "Fell into graphics. Still haven't fully emerged.",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        label: "Meridian v2 — rebuilt",
        type: "project",
        desc: "Completely redesigned. Knowledge graphs, not just citation graphs.",
      },
      {
        label: "Started writing publicly",
        type: "experiment",
        desc: "Not a blog. Just notes that felt too heavy to keep private.",
      },
      {
        label: "Human Discovery Platform",
        type: "idea",
        desc: "Still thinking. Still circling. Not ready.",
      },
    ],
  },
  {
    year: 2026,
    items: [
      {
        label: "Currently building",
        type: "present",
        desc: "Three things in parallel. One will survive.",
      },
    ],
  },
];

const projects = [
  {
    id: "meridian",
    name: "Meridian",
    tagline: "A graph for academic minds",
    status: "Live",
    year: "2023 – present",
    problem:
      "Researchers publish papers, but discovery is broken. The algorithm optimizes for citations, not curiosity. Good work stays invisible.",
    motivation:
      "I spent two weeks trying to find researchers working on a specific intersection of ML and cognitive science. PubMed, Google Scholar, ResearchGate — none of them understood what I was looking for.",
    tech: ["Python", "Neo4j", "TypeScript", "React", "FastAPI"],
    lesson:
      "The hardest part wasn't the graph. It was deciding what a 'connection' means. Every data model is a philosophy.",
    future:
      "If it becomes the place where research conversations happen — not just where papers land — that would be enough.",
  },
  {
    id: "lattice",
    name: "Lattice",
    tagline: "Multiplayer state, without the lies",
    status: "Active",
    year: "2024",
    problem:
      "Every multiplayer system I built eventually broke under concurrent writes. I kept patching instead of understanding.",
    motivation:
      "I wanted to understand why distributed state is hard. Not 'hard' as in complex code. Hard as in: reality doesn't have a single source of truth.",
    tech: ["Rust", "WebSockets", "CRDTs", "TypeScript"],
    lesson:
      "Conflict resolution isn't a technical problem. It's a decision about whose reality wins. That decision should be explicit, not hidden in an algorithm.",
    future:
      "Possibly a library. Possibly abandoned. Currently just understood.",
  },
  {
    id: "echo",
    name: "Echo",
    tagline: "Speech recognition for the other 70%",
    status: "Abandoned",
    year: "2024",
    problem:
      "Every speech model I tested performed significantly worse on non-native English speakers. The gap was embarrassing.",
    motivation:
      "My mother speaks English with a heavy accent. Every voice assistant she uses fails her regularly.",
    tech: ["Python", "Whisper", "FastAPI", "PyTorch"],
    lesson:
      "I abandoned Echo not because it didn't work — but because I realized I couldn't solve the training data problem alone. Bias at dataset scale requires institutional change, not a clever fine-tune.",
    future:
      "The problem still exists. Someone with more resources should build this.",
  },
];

const ideas = [
  {
    id: 1,
    name: "Knowledge Graph OS",
    status: "Researching",
    date: "Jan 2025",
    why: "What if your second brain had the structure of your actual thoughts, not folders?",
    tags: ["graphs", "productivity", "AI"],
    rot: -1.8,
  },
  {
    id: 2,
    name: "Human Discovery Platform",
    status: "Thinking",
    date: "Mar 2025",
    why: "Finding the right people is harder than finding information. We have search for documents but not for minds.",
    tags: ["discovery", "community", "social"],
    rot: 1.2,
  },
  {
    id: 3,
    name: "Multiplayer Code Execution",
    status: "Paused",
    date: "Aug 2024",
    why: "Pair programming tools feel like video calls with a shared screen. They don't feel like thinking together.",
    tags: ["dev tools", "multiplayer", "collab"],
    rot: -0.5,
  },
  {
    id: 4,
    name: "Sleep-Driven ML Scheduler",
    status: "Abandoned",
    date: "May 2023",
    why: "Batch jobs at night, interactive queries during the day. Obvious in hindsight. Already exists.",
    tags: ["infra", "ML", "scheduling"],
    rot: 2.0,
  },
  {
    id: 5,
    name: "Accent-Aware ASR",
    status: "Paused",
    date: "Nov 2024",
    why: "Echo taught me the problem. I still think about it.",
    tags: ["speech", "AI", "accessibility"],
    rot: -1.3,
  },
  {
    id: 6,
    name: "Research Trail Viewer",
    status: "Building",
    date: "Apr 2026",
    why: "A visual map of how a research paper came to exist — every paper it cites, visualized as a journey.",
    tags: ["academia", "graphs", "visualization"],
    rot: 0.7,
  },
];

const techs = [
  {
    name: "TypeScript",
    since: "2022",
    projects: ["Meridian", "Lattice web client", "This site"],
    why: "Needed types on a scraper that was growing too fast. The type system caught a bug before I shipped it. I was sold.",
    evolution: "Started hating the verbosity. Now miss it when it's gone.",
  },
  {
    name: "Python",
    since: "2023",
    projects: ["Meridian ML layer", "Echo", "Data pipelines"],
    why: "Echo needed Whisper. Whisper needed Python. One dependency, three years of usage.",
    evolution:
      "Still writing it. Still pretending I'll switch to something more performant.",
  },
  {
    name: "Rust",
    since: "2024",
    projects: ["Lattice core", "Custom serialization"],
    why: "Rewrote a Lattice module to understand why it was slow. It was slow because I didn't understand memory. Rust forced understanding.",
    evolution: "Humbling and then rewarding, in that order.",
  },
  {
    name: "GLSL",
    since: "2024",
    projects: ["Graphics experiments", "Procedural textures"],
    why: "I read about signed distance functions at 11pm and didn't sleep until 3am. That's usually a sign.",
    evolution: "Not practical. Entirely worth it.",
  },
  {
    name: "Neo4j / Cypher",
    since: "2023",
    projects: ["Meridian v1", "Meridian v2", "Idea graph prototype"],
    why: "Relational databases weren't built for 'find me researchers who think like this researcher.' Graph databases were.",
    evolution: "The query language is odd. The mental model is correct.",
  },
];

const thoughts = [
  {
    id: 1,
    date: "Jun 2026",
    text: "The hardest part of software is knowing what not to build. Every feature is a debt. Every abstraction is a bet.",
    tag: "building",
  },
  {
    id: 2,
    date: "May 2026",
    text: "I've started thinking of every API as a promise. Promises can be kept, broken, or renegotiated. Most APIs are renegotiated without telling you.",
    tag: "systems",
  },
  {
    id: 3,
    date: "Apr 2026",
    text: "Complexity is often just premature certainty. You add layers because you're sure something will be needed. It usually isn't.",
    tag: "philosophy",
  },
  {
    id: 4,
    date: "Mar 2026",
    text: "Graph databases ruined relational models for me. Not because relational is wrong — because graphs make the shape of data visible.",
    tag: "data",
  },
  {
    id: 5,
    date: "Feb 2026",
    text: "Every abandoned project taught me more than a finished one. Finishing hides the rough parts. Abandoning exposes exactly where you lost the thread.",
    tag: "reflection",
  },
  {
    id: 6,
    date: "Jan 2026",
    text: "I shipped something with a bug I knew about. Not because I was lazy — because fixing it required rethinking a decision made six months ago. That's a different kind of debt.",
    tag: "building",
  },
];

// ─── Type badges ──────────────────────────────────────────────────────────────

const typeStyles: Record<string, string> = {
  idea: "bg-[#E9B44C]/10 text-[#E9B44C] border border-[#E9B44C]/25",
  experiment: "bg-[#7CA982]/10 text-[#7CA982] border border-[#7CA982]/25",
  project:
    "bg-[rgba(240,237,230,0.06)] text-[#F0EDE6] border border-[rgba(240,237,230,0.15)]",
  research: "bg-[#9B7ECC]/10 text-[#9B7ECC] border border-[#9B7ECC]/25",
  tech: "bg-[#4AADCC]/10 text-[#4AADCC] border border-[#4AADCC]/25",
  lesson: "bg-[#CC7E7E]/10 text-[#CC7E7E] border border-[#CC7E7E]/25",
  observation: "bg-[#9B7ECC]/10 text-[#9B7ECC] border border-[#9B7ECC]/25",
  question: "bg-[#E9B44C]/10 text-[#E9B44C] border border-[#E9B44C]/25",
  present: "bg-[#7CA982]/15 text-[#7CA982] border border-[#7CA982]/40",
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

// EcosystemMap
export const nodes = [
  {
    id: "hdp",
    label: "Human Discovery",
    sub: "Platforms",
    x: 90,
    y: 200,
    type: "idea",
  },
  {
    id: "ai",
    label: "AI Systems",
    sub: "",
    x: 290,
    y: 90,
    type: "experiment",
  },
  {
    id: "aa",
    label: "Academic",
    sub: "Analytics",
    x: 510,
    y: 70,
    type: "project",
  },
  {
    id: "ml",
    label: "Multiplayer",
    sub: "Networking",
    x: 240,
    y: 300,
    type: "experiment",
  },
  {
    id: "sr",
    label: "Speech",
    sub: "Recognition",
    x: 460,
    y: 290,
    type: "research",
  },
  {
    id: "cg",
    label: "Computer",
    sub: "Graphics",
    x: 680,
    y: 170,
    type: "idea",
  },
  {
    id: "ds",
    label: "Distributed",
    sub: "Systems",
    x: 620,
    y: 360,
    type: "project",
  },
];

export const edges = [
  ["hdp", "ai"],
  ["ai", "aa"],
  ["ai", "ml"],
  ["ml", "sr"],
  ["sr", "ds"],
  ["aa", "cg"],
  ["cg", "ds"],
  ["aa", "sr"],
];

export const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

export const nodeColorMap: Record<string, string> = {
  idea: "#E9B44C",
  experiment: "#7CA982",
  project: "#F0EDE6",
  research: "#9B7ECC",
};