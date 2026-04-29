# Checkly

Checkly is a diploma web application for API availability and performance monitoring. Users can create projects, add API endpoints, run scheduled checks, inspect response metrics, and receive notifications when an API is down or degraded.

## Architecture

- `backend` - Node.js Fastify API, authentication, CRUD, scheduler/collector entry point.
- `frontend` - React + Vite dashboard.
- `database` - PostgreSQL initialization scripts. TimescaleDB can be enabled through the Docker image.
- `notifications_service` - Python service for email and Telegram notifications.
- `reports_service` - Python service for CSV/JSON/PDF reports.

## Quick Start

1. Copy `.env.example` to `.env` and adjust secrets if needed.
2. Start the stack:

```bash
docker compose up --build
```

Default local URLs:

- Frontend: http://localhost:5173
- Backend API: http://localhost:4000
- Notifications service: http://localhost:5001
- Reports service: http://localhost:5002

## Development Phases

- Phase 0: Docker Compose, database schema, initial service projects.
- Phase 1: Core MVP with auth, checks CRUD, collector, dashboard, email alert.
- Phase 2: Advanced dashboard, uptime/SLA aggregation, WebSocket updates, richer metrics.
- Phase 3: Telegram notifications, reports service, CSV/JSON/PDF export.
