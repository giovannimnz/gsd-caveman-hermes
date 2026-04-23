---
name: gsd-hermes-plan-phase
description: "Planeja uma fase específica do projeto"
tags:
  - gsd
  - planning
  - phase
related_skills:
  - gsd-hermes-execute-phase
  - gsd-hermes-validate-phase
  - gsd-hermes-add-phase
content: |
  # gsd-hermes-plan-phase

  **Tipo:** Planejamento

  **Descrição:** Cria plano de execução detalhado para uma fase específica.

  ## Argumentos

  `<número da fase>` — Número da fase a planejar (ex: 1, 2, 3)

  ## Processo

  ### 1. Carregar contexto

  - Ler `.planning/PROJECT.md`
  - Ler `.planning/ROADMAP.md`
  - Ler `.planning/REQUIREMENTS.md`
  - Ler `.planning/STATE.md`

  ### 2. Analisar fase

  - Extrair objetivos da fase do ROADMAP
  - Identificar dependencies
  - Listar deliverables

  ### 3. Criar Planos

  Para cada plano na fase:
  - **Descrição** — O que fazer
  - **Steps** — Passos detalhados
  - **Verify** — Como verificar que funcionou
  - **Rollback** — Como desfazer se necessário

  ### 4. Output

  Criar `.planning/phases/phase-N.md` com:
  - Overview da fase
  - Lista de Planos
  - Dependencies
  - Success criteria

  ## Estado

  Atualizar `.planning/STATE.md` com:
  - `current_phase: N`
  - `phase_N_status: planned`
