---
name: gsd-execute-phase
description: "Executa todos os planos de uma fase"
tags:
  - gsd
  - execution
  - phase
related_skills:
  - gsd-plan-phase
  - gsd-validate-phase
  - gsd-verify-work
content: |
  # gsd-execute-phase

  **Tipo:** Execução

  **Descrição:** Executa todos os planos de uma fase em ordem.

  ## Argumentos

  `<número da fase>` — Número da fase a executar

  ## Processo

  ### 1. Verificar estado

  -确认 `.planning/phases/phase-N.md` existe
  - Confirmar que phase está em status "planned"

  ### 2. Executar Planos

  Para cada plano na fase:
  1. Mostrar progresso
  2. Executar steps
  3. Verificar com criteria
  4. Se falhar → checkpoint e pedir input

  ### 3. Update State

  Atualizar `.planning/STATE.md`:
  - `phase_N_status: completed`
  - `phase_N_completed_plans: [lista]`
  - `current_phase: N+1` (se houver)

  ### 4. Auto-verify

  Rodar `/gsd-validate-phase N` automaticamente

  ## Success Criteria

  - Todos os planos executados
  - Todos os verify passaram
  - STATE.md atualizado
