---
name: gsd-validate-phase
description: "Valida que uma fase está completa e pronta"
tags:
  - gsd
  - validation
  - phase
  - quality
related_skills:
  - gsd-execute-phase
  - gsd-verify-work
  - gsd-plan-phase
content: |
  # gsd-validate-phase

  **Tipo:** Validation / Quality

  **Descrição:** Valida que todos os planos de uma fase foram executados corretamente.

  ## Argumentos

  `<número da fase>` — Número da fase a validar

  ## Processo

  ### 1. Load Phase

  - Ler `.planning/phases/phase-N.md`
  - Listar todos os planos

  ### 2. Validate Each Plan

  Para cada plano:
  - [ ] **Executed** — Foi executado?
  - [ ] **Verified** — Verification criteria passaram?
  - [ ] **Documented** — Foi documentado?
  - [ ] **Committed** — Mudanças commitadas?

  ### 3. Gate Checks

  - [ ] Requirements还记得达的 da fase foram addressed
  - [ ] Nenhum blocker pendente
  - [ ] Tests passando
  - [ ] Code review feito (se aplicável)

  ### 4. Output

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  PHASE <N> VALIDATION
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  **Status:** VALID ✅ / INVALID ❌ / PARTIAL ⚠️
  
  ## Plans
  - Plan 1: ✅ VALID
  - Plan 2: ✅ VALID
  - Plan 3: ⚠️ PARTIAL (reason)
  
  ## Gates
  - [✅] Requirements addressed
  - [✅] Tests passing
  - [❌] Documentation complete
  - [✅] No blockers
  
  ## Issues
  - <issue se houver>
  
  ## Recommendation
  - READY TO PROCEED / FIX ISSUES FIRST
  ```
