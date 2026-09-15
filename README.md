# Devfolio

**Devfolio is my living developer portfolio and personal engineering workspace.**

It is the public-facing home for my projects, technical growth, ideas, notes, experiments, and reflections on building software.

Rather than treating a portfolio as a static résumé recreated on the web, Devfolio is designed as a system that evolves alongside my work.

Visitors can explore what I have built and what I am currently thinking about, while the authenticated workspace allows me to maintain the underlying information directly from the application.

---

## Philosophy

Devfolio is built around a simple idea:

> **Show the work. Show the thinking. Show the evolution.**

A project shows what was built.

A notebook entry shows what was learned.

An idea shows what might come next.

A timeline shows how those pieces connect over time.

Together, they communicate more about an engineer than a conventional list of technologies and completed projects.

---

## Workspace

Devfolio is divided into several connected areas.

### Home

The entry point into the workspace.

It introduces who I am, what I work on, and the areas of software engineering I am currently exploring.

The home page is primarily a presentation layer. Where possible, information displayed here is derived from the underlying portfolio data rather than maintained independently.

---

### Projects

A curated view of the software projects that best represent my work.

Projects can include:

* Production applications
* Experiments
* Engineering prototypes
* Systems under active development
* Older projects that represent important stages of growth

GitHub remains the source for repositories and source code.

Devfolio instead provides the **story and context around selected work** — why something was built, what problems were solved, what technologies were involved, and what was learned from it.

---

### Technologies

The languages, frameworks, libraries, infrastructure, platforms, and engineering tools I have worked with.

The goal is not to maintain a decorative list of logos.

Technologies exist as reusable source data that can also support other parts of the portfolio, including projects and technical experience.

As my toolset evolves, the technology collection evolves with it.

---

### Ideas

A place for concepts that have not necessarily become projects yet.

Ideas may include:

* Product concepts
* Engineering experiments
* Architecture explorations
* Developer tools
* Systems worth investigating
* Problems I may want to solve later

This creates a visible distinction between **something I am exploring** and **something I have already built**.

---

### Thoughts

Longer reflections on software engineering, products, systems, learning, and the process of becoming a better developer.

Thoughts are less about documenting syntax or implementation details and more about capturing the reasoning behind the work.

---

### Notebook

The technical working memory of the portfolio.

The notebook contains smaller pieces of information such as:

* Engineering notes
* Research
* Technical discoveries
* Architecture observations
* References
* Things worth remembering
* Lessons from debugging or building systems

Unlike Thoughts, notebook entries do not need to become polished articles.

They exist to preserve useful knowledge while it is still fresh.

---

### Evolution

A timeline of meaningful changes throughout my development journey.

Instead of attempting to recreate my entire history, Evolution highlights the moments that changed how I build software:

* New technical capabilities
* Important projects
* Architecture milestones
* Changes in engineering approach
* Product-building experience
* Lessons that influenced later work

It provides context for how the current portfolio came to exist.

---

## Public and Private Workspace

Devfolio has two sides.

### Visitor experience

Visitors interact with the public portfolio and can explore the information I have chosen to publish.

The application also includes realtime visitor interaction, including the portfolio chat system.

### Owner experience

The same application can recognize the authenticated owner and expose management capabilities that are not available to normal visitors.

The long-term goal is to manage the portfolio **from inside the portfolio itself**.

That includes maintaining source information such as:

* Projects
* Technologies
* Ideas
* Notebook entries
* Thoughts
* Evolution events

The public interface then reflects that data without requiring the same information to be manually maintained in several different places.

---

## Portfolio Data Model

One of the main principles behind the current Devfolio architecture is:

> **Manage source data, not duplicated presentation data.**

If information already exists somewhere authoritative in the portfolio, another section should derive from that information whenever possible.

For example:

* Technologies referenced by projects should come from the technology collection.
* Home-page summaries should be derived from the underlying portfolio state where appropriate.
* Timeline information should reference meaningful events rather than duplicate entire project records.
* Project repositories remain owned by GitHub rather than being recreated as a second repository catalogue inside the portfolio.

This reduces the maintenance cost of keeping a living portfolio current.

---

## Realtime Chat

Devfolio includes a Supabase-powered realtime chat system for communication between visitors and the portfolio owner.

Visitors can enter the chat without creating a conventional account, while owner access is authenticated separately.

The system includes functionality such as:

* Anonymous visitor sessions
* Realtime conversations
* Owner authentication
* Presence
* Online status
* Chat acceptance and decline
* Unread-message state
* Conversation management

The chat turns the portfolio from a one-way presentation into a small interactive application.

---

## Technology

Devfolio is built primarily with:

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Supabase**
* **Motion**
* **Lucide**
* **React Markdown**
* **remark-gfm**

Supabase provides authentication, persistence, realtime communication, and presence for the interactive parts of the workspace.

The application is deployed with **Vercel**.

---

## Design Direction

Devfolio intentionally avoids the conventional portfolio structure of:

**Hero → About → Skills → Projects → Contact**

The application is designed more like a personal digital environment.

The visual language combines editorial presentation with the feeling of an engineering notebook or workshop: structured enough to communicate professionally, but personal enough to reflect the way I actually think and work.

Animation and interaction are used to reinforce that experience rather than existing only as decoration.

---

## Architecture Principles

### One source of truth

Information should be owned in one meaningful place and reused elsewhere.

The portfolio should not require several copies of the same project, technology, milestone, or personal detail to remain synchronized manually.

### GitHub owns source code

Devfolio does not attempt to replace GitHub.

GitHub remains the canonical home for repositories, commits, source history, and the complete project catalogue.

Devfolio provides the curated narrative around the work worth highlighting.

### The portfolio should be manageable

A living portfolio becomes difficult to maintain if every update requires editing source files.

The workspace is therefore moving toward structured content management directly from the authenticated application.

### Public and private concerns stay separate

Visitors should see the portfolio.

The owner should be able to operate it.

Those experiences can share the same application without sharing the same permissions.

### Growth is part of the product

Incomplete ideas, experiments, lessons, and changes in thinking are not treated as noise.

They are part of the engineering story Devfolio is intended to preserve.

---

## Direction

Devfolio is gradually becoming a **digital headquarters for my engineering work**.

The aim is not to turn it into another GitHub, another notes application, or another résumé builder.

Instead, it should sit above those systems and connect the pieces that describe my work:

* What I have built
* What I know
* What I am learning
* What I am thinking about
* What I want to build next
* How my engineering approach is changing over time

The portfolio should remain useful even when nobody else is viewing it.

That is what makes it a workspace rather than simply a website.
