# Code Archaeologist

Code Archaeologist is an AI-powered software forensics platform that reconstructs how and why a software codebase evolved. Traditional coding assistants explain what code does. This project focuses on the story behind the code: what changed, when it changed, how a file or component evolved, why an important change was introduced, and what historical evidence supports that explanation.

This is an active hackathon project. Advanced functionality will be implemented in later milestones.

## What is Code Archaeologist?

A web application that will eventually analyze source code, Git commits, diffs, issues, pull requests, and code relationships, then present an interactive, evidence-backed history of a repository.

The current application is a foundation only: a Next.js landing page and a FastAPI health endpoint. Repository analysis, GitHub integration, AI reasoning, and historical visualization are not implemented yet.

## Core idea

Software has a history. Code Archaeologist aims to make that history searchable and explainable, with conclusions grounded in repository evidence rather than unsupported summaries.

## Planned architecture

```
User
  ↓
Next.js frontend
  ↓
FastAPI backend
  ↓
Repository / GitHub data
  ↓
Forensic analysis
  ↓
Evidence collection
  ↓
AI reasoning
  ↓
Interactive historical visualization
```

See [docs/architecture.md](docs/architecture.md) for a fuller description of this pipeline.

## Current milestone

**Milestone 1: Project foundation**

Delivered in this milestone:

- Next.js + TypeScript + Tailwind CSS frontend with a landing page
- FastAPI backend with `GET /health`
- Project documentation and repository layout

Not included yet:

- GitHub repository analysis
- Gemini or other AI integration
- Timeline or dashboard views
- Authentication
- Databases or Docker

## Frontend setup

Requires Node.js 18 or later.

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

The landing page includes a GitHub repository URL field and an **Analyze Repository** button. In Milestone 1 the button is UI only and does not start an analysis.

## Backend setup

Requires Python 3.11 or later.

```bash
cd backend
python -m venv .venv
```

Windows (PowerShell):

```powershell
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

macOS / Linux:

```bash
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Health check: [http://localhost:8000/health](http://localhost:8000/health)

## Project structure

```
code-archaeologist/
├── frontend/          # Next.js + TypeScript + Tailwind CSS
├── backend/           # FastAPI application
├── docs/              # Architecture and project notes
├── README.md
└── .gitignore
```
