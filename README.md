# IronRidge Execution Tracker

## Overview

IronRidge Execution Tracker shows how IronRidge Contractors could make follow-through more visible by keeping commitments, owners, blockers, due dates, and weekly review rhythm in one lightweight operating layer.

## Business Problem

Leadership and operations meetings create action items, but cross-department follow-through becomes inconsistent when commitments are not visible in one place. Teams need a practical way to see overdue work, blocked items, and near-term commitments before execution drift turns into project or operational drag.

## Solution Concept

This repo models a disciplined but lightweight execution layer using shared action data, weekly commitments, concise cadence documentation, and a static review mock. The goal is to make accountability tangible without making the process bureaucratic.

## Ecosystem Context

This repo represents the follow-through layer in the broader IronRidge demo ecosystem. Requests originating in `workflow-drag-reduction-demo` can become tracked commitments here, field conditions from `contractor-ops-system-demo` can surface as blockers or escalations, and execution drift can roll up into the executive signals shown in `ops-visibility-demo`.

## Repository Structure

- `docs/` overview, business context, architecture, review cadence, diagrams, and ecosystem framing
- `data/raw/` employees, projects, action items, and weekly commitments
- `data/curated/` overdue, blocker, and completion summaries
- `data/sample_exports/` condensed weekly review export
- `src/execution-mock/` static execution tracker mock for walkthroughs and screenshots
- `assets/` shared visual assets including the IronRidge wordmark
- `notes/` roadmap and screenshot planning

## Data And Sample Assets

The raw layer focuses on ownership, due dates, blocker flags, project linkage, and commitment review notes. Curated outputs condense that detail into the kinds of summaries an operations leader would actually use in a weekly review.

## Mock Experience / Screenshots

The mock tracker emphasizes overdue work, owner accountability, blocker visibility, and weekly commitments. It is designed to feel like a realistic internal review screen for an operations leader rather than a generic project-management template.

## Future Enhancements

- add simple carry-forward logic for incomplete commitments
- introduce manager and department workload views
- expand blocker classification and escalation history
- connect meeting source notes to action creation

## Fictional Demo Notice

This repository is part of a fictional demonstration environment built around IronRidge Contractors, a sample contractor-focused operating company created to showcase reporting, workflow, execution, and operations system design. Names, data, and scenarios are illustrative, but the business patterns reflect real-world operational needs.