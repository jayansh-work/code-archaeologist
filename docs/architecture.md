# Architecture

This document describes the intended architecture of Code Archaeologist. The pipeline below is a design target for later milestones. Milestone 1 only provides a Next.js frontend and a FastAPI backend with a health check.

## Intended pipeline

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

## Layers

### User

A developer, reviewer, or maintainer pastes a GitHub repository URL and explores how that codebase evolved. The product should answer what changed, when it changed, how a file or component evolved, and why an important change was introduced.

### Next.js frontend

The frontend is the interactive surface of the product. Later milestones may add a repository analysis view, a historical timeline, and graph-based visualizations of code relationships. For now it is a landing page that collects a repository URL.

### FastAPI backend

The backend owns orchestration. It will receive analysis requests from the frontend, fetch repository data, run forensic modules, collect evidence, and return structured results. New analysis capabilities should be added as modules under the backend without replacing this application layout.

### Repository / GitHub data

Source material for analysis includes source files, Git commits, diffs, issues, and pull requests. This layer is the historical record. Later work may use GitHub APIs and local Git history to retrieve that record.

### Forensic analysis

Analysis modules will inspect how the codebase changed over time: file and component evolution, related commits, and connections between code and surrounding discussion. This is software forensics, not a live coding assistant.

### Evidence collection

AI-generated conclusions should eventually be grounded in repository evidence. That evidence includes commits, diffs, issues, and pull requests. The platform should keep the supporting artifacts with each explanation so a user can verify the story, not only read a summary.

### AI reasoning

A later milestone may use a language model to synthesize the collected evidence into an explanation of how and why the code evolved. Reasoning should cite evidence rather than invent history.

### Interactive historical visualization

The frontend will present the reconstructed history as an interactive view: timelines, evolution of files and components, and links back to the underlying evidence.

## Current status

Milestone 1 establishes the frontend and backend foundations only. None of the data, analysis, evidence, AI, or visualization layers are implemented yet.
