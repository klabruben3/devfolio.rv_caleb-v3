# Devfolio

**A living developer portfolio and open-source architecture for building one.**

Devfolio is my personal digital workspace for presenting my work, technical growth, ideas, experiments, and thoughts as a software developer.

It is intentionally more than a static résumé or collection of project cards.

The portfolio is designed around structured source data and an authenticated management layer, allowing the site to evolve as I build, learn, write, and experiment without treating every update as a redesign.

The repository is public so other developers can study the architecture, fork it, and adapt it into their own developer portfolio.

---

## The Idea

Most developer portfolios answer one question:

> What has this person built?

Devfolio tries to answer a few more:

> What are they building now?
> What are they learning?
> How do they think?
> What technologies are they exploring?
> How has their work evolved over time?

The guiding principle is:

> **Show the work. Show the thinking. Show the evolution.**

Projects demonstrate execution.

Thoughts provide context.

Ideas show curiosity.

Notebook entries capture learning.

The timeline shows progression.

Together, they create a more complete representation of a developer than a traditional portfolio page.

---

## Portfolio

### Home

The entry point into the portfolio.

It introduces who I am, what I work on, and provides a high-level view of the rest of the workspace.

---

### Projects

A curated collection of software I've built or am actively developing.

Projects can represent products, experiments, engineering challenges, or systems worth highlighting.

The portfolio is not intended to duplicate GitHub. GitHub remains the source for repositories and code, while Devfolio provides the context around selected work.

---

### Technologies

A structured view of the languages, frameworks, platforms, databases, services, and tools I've worked with.

Technologies can evolve independently as new tools become part of my development stack.

---

### Thoughts

Longer-form reflections on software engineering, technology, product development, learning, and the experience of building software.

This section exists for ideas that need more context than a project description or notebook entry.

---

### Evolution

A timeline of meaningful milestones throughout my development journey.

It captures changes in skills, projects, interests, architecture, engineering maturity, and career direction.

Rather than maintaining a separate manually written history, the portfolio should derive timeline information from existing source data wherever possible.

---

### Ideas

A workspace for concepts that are still being explored.

Ideas may eventually become products, experiments, projects, or may simply remain documented thoughts worth revisiting later.

---

### Notebook

A lightweight engineering notebook for things discovered while building.

Entries can include:

* Technical observations
* Architecture notes
* Experiments
* Research
* Useful references
* Development discoveries
* Lessons from debugging
* Concepts worth remembering

It acts as a bridge between temporary notes and more developed Thoughts.

---

## A Living Portfolio

Devfolio is designed around the distinction between **source data** and **derived presentation**.

The management layer should primarily edit information that genuinely originates in the portfolio.

For example:

* Projects are managed as projects.
* Ideas are managed as ideas.
* Notebook entries are managed as notebook entries.
* Thoughts are managed as thoughts.
* Technologies are managed as technologies.

Information that can already be derived from those sources should not require a second manual copy.

This keeps the portfolio maintainable as it grows and avoids turning every section into another dataset that needs to be kept synchronized by hand.

---

## Visitor and Owner Experience

Devfolio supports two different ways of interacting with the same site.

### Visitors

Public visitors can explore the portfolio, projects, ideas, writing, technical history, and other published content.

Interactive features can also allow visitors to communicate directly through the portfolio without requiring a traditional user account.

### Owner

The portfolio includes an authenticated owner experience for managing the underlying content.

Instead of editing hardcoded arrays every time the portfolio changes, the long-term architecture allows the portfolio owner to manage source data directly through the application.

This turns the portfolio itself into the interface for maintaining the portfolio.

---

## Live Chat

Devfolio includes a realtime visitor chat system built with Supabase.

Visitors can start conversations from the portfolio while the authenticated owner can respond through the administrative experience.

The system supports concepts such as:

* Anonymous visitor sessions
* Authenticated owner access
* Realtime messages
* Conversation state
* Unread messages
* Presence
* Owner online status
* Accepting or declining conversations

The feature demonstrates how a personal portfolio can also function as an interactive communication layer rather than only a collection of static pages.

---

## Architecture

The project follows a few principles.

### Source data first

Each piece of information should have a clear canonical source.

Derived sections should reuse existing information rather than introduce unnecessary duplicate state.

### Public experience, private management

The same application can expose a public portfolio while providing additional capabilities to the authenticated owner.

### Content is structured

Projects, technologies, notebook entries, ideas, thoughts, and milestones are treated as structured entities rather than being embedded directly into page components.

### GitHub and Devfolio have different responsibilities

GitHub is the source for repositories, source code, commits, and engineering history.

Devfolio is the presentation and narrative layer around selected work.

The goal is not to reproduce GitHub inside the portfolio.

### The portfolio should evolve with the developer

Adding a project, learning a technology, writing a thought, or recording an idea should naturally expand the portfolio without requiring the entire site structure to be reconsidered.

---

## Open Source

Devfolio is also intended to serve as a starting point for developers who want to build a portfolio with similar principles.

You can fork the repository and replace my content, branding, projects, and configuration with your own while retaining the underlying architecture.

The architecture can be adapted into:

* A traditional developer portfolio
* A personal engineering workspace
* A technical blog and portfolio
* A digital résumé
* A public engineering notebook
* A project showcase
* A personal digital headquarters

You are not expected to reproduce my portfolio exactly.

The goal of open-sourcing the project is to make the **architecture reusable**, while allowing each developer to create an experience that reflects their own work and identity.

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

Supabase provides the backend foundation for authentication, realtime functionality, presence, chat, and persistent application data.

---

## Project Structure

At a high level, Devfolio separates:

**Presentation**
Pages and components responsible for rendering the portfolio.

**Source data**
Projects, ideas, technologies, notebook entries, thoughts, and other portfolio content.

**Derived views**
Sections that can be produced from existing source information rather than maintained independently.

**Authentication**
Owner-only access to management functionality.

**Realtime systems**
Visitor communication, messages, presence, and related interactive functionality.

**Persistence**
Supabase-backed content and application state.

This separation makes it possible to evolve the public portfolio without tightly coupling presentation to content management.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/klabruben3/devfolio.rv_caleb-v3.git
cd devfolio.rv_caleb-v3
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then replace the existing portfolio content, branding, links, and configuration with your own.

Features that depend on Supabase require a Supabase project and the corresponding local environment configuration.

---

## Customizing Your Devfolio

A fork will typically need changes to:

* Personal information and branding
* Social and contact links
* Projects
* Technologies
* Ideas
* Thoughts
* Notebook content
* Timeline/evolution data
* Supabase configuration
* Authentication settings
* Images and media
* Metadata and SEO information

You can also remove systems you do not need.

For example, a simpler portfolio could use the same frontend architecture without the realtime chat or owner-management functionality.

---

## Direction

Devfolio is gradually moving toward becoming a **personal digital headquarters** rather than simply a portfolio.

The public site remains the presentation layer, while the authenticated owner experience becomes a workspace for managing the information behind it.

The intended model is:

```text
Create once
    ↓
Store as source data
    ↓
Reuse throughout the portfolio
    ↓
Derive additional views where possible
```

The less information that needs to be manually duplicated, the easier the portfolio becomes to maintain as the amount of work, writing, knowledge, and history grows.

---

## License

This repository is open source and intended to be studied, forked, modified, and used as the foundation for other developer portfolios.

My personal written content, branding, project assets, and portfolio identity remain separate from the reusable application architecture.

See the repository's license for the exact terms of use.
