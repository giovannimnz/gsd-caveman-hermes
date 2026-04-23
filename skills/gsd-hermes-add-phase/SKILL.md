---
name: gsd-hermes-add-phase
description: "Adiciona nova fase ao roadmap existente"
tags:
  - gsd
  - planning
  - phase
  - roadmap
related_skills:
  - gsd-hermes-plan-phase
  - gsd-hermes-new-project
  - gsd-hermes-roadmap
content: |
  # gsd-hermes-add-phase

  **Tipo:** Planejamento

  **Descrição:** Adiciona nova fase ao roadmap existente do projeto.

  ## Quando Usar

  - Projeto em andamento precisa de nova fase
  - Escopo cresceu durante execução
  - Nova feature precisa de fase dedicada

  ## Argumentos

  `<descrição da fase>` — Descrição do que a nova fase deve conter

  ## Processo

  ### 1. Carregar contexto

  - Ler `.planning/ROADMAP.md` atual
  - Ler `.planning/REQUIREMENTS.md`
  - Identificar próxima phase number

  ### 2. Analisar nova fase

  - Entender o que precisa ser adicionado
  - Identificar dependencies com fases existentes
  - Estimar effort

  ### 3. Criar fase no Roadmap

  Adicionar em `.planning/ROADMAP.md`:
  ```
  ## Phase N: <título>
  <descrição>
  
  **Plans:**
  - Plan 1: <título>
  - Plan 2: <título>
  
  **Dependencies:** Phase X, Phase Y
  **Effort:** <estimativa>
  ```

  ### 4. Update STATE

  - Adicionar `phase_N: planned`
  - Atualizar `last_modified`

  ## Nota

  Após adicionar, usar `/gsd-hermes-plan-phase N` para detalhar os planos.
