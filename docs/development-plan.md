# Development Plan

## Phase 0: Foundation

- [x] Docker Compose with five services and shared network.
- [x] PostgreSQL + TimescaleDB initialization schema.
- [x] Initial Node.js, React, and Python service projects.

## Phase 1: Core MVP

- [ ] Backend auth: register, login, JWT middleware.
- [ ] CRUD for projects and API checks.
- [ ] Collector scheduler with HTTP checks and writes to `check_results`.
- [ ] Frontend login, register, dashboard, checks management.
- [ ] Basic email alert on failed checks.

## Phase 2: Full Dashboard

- [ ] Recharts latency and uptime charts.
- [ ] SLA / uptime percentage aggregation.
- [ ] WebSocket or polling live updates.
- [ ] DNS / TTFB / TLS metrics.
- [ ] Bearer / Basic Auth / API key support.
- [ ] Content checks by JSON field or regular expression.

## Phase 3: Notifications and Reports

- [ ] Telegram and email notification rules.
- [ ] N consecutive failures rule support.
- [ ] CSV and JSON export.
- [ ] PDF reports with charts and tables.
- [ ] Reports UI with date range selection.
