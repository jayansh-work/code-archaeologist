# Local development

Code Archaeologist currently consists of a Next.js frontend and a FastAPI backend. Run each service in its own terminal during local development.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

The landing page is available at [http://localhost:3000](http://localhost:3000).

Before committing frontend changes, run:

```bash
npm run lint
```

## Backend

```bash
cd backend
python -m venv .venv
```

In PowerShell, activate the environment and start the API:

```powershell
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Quick checks

With the backend running, these endpoints confirm the service is available:

- [http://localhost:8000/health](http://localhost:8000/health) returns the service health status.
- [http://localhost:8000/info](http://localhost:8000/info) returns the API name, version, and current milestone.

The repository-analysis workflow is planned for a later milestone; the current form validates GitHub repository URLs only.
