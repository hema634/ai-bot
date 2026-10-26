# Reviewly AI — AI Review Bot starter

A responsive Next.js dashboard prototype for intern project submissions and reviewer feedback. Built from the supplied AI Review Bot blueprint.

## Included

- Overview dashboard with submission, pending-review, completion, and average-score metrics
- Submissions and review queue with search, status filters, detail drawer, and reviewer notes area
- Add-submission modal and intern portal form
- CSV/TSV import and CSV export (native `.xlsx` parsing is not included yet)
- Sample AI-review feedback panel and editable reviewer notes placeholder
- Suggested review schedule and email activity log
- Reports by track and workspace setup checklist
- Responsive layout, human-review reminders, and demo data

## Run locally

Requirements: Node.js 18.17+ (Node 20 LTS recommended) and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Important implementation limits

This is a **UI-first prototype**, not a production-ready multi-user system.

- Data is held in React state and resets on refresh. No database or API routes are connected.
- Authentication and authorization are not implemented. Do not deploy this with real intern data until role-based authentication and server-side authorization are added.
- AI feedback and scores are illustrative demo content; no LLM is called. Implement server-side evaluation with structured output validation, prompt-injection handling, rate limits, and human approval.
- CSV/TSV import works in-browser. `.xlsx` workbooks need an XLSX parser and file validation.
- File upload is a placeholder. Add private object storage, size/type checks, malware scanning, and signed access URLs.
- Calendar and email panels are mock activity only. No events or emails are sent.
- Do not store secrets in client-side code or `NEXT_PUBLIC_*` environment variables.

## Suggested production architecture

- Next.js App Router UI and server route handlers
- Authentication provider with roles: admin, reviewer, intern
- PostgreSQL database with ownership checks and audit log
- Private object storage for deliverables
- Server-only LLM provider integration with a versioned review rubric
- Transactional email provider and optional calendar OAuth integration
- Automated tests for authorization boundaries, upload validation, CSV parsing, and review state transitions

## Suggested CSV headers

`name,email,track,title,description`

Accepted aliases include `intern`, `student name`, `department`, `project`, `project title`, `submission title`, `summary`, and `notes`.

## Repository authentication audit

No target repository URL was supplied for the separate authentication audit. This project does not claim to analyze or reuse authentication from another repository. Supply the exact GitHub URL to enable a code-and-documentation-based audit of credential handling, token/session lifecycle, request flow, and authorization controls.
