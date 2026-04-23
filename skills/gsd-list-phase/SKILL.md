---
name: gsd-list-phase
description: "Lista todas as fases do projeto"
tags:
  - gsd
  - phase
  - list
  - management
related_skills:
  - gsd-progress
  - gsd-plan-phase
  - gsd-validate-phase
content: |
  # gsd-list-phase

  **Tipo:** List / Management

  **Descrição:** Lista todas as fases do projeto com status.

  ## Argumentos

  Nenhum

  ## Output

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PROJECT PHASES
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  ## Phase 1: <título>
  **Status:** PLANNED | IN_PROGRESS | COMPLETED | VALIDATED
  **Plans:** <count>
  **Completed:** <count>
  
  ## Phase 2: <título>
  **Status:** PLANNED
  **Plans:** <count>
  
  ## Phase 3: <título>
  **Status:** BACKLOG
  **Plans:** 0 (not planned yet)
  
  ## Summary
  - Total Phases: <N>
  - Completed: <X>
  - In Progress: <Y>
  - Planned: <Z>
  - Backlog: <W>
  ```
