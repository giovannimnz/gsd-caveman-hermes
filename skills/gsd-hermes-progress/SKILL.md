---
name: gsd-hermes-progress
description: "Mostra status e progresso do projeto"
tags:
  - gsd
  - status
  - progress
  - management
related_skills:
  - gsd-hermes-verify-work
  - gsd-hermes-milestone-summary
  - gsd-hermes-plan-phase
content: |
  # gsd-hermes-progress

  **Tipo:** Status / Management

  **Descrição:** Mostra onde o projeto está, o que foi feito, e o que vem a seguir.

  ## Argumentos

  Nenhum (mostra status completo)

  ## Output

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PROJECT PROGRESS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  ## Project: <nome>
  ## Phase: <N> (current)
  ## Milestone: <nome>
  
  ### ✅ Completed
  - Phase 1: <nome> — DONE
  - Phase 2: <nome> — DONE
  - Phase 3: <nome> — IN PROGRESS (60%)
  
  ### 📋 Current Phase (<N>)
  **Plans:**
  - Plan 1: ✅ DONE
  - Plan 2: ✅ DONE
  - Plan 3: 🔄 IN PROGRESS
  - Plan 4: ⏳ PENDING
  
  ### 📍 Next Up
  - Plan 3 completion
  - Plan 4 execution
  - Phase 3 validation
  
  ### ⚠️ Blockers
  - <blocker se houver>
  
  ### 📊 Stats
  - Total phases: <X>
  - Completed: <Y>
  - In progress: <Z>
  ```
