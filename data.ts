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
  {
    id: 7,
    topic: "Learning by Building",
    note: "I learn fastest when the thing I want to build forces me to answer a question I cannot answer yet.",
    type: "observation",
    rot: -1.1,
  },
  {
    id: 8,
    topic: "Second Doors",
    note: "I started development because I wanted another door to exist if the academic one ever closed.",
    type: "observation",
    rot: 1.7,
  },
  {
    id: 9,
    topic: "Product Judgement",
    note: "Being able to build something does not automatically mean it deserves to become a product.",
    type: "observation",
    rot: -0.7,
  },
  {
    id: 10,
    topic: "Knowing When to Stop",
    note: "Abandoning a project can be a design decision too. Sometimes the useful idea belongs somewhere else.",
    type: "idea",
    rot: 1.2,
  },
  {
    id: 11,
    topic: "Context Engineering",
    note: "The difficult part of an AI assistant is often not generating the answer. It is deciding what the model should know before answering.",
    type: "observation",
    rot: -1.8,
  },
  {
    id: 12,
    topic: "Persistent Memory",
    note: "If software can remember what happened, why it happened and what changed afterwards, it starts feeling less like a tool and more like a workspace.",
    type: "idea",
    rot: 0.9,
  },
  {
    id: 13,
    topic: "Maintenance Cost",
    note: "A feature is not finished when it ships. It creates something that now has to survive every version that comes after it.",
    type: "observation",
    rot: -1.3,
  },
  {
    id: 14,
    topic: "Source of Truth",
    note: "Duplicated state is usually where systems begin lying to themselves.",
    type: "observation",
    rot: 1.6,
  },
  {
    id: 15,
    topic: "Evidence Over Titles",
    note: "A developer's work should be able to explain their ability better than a job title ever could.",
    type: "idea",
    rot: -0.9,
  },
  {
    id: 16,
    topic: "Shipping",
    note: "There is a point where another architectural improvement matters less than putting the thing in front of real people.",
    type: "observation",
    rot: 1.1,
  },
  {
    id: 17,
    topic: "Interaction Craft",
    note: "Some projects matter less because the product survived and more because they trained my eye for motion, responsiveness and interaction.",
    type: "observation",
    rot: 1.5,
  },
  {
    id: 18,
    topic: "Reusable Fragments",
    note: "Even abandoned projects tend to leave something behind: a component, a hook, an interaction pattern or a better way to structure the next build.",
    type: "idea",
    rot: -1.2,
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────

const timelineNodes = [
  {
    year: 2022,
    items: [
      {
        label: "A second door",
        type: "lesson",
        desc: "Started learning web development late in the year while university felt uncertain. The goal was practical: build an employable skill that could exist independently of a degree.",
      },
      {
        label: "HTML, CSS & JavaScript",
        type: "tech",
        desc: "Learned the browser from the ground up through YouTube, Notes for Professionals and anything else that could answer the next question.",
      },
      {
        label: "Learning by building",
        type: "lesson",
        desc: "Instead of moving chapter by chapter, I would imagine something, find the pieces I did not understand yet, learn them, and build the idea.",
      },
    ],
  },
  {
    year: 2023,
    items: [
      {
        label: "Vanilla web foundations",
        type: "tech",
        desc: "Spent most of the early phase in HTML, CSS and JavaScript, using small interfaces and Frontend Mentor-style challenges to make the fundamentals feel natural.",
      },
      {
        label: "Styling experiments",
        type: "experiment",
        desc: "Tried tools such as SCSS, then learned that extra abstraction is only useful when it actually improves the way I work.",
      },
      {
        label: "React enters the picture",
        type: "research",
        desc: "Started exploring React and component-based UI. Reuse, composition and state felt like a much bigger conceptual step than the vanilla work that came before it.",
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        label: "FastNote v1 → v2",
        type: "project",
        desc: "Built and rebuilt a small notes app mainly because I wanted another project in the toolbox. The product idea was ordinary, but the hours spent on animation, interface behaviour and JavaScript helped lock programming concepts in.",
      },
      {
        label: "Development interrupted",
        type: "lesson",
        desc: "Losing reliable access to a computer interrupted the momentum. Development became inconsistent while I took a gap year and shifted much of my attention into administrative work.",
      },
      {
        label: "The early archive",
        type: "project",
        desc: "The GitHub record from this period preserves the foundation: QR cards, profile pages, accordions, preview components, FastNote and other small browser experiments.",
      },
      {
        label: "The method survived the gap",
        type: "observation",
        desc: "Even when the output slowed down, the way I learned did not change: start with a concrete thing I want to understand, then learn only what is needed to make it work.",
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        label: "Full-force return",
        type: "present",
        desc: "Returned to development with a working machine and much more urgency, this time focusing less on isolated exercises and more on projects I actually wanted to exist.",
      },
      {
        label: "Clean Chase",
        type: "experiment",
        desc: "Used the Canvas API to make a randomly wandering target with a chain of circles following one another. It pushed me into requestAnimationFrame, distance-based motion, responsive canvas state and early experiments with Web Workers.",
      },
      {
        label: "Devfolio v1",
        type: "project",
        desc: "Built the first serious portfolio in React and Vite. It was still a conventional portfolio, but it became a playground for modular project previews, motion, visual identity and reusable UI.",
      },
      {
        label: "Devfolio v2",
        type: "project",
        desc: "Rebuilt the portfolio with Next.js and TypeScript. The second version was less about proving I could make a page and more about refining interaction, composition and the way the site itself was structured.",
      },
      {
        label: "Programming beyond the browser",
        type: "tech",
        desc: "University introduced Python and C++, which quickly escaped the classroom through statistical experiments, utilities and game development.",
      },
      {
        label: "Crash Distribution Analyzer",
        type: "project",
        desc: "Used Python to fit and compare statistical distributions, turning coursework and curiosity into a small analytical tool.",
      },
      {
        label: "Pixel Kombat",
        type: "project",
        desc: "Built a C++ arcade game and started thinking about software as interacting systems rather than only pages and components.",
      },
      {
        label: "From exercises to systems",
        type: "lesson",
        desc: "Projects stopped existing mainly to prove that I understood a technology. Increasingly, the technology became the means to answer a problem I cared about.",
      },
    ],
  },
  {
    year: 2026,
    items: [
      {
        label: "Space Tourism",
        type: "project",
        desc: "Used a Frontend Mentor challenge as a focused test of React, Next.js, TypeScript and responsive implementation without having to invent the product itself.",
      },
      {
        label: "iLayers",
        type: "project",
        desc: "Tried to turn reusable UI solutions into a community product: part component library, part social feed, with ideas around CodeSandbox and generated previews. The product thesis weakened, but the build produced a large amount of reusable responsive and interaction work.",
      },
      {
        label: "Product judgement",
        type: "lesson",
        desc: "iLayers made an important distinction clearer: a technically ambitious build can still be solving a problem that is not valuable enough. Knowing when to stop became part of the work.",
      },
      {
        label: "Buhle Bezwe ECD",
        type: "project",
        desc: "Shipped a client-facing website for a real early childhood development centre, where the constraints came from an organisation rather than a coding exercise.",
      },
      {
        label: "Realtime experiments",
        type: "research",
        desc: "Socket.IO chat experiments turned synchronization itself into something worth studying and eventually fed directly into multiplayer work.",
      },
      {
        label: "Phase Shift",
        type: "project",
        desc: "Moved from rendering a game to thinking about an authoritative multiplayer world: server-owned simulation, persistent world space, interpolation and networked movement.",
      },
      {
        label: "Devfolio v3",
        type: "project",
        desc: "Rebuilt the portfolio again as a realtime public/private workspace with anonymous visitors, admin auth, presence, live conversations and an internal operating layer.",
      },
      {
        label: "Workbench",
        type: "project",
        desc: "Started building an internal engineering workspace for projects, ideas, decisions, bugs, patterns and AI-assisted knowledge capture, then folded the strongest ideas back toward Devfolio.",
      },
      {
        label: "Academiq",
        type: "project",
        desc: "Turned an academic planner into a full academic workspace, put it in front of real students and began learning what changes once software has actual users.",
      },
      {
        label: "Iris",
        type: "experiment",
        desc: "Moved from chatbot-style AI toward assistants that can selectively fetch application state, call tools and reason against structured academic context.",
      },
      {
        label: "Medusa",
        type: "research",
        desc: "Separated document intelligence into a Python service for turning university study guides into validated, structured academic data.",
      },
      {
        label: "The compounding year",
        type: "present",
        desc: "Multiple projects now overlap instead of replacing one another. Product work, UI craft, AI, databases, realtime systems, document processing and networking increasingly feed ideas into each other.",
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
    kind: "Product",
    repoUrl: null,
    liveUrl: "https://academiq-nwu.vercel.app",
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
      "Cloudflare R2",
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
    status: "Live",
    year: "2026 – present",
    kind: "Personal system",
    repoUrl: "https://github.com/klabruben3/devfolio.rv_caleb-v3",
    liveUrl: "https://devfolio-rv-caleb-v3.vercel.app",
    problem:
      "Most portfolios become stale the moment they're deployed. They show work, but they don't participate in it.",
    motivation:
      "The first version was simply a place to show what I could build. Each rebuild became a way to test how much further a personal site could go.",
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
    tagline: "Your work, connected.",
    status: "Abandoned",
    year: "2026",
    kind: "Developer workspace",
    repoUrl: null,
    liveUrl: "https://workbenchdev.vercel.app",

    problem:
      "GitHub remembers code and LinkedIn remembers job titles, but neither captures the full story of how a developer's projects, ideas, decisions, experiments and knowledge evolve.",

    motivation:
      "Workbench began as the private operating layer behind Devfolio — a place where I could manage the work that my public portfolio represents. It evolved into an idea for a developer workspace that connects projects, engineering notes, technologies, decisions and activity into one living system.",

    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "AI SDK",
      "OpenAI",
      "Gemini",
      "Groq",
    ],

    lesson:
      "A developer portfolio becomes far more useful when it is a projection of an active workspace instead of a separate website that has to be maintained manually.",

    future:
      "Some of the ideas explored here may eventually become part of Devfolio, particularly project management, contextual AI and controlling what information is exposed publicly.",

    reasonToAbandon:
      "I eventually realized that much of what Workbench was meant to become could live directly inside Devfolio. More importantly, I wasn't convinced that a standalone developer workspace solved a strong enough problem to justify turning it into its own product.",
  },
  {
    id: "ilayers",
    name: "iLayers",
    tagline: "A community experiment around reusable UI solutions",
    status: "Abandoned",
    year: "2026",
    kind: "Product experiment",
    repoUrl: "https://github.com/klabruben3/layers",
    liveUrl: "https://ilayers.vercel.app/",
    problem:
      "Useful interface solutions are scattered across repositories, snippets, component libraries and posts, usually without much context about where they came from or how they are actually used.",
    motivation:
      "ReactBits made reusable components feel discoverable. I wanted to push that idea toward a community: developers could publish solutions, attach their code, and eventually generate visual previews through tools such as CodeSandbox or Remotion so people could understand a component before opening the implementation.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Motion",
      "Remotion",
      "Tailwind CSS",
    ],
    lesson:
      "A project can be technically rich and still have a weak product thesis. iLayers taught me a lot about responsive UI, reusable interaction patterns and component architecture, but it also taught me to ask whether the problem is valuable enough before continuing to deepen the architecture.",
    future:
      "The standalone product is not a priority, but many of its interaction patterns and reusable components can continue living inside newer projects.",
    reasonToAbandon:
      "I spent too much time refining responsiveness and interface details before resolving the more important architectural and product questions. Eventually I stopped believing the standalone platform was valuable enough to justify the amount of work it would require.",
  },
  {
    id: "space-tourism",
    name: "Space Tourism",
    tagline: "A focused responsive frontend exercise in Next.js",
    status: "Completed",
    year: "2026",
    kind: "Frontend challenge",
    repoUrl: "https://github.com/klabruben3/space-tourism",
    liveUrl: "https://space-tourism-swart-kappa.vercel.app/",
    problem:
      "I wanted a project where the visual target was already defined so I could focus entirely on implementation quality, responsive behaviour and translating a polished design into React.",
    motivation:
      "Frontend Mentor removed the need to invent a product and made the challenge much more direct: reproduce the experience accurately while testing how comfortable I had become with React, Next.js and responsive layouts.",
    tech: ["Next.js", "React", "TypeScript", "Responsive Design", "CSS"],
    lesson:
      "Not every useful project needs a novel product idea. A constrained implementation challenge can expose weaknesses in layout, responsiveness and component structure much faster than an open-ended build.",
    future:
      "It remains a reference point for how much more deliberate my frontend implementation had become before the larger product work of 2026.",
  },
  {
    id: "medusa",
    name: "Medusa",
    tagline: "Documents in. Structured academic data out.",
    status: "Active",
    year: "2026 – present",
    kind: "Backend service",
    repoUrl: "https://github.com/klabruben3/medusa",
    liveUrl: null,
    problem:
      "University study guides contain the information Academiq needs, but that information arrives as messy human-oriented documents rather than predictable schemas.",
    motivation:
      "Adding every module manually doesn't scale. I wanted to see how far a document-processing system could go toward building modules automatically.",
    tech: ["Python", "FastAPI", "pdfplumber", "VoyageAI", "ChromaDB", "Groq"],
    lesson:
      "Extraction isn't just an LLM problem. Layout, tables, chunking, retrieval, validation and strict schema rules often matter more than the final prompt.",
    future:
      "More reliable extraction, OCR support, stronger validation and tighter integration with Academiq's module creation pipeline.",
  },
  {
    id: "phase-shift",
    name: "Phase Shift",
    tagline: "A world that exists beyond the viewport",
    status: "Paused",
    year: "2026 – present",
    kind: "Realtime system",
    repoUrl: null,
    liveUrl: "https://phase-shift-alpha.vercel.app",
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
      "Monorepo",
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
    kind: "Client work",
    repoUrl: null,
    liveUrl: "https://buhle-bezwe.vercel.app",
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
  {
    id: "pixel-kombat",
    name: "Pixel Kombat",
    tagline: "Learning systems through a C++ arcade game",
    status: "Completed",
    year: "2025",
    kind: "Game",
    repoUrl: null,
    liveUrl: null,
    problem:
      "I wanted to take the C++ I was learning academically and use it in something with movement, state, rules and visible consequences.",
    motivation:
      "Games force many small programming ideas to work together at once. That made it a useful bridge between learning syntax and thinking in interacting systems.",
    tech: ["C++", "Game Logic", "State", "Collision"],
    lesson:
      "A program becomes much easier to reason about once behaviour, state and responsibilities are separated instead of being treated as one large loop.",
    future:
      "Its ideas later reappeared at a much larger scale in Phase Shift, where movement and state became networked and server-authoritative.",
  },
  {
    id: "crash-distribution-analyzer",
    name: "Crash Distribution Analyzer",
    tagline: "Statistics, probability and Python in one small tool",
    status: "Completed",
    year: "2025",
    kind: "Data experiment",
    repoUrl: "https://github.com/klabruben3/crash-distribution-analyzer",
    liveUrl: null,
    problem:
      "I wanted to understand whether multiplier data could be described meaningfully by known statistical distributions instead of relying on intuition.",
    motivation:
      "It gave me a reason to move Python beyond coursework and use it for data analysis, plotting and probability questions I actually wanted answered.",
    tech: ["Python", "Statistics", "Probability", "Data Analysis"],
    lesson:
      "Programming became more useful once I stopped seeing languages as identities and started choosing them according to the problem.",
    future:
      "That comfort with Python later made it a natural choice for Medusa's document and AI processing pipeline.",
  },
  {
    id: "devfolio-v2",
    name: "Devfolio v2",
    tagline: "The portfolio rebuild that moved me into Next.js",
    status: "Completed",
    year: "2025",
    kind: "Portfolio iteration",
    repoUrl: "https://github.com/klabruben3/devfolio.rv_caleb-v2",
    liveUrl: "https://devfoliorvcaleb.vercel.app/",
    problem:
      "The first portfolio had become a snapshot of what I knew when I built it. I wanted to rebuild it with the newer tools and interaction ideas I had picked up rather than keep patching the original.",
    motivation:
      "Version two was where the idea of deliberately rebuilding the same personal product started to make sense: the portfolio itself could show how my engineering approach was changing.",
    tech: ["Next.js", "React", "TypeScript", "Responsive Design", "Animation"],
    lesson:
      "Rebuilding the same product is useful when the goal is not cosmetic redesign but comparing two different levels of understanding. Versioning became a way to preserve that progression instead of erasing it.",
    future:
      "Its role is historical now; Devfolio v3 carries the living version of the idea.",
  },
  {
    id: "devfolio-v1",
    name: "Devfolio v1",
    tagline: "The first portfolio I treated as an actual React project",
    status: "Completed",
    year: "2025",
    kind: "Portfolio iteration",
    repoUrl: "https://github.com/klabruben3/devfolio.rv-caleb",
    liveUrl: "https://klabruben3.github.io/devfolio.rv-caleb/",
    problem:
      "I needed a place that could present my work while giving me enough room to experiment with the React patterns I was learning.",
    motivation:
      "Instead of building another isolated challenge, I wanted one project that could keep absorbing new UI ideas: project previews, skill visualisation, dynamic content and increasingly reusable components.",
    tech: ["React", "Vite", "JavaScript", "CSS", "Component Design"],
    lesson:
      "A portfolio can be more than a container for finished work. For me it became a recurring engineering surface where each new idea could be tested against something I already understood.",
    future:
      "The project eventually gave way to v2, then v3, but the habit of using Devfolio as an experimental surface survived every rewrite.",
  },
  {
    id: "clean-chase",
    name: "Clean Chase",
    tagline: "Random motion, chained pursuit and browser animation",
    status: "Completed",
    year: "2025",
    kind: "Browser experiment",
    repoUrl: "https://github.com/klabruben3/clean-chase",
    liveUrl: "https://klabruben3.github.io/clean-chase/",
    problem:
      "I wanted motion that felt continuously alive without scripting a fixed path: one point should keep choosing new targets while a trail of other points follows it.",
    motivation:
      "The experiment was small enough to let me focus on the mechanics themselves — random targets, distance checks, interpolation, canvas rendering and the visual behaviour that emerges when every circle chases the one before it.",
    tech: [
      "JavaScript",
      "Canvas API",
      "requestAnimationFrame",
      "Web Workers",
      "Geometry",
    ],
    lesson:
      "A tiny visual experiment can teach a surprising amount. Motion became a problem of state, distance and update loops rather than a CSS effect, and it was one of the first times I deliberately pushed work through lower-level browser APIs.",
    future:
      "The project is complete as an experiment, but the same attraction to procedural motion and systems-driven visuals keeps resurfacing in later interfaces and game work.",
  },
  {
    id: "fastnote",
    name: "FastNote 2.0",
    tagline: "A simple notes app that became a programming practice ground",
    status: "Completed",
    year: "2024",
    kind: "Learning project",
    repoUrl: "https://github.com/klabruben3/FastNote-2.0",
    liveUrl: "https://klabruben3.github.io/FastNote-2.0/src/",
    problem:
      "There was no missing note-taking product that needed to exist. I mainly wanted a complete application-shaped project where I could repeatedly practice JavaScript, interface state and animation.",
    motivation:
      "At that stage, having something substantial in the toolbox mattered. FastNote gave new programming concepts somewhere concrete to land, even when the product itself was solving an already-solved problem.",
    tech: ["HTML", "CSS", "JavaScript", "DOM", "Animation"],
    lesson:
      "A project does not need to be commercially original to be valuable as practice. The important part was the amount of repetition: state changes, interactions, animation timing and the discipline of finishing behaviour rather than only styling screens.",
    future:
      "Its value is historical rather than product-oriented. It marks the point where small web exercises started turning into application-shaped builds.",
  },
  {
    id: "frontend-foundations",
    name: "Frontend Foundations",
    tagline: "The small builds that taught me how the browser works",
    status: "Completed",
    year: "2022 – 2025",
    kind: "Learning archive",
    repoUrl: null,
    liveUrl: null,
    problem:
      "I needed a way to turn HTML, CSS and JavaScript from things I had read about into skills I could actually use without following a tutorial line for line.",
    motivation:
      "I learned fastest when I had something concrete to reproduce, change or invent — from Frontend Mentor challenges to tiny interactions and utilities.",
    tech: ["HTML", "CSS", "JavaScript", "SCSS", "React", "Canvas API"],
    lesson:
      "The habit that lasted was more important than any individual project: imagine something, find the missing knowledge, learn it, build it, then repeat.",
    future:
      "Those projects remain the baseline I can compare everything else against — from styling cards to designing full application systems.",
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
    name: "HTML / CSS / JavaScript",
    since: "2022",
    projects: ["Frontend Mentor", "FastNote", "Clean Chase", "Early experiments"],
    why: "They were the first tools I learned because they let an idea become visible immediately in the browser.",
    evolution:
      "What began as learning tags, selectors and DOM events expanded into animation loops, canvas drawing, pointer interactions and the browser behaviour underneath every framework that followed.",
  },
  {
    name: "React",
    since: "2023–24",
    projects: [
      "Devfolio v1",
      "Devfolio v2",
      "Devfolio v3",
      "iLayers",
      "Space Tourism",
      "Frontend Foundations",
    ],
    why: "React was my first major step away from building pages as isolated HTML, CSS and JavaScript files. It introduced components, reusable UI and a different way of thinking about application state.",
    evolution:
      "I initially approached React as a way to build reusable interface pieces. Projects such as Devfolio and iLayers pushed that instinct hard through custom hooks, gesture handling and responsive composition; over time the harder questions moved toward state, data flow and application architecture.",
  },
  {
    name: "Browser APIs / Interaction",
    since: "2025",
    projects: ["Clean Chase", "iLayers", "Devfolio"],
    why: "Visual interaction kept pulling me below the component layer. Sometimes the interesting problem was not the page itself, but pointer movement, animation timing, canvas state or how an interaction should behave across screen sizes.",
    evolution:
      "Canvas and requestAnimationFrame led into pointer capture, gesture direction, geometry, responsive interaction hooks and small reusable UI primitives. That work is where the more artistic side of how I build tends to show up.",
  },
  {
    name: "Next.js",
    since: "2025",
    projects: [
      "Devfolio",
      "Academiq",
      "Workbench",
      "Buhle Bezwe",
      "Phase Shift",
    ],
    why: "As the things I wanted to build became more application-like, I needed more than client-side components. Next.js gave routing, server-side work, API boundaries and application structure a natural place to live.",
    evolution:
      "It started as the framework I used to build React applications and gradually became the foundation for full products involving authentication, databases, server logic, storage, realtime systems and AI.",
  },
  {
    name: "TypeScript",
    since: "2024",
    projects: [
      "Academiq",
      "Devfolio v2/v3",
      "iLayers",
      "Space Tourism",
      "Workbench",
      "Phase Shift",
    ],
    why: "It became the common language across nearly everything I build on the web.",
    evolution:
      "Started as a safer way to write frontend code. Now I use the type system to think about APIs, shared protocols, state and system boundaries.",
  },
  {
    name: "Supabase / PostgreSQL",
    since: "2026",
    projects: ["Devfolio", "Academiq", "Workbench"],
    why: "I needed auth. Then realtime. Then RLS. Then synchronization. It quietly became infrastructure.",
    evolution:
      "I think much more carefully now about ownership, permissions, synchronization and where authoritative state lives.",
  },
  {
    name: "AI SDK / LLM APIs",
    since: "2026",
    projects: ["Iris", "Workbench", "Academiq"],
    why: "I became more interested in assistants that can use application state and tools than chatbots that only generate text.",
    evolution:
      "The focus has shifted from prompting toward context selection, tool design, token efficiency, retrieval and persistent memory.",
  },
  {
    name: "Python / FastAPI",
    since: "2025",
    projects: ["Crash Distribution Analyzer", "Medusa"],
    why: "Python first arrived through university work, then became useful for statistics, data analysis and eventually document and AI processing.",
    evolution:
      "It went from a second programming language into the backend side of work that does not naturally belong inside a Next.js application.",
  },
  {
    name: "C++",
    since: "2025",
    projects: ["Pixel Kombat", "University coursework"],
    why: "C++ forced me to think more explicitly about program structure, state and lower-level behaviour than web development usually required.",
    evolution:
      "The language itself is no longer central to my web stack, but the systems thinking it encouraged carried directly into later game and networking work.",
  },
  {
    name: "Socket.IO / Realtime",
    since: "2026",
    projects: ["Phase Shift", "Devfolio", "Simple Chat App"],
    why: "Realtime features eventually made me curious about what happens when synchronization becomes the actual product.",
    evolution:
      "Presence and chat led toward authoritative simulation, interpolation, shared protocols and distributed world state.",
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
  {
    id: 7,
    date: "2022 → now",
    text: "I never learned development particularly well by reading everything first. Give me something I want to build and a question I cannot answer yet, and the missing theory suddenly has somewhere to stick.",
    tag: "learning",
  },
  {
    id: 8,
    date: "2022 → now",
    text: "I started learning web development because I wanted another door to exist if university ever stopped being one. Somewhere along the way, the backup plan became something I genuinely wanted to keep building.",
    tag: "reflection",
  },
  {
    id: 9,
    date: "Sep 2026",
    text: "Not every abandoned project was wasted work. iLayers did not survive as a product, but some of the interaction patterns and reusable pieces were better than the product idea that originally contained them.",
    tag: "product",
  },
  {
    id: 10,
    date: "2025 → now",
    text: "The artist in me keeps leaking into the engineering. I can start with a practical component and somehow end up caring about motion curves, gesture direction, timing and the tiny details of how it feels.",
    tag: "craft",
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
    x: 200,
    y: 200,
    type: "idea",
  },
  {
    id: "ai",
    label: "AI",
    sub: "Assistants",
    x: 90,
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
