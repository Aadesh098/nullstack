<p align="center">
  <img src="https://img.shields.io/npm/v/avsnullstack?style=flat-square&color=56D6C2&labelColor=0D0D12" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/avsnullstack?style=flat-square&color=89B4FA&labelColor=0D0D12" alt="npm downloads" />
  <img src="https://img.shields.io/badge/runtime-bun-f472b6?style=flat-square&labelColor=0D0D12" alt="bun" />
  <img src="https://img.shields.io/badge/license-MIT-82E0AA?style=flat-square&labelColor=0D0D12" alt="license" />
</p>

<h1 align="center">NullStack</h1>

<p align="center">
  <strong>Terminal-native AI coding agent.</strong><br/>
  Plan, generate, edit, and execute code — directly from your terminal.
</p>

<p align="center">
   <a href="https://github.com/Aadesh098/nullstack">GitHub</a>
</p>

---

## Overview

NullStack is a terminal-first AI coding agent inspired by [OpenCode](https://github.com/nicholasgriffintn/opencode). It brings streaming AI chat, agentic tool execution, session management, and a full keyboard-driven UI into your terminal — powered by [Bun](https://bun.sh), [OpenTUI](https://github.com/anthropics/opentui), and React 19.

Drop into any project directory, run `nullstack`, and start building with AI.

---

## Install

Requires [Bun](https://bun.sh) ≥ 1.0

```bash
# npm
npm install -g avsnullstack

# bun
bun add -g avsnullstack
```

## Quick Start

```bash
cd your-project
nullstack
```

Authenticate with `/login`, then start chatting. That's it.

---

## Features

### Two Modes

| Mode      | Description                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------- |
| **Build** | Full read + write access. The agent can create files, edit code, and run shell commands.           |
| **Plan**  | Read-only analysis. The agent can read files and search your codebase, but cannot modify anything. |

Switch between modes instantly with `/agents` or <kbd>Tab</kbd>.

### Agentic Tool Execution

Tools run **locally on your machine** — the AI streams instructions, your terminal executes them. No code leaves your environment.

| Tool            | Mode         | Description                     |
| --------------- | ------------ | ------------------------------- |
| `readFile`      | Plan · Build | Read file contents              |
| `listDirectory` | Plan · Build | List directory entries          |
| `glob`          | Plan · Build | Find files by glob pattern      |
| `grep`          | Plan · Build | Search file contents with regex |
| `writeFile`     | Build        | Create or overwrite files       |
| `editFile`      | Build        | Find-and-replace in files       |
| `bash`          | Build        | Run shell commands              |

### Supported Models

| Provider      | Models                                                                               |
| ------------- | ------------------------------------------------------------------------------------ |
| **Anthropic** | `claude-opus-4-6` &nbsp;·&nbsp; `claude-sonnet-4-6` &nbsp;·&nbsp; `claude-haiku-4-5` |
| **OpenAI**    | `gpt-5.4` &nbsp;·&nbsp; `gpt-5.4-mini` &nbsp;·&nbsp; `gpt-5.4-nano`                  |

Switch models anytime with `/models`.

### File Mentions

Type `@` in the input bar to mention files and directories inline. NullStack autocompletes paths from your project with fuzzy recursive search — giving the agent targeted context without manual copy-paste.

### Session Management

Conversations are persisted server-side. Resume any previous session from `/sessions`, with full message history and tool call state restored.

### 24 Built-in Themes

Personalize your terminal with `/theme`. Live preview as you browse.

<details>
<summary>All themes</summary>

Nightfox · Catppuccin Mocha · Dracula · Monokai Pro · Tokyo Night · Nord · Synthwave · Midnight Sky · Neon Nights · Hacker Terminal · One Dark · Xcode Midnight · Catppuccin Frappe · Vercel Dark · Material Ocean · Dusk · Ocean · Soft Midnight · Minimal Dark · Solarized Dark · Gruvbox Dark · Rosé Pine · Rosé Pine Moon · Kanagawa

</details>

---

## Commands

Type `/` in the input bar to open the command palette.

| Command     | Description                         |
| ----------- | ----------------------------------- |
| `/new`      | Start a new conversation            |
| `/agents`   | Switch between Build and Plan modes |
| `/models`   | Select AI model                     |
| `/sessions` | Browse and resume past sessions     |
| `/theme`    | Change color theme                  |
| `/login`    | Sign in via browser (OAuth)         |
| `/logout`   | Sign out                            |
| `/upgrade`  | Purchase additional credits         |
| `/usage`    | Open billing portal                 |
| `/exit`     | Quit NullStack                      |

## Keyboard Shortcuts

| Key                      | Action                       |
| ------------------------ | ---------------------------- |
| <kbd>Enter</kbd>         | Send message                 |
| <kbd>Shift + Enter</kbd> | New line                     |
| <kbd>Tab</kbd>           | Toggle Build / Plan mode     |
| <kbd>Escape</kbd>        | Interrupt streaming response |
| <kbd>@</kbd>             | File mention autocomplete    |
| <kbd>/</kbd>             | Open command palette         |

---

## Architecture

NullStack is a monorepo with four packages:

```
packages/
├── cli/        → Terminal client (OpenTUI + React 19 + React Router)
├── server/     → Backend API (Hono on Bun, deployed on Railway)
├── database/   → Data layer (Prisma + PostgreSQL)
└── shared/     → Shared contracts (Zod schemas, tool definitions, model configs)
```

**How it works:** The CLI streams chat messages to a hosted backend that orchestrates AI model calls. The backend returns a tool-call stream — the CLI executes each tool locally on your machine, sends results back, and the loop continues until the agent is done.

---

## Tech Stack

| Layer           | Technologies                    |
| --------------- | ------------------------------- |
| **Runtime**     | Bun                             |
| **Terminal UI** | OpenTUI, React 19, React Router |
| **AI**          | AI SDK, Anthropic, OpenAI       |
| **Backend**     | Hono                            |
| **Database**    | Prisma, PostgreSQL              |
| **Auth**        | Clerk OAuth                     |
| **Billing**     | Polar                           |
| **Validation**  | Zod                             |
| **Deployment**  | Railway                         |

---

## Local Development

```bash
# Install dependencies
bun install

# Run CLI in dev mode
bun run dev:cli

# Run server in dev mode
bun run dev:server

# Build CLI for distribution
bun run build:cli
```

---

## Contributing

Contributions are welcome. Please open an issue first to discuss what you'd like to change.

## License

MIT © [Aadesh098](https://github.com/Aadesh098)
