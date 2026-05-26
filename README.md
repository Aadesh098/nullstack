# NullStack

**A terminal-native AI coding agent engineered for autonomous code orchestration.**

NullStack is an AI-first development runtime that transforms the terminal into an autonomous software engineering environment. It combines intelligent agents, streaming AI workflows, and local execution tooling to plan, generate, modify, and orchestrate production-grade code directly inside your project workspace.

---

## Usage Guide

- **Install Bun:** Set up the Bun runtime using the official [Bun Installation Docs](https://bun.com/docs/installation)
- **Install NullStack:** Install the global CLI package using `npm install -g avsnullstack --silent`
- **Open Your Project:** Navigate into any local code repository directly from the terminal
- **Launch NullStack:** Start the AI coding runtime using the `nullstack` command
- **Authenticate:** Login securely through the terminal using the `/login` command
- **Upgrade Credits:** Add AI usage credits anytime through the `/upgrade` workflow
- **Start Building:** Plan, generate, edit, and orchestrate production-grade code directly from your terminal environment

---

## Core Highlights

- **Terminal-Native Interface:** Modern OpenTUI-powered developer experience built for the command line
- **AI Code Orchestration:** Coordinates intelligent workflows for planning, generation, and execution
- **Streaming Responses:** Real-time AI output with persistent conversational state
- **Agentic Workflows:** Supports autonomous planning and implementation execution modes
- **Local Tool Execution:** Reads, edits, writes, and executes files directly within projects
- **Persistent Sessions:** Maintains workflow continuity and chat history across runs
- **OAuth Authentication:** Secure Clerk-powered CLI authentication flow
- **Usage Metering:** Credit-based AI usage and billing powered by Polar
- **Monorepo Architecture:** Modular separation of CLI, server, database, and shared contracts
- **Production Runtime:** Optimized for Bun-powered low-latency execution and scalability
- **Developer Experience:** Fast builds, hot reloads, and streamlined terminal workflows
- **Shared Contract System:** Unified schemas and AI tool contracts across services

---

## Tech Stack

**Core:** Bun, TypeScript, React 19  
**Terminal UI:** OpenTUI, React Router  
**AI & Agents:** AI SDK, Anthropic SDK, OpenAI SDK  
**Backend:** Hono  
**Database:** Prisma, PostgreSQL  
**Authentication:** Clerk OAuth  
**Billing:** Polar  
**Validation & Schemas:** Zod  
**Utilities:** dotenv, pretty-ms  
**Deployment:** Railway, Bun Runtime

---

## Vision

NullStack represents a shift toward autonomous terminal engineering - where developers define intent, intelligent agents coordinate execution, and the terminal becomes a runtime for production-grade system generation.

---
