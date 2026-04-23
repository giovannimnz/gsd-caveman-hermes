---
name: gsd-hermes-quick
description: "Executa tarefa pequena e específica de forma rápida"
tags:
  - gsd
  - quick
  - task
  - small
related_skills:
  - gsd-hermes-do
  - gsd-hermes-verify-work
  - gsd-hermes-add-todo
content: |
  # gsd-hermes-quick

  **Tipo:** Execução Rápida

  **Descrição:** Executa tarefa pequena, específica e self-contained. Sem planejamento complexo.

  ## Quando Usar

  - "Adiciona feature X"
  - "Corrige typo em Y"
  - "Atualiza config Z"
  - Tarefa pequena e clara
  - Quick fix

  ## Quando NÃO Usar

  - Tarefas complexas (use add-phase)
  - Múltiplos arquivos/arquitetura (use add-phase)
  - Bugs complexos (use debug)
  - Novas features grandes (use add-phase)

  ## Argumentos

  `<tarefa>` — O que fazer

  ## Processo

  ### 1. Validate Scope

  Confirmar que é realmente quick:
  - [ ] Menos de ~50 linhas de mudança?
  - [ ] Self-contained (não afeta outros sistemas)?
  - [ ] Claramente definido o que fazer?

  Se não for quick:
  ```
  Isso parece ser uma tarefa complexa. Recomendo /gsd-hermes-add-phase.
  Quer que eu crie uma phase para isso?
  ```

  ### 2. Execute

  - Fazer a mudança
  - Manter código limpo
  - Commitar se aplicável

  ### 3. Verify

  - Mudança funcionou?
  - Nenhum side effect?
  - Tests ainda passam?

  ### 4. Done

  ```
  ✅ Quick done: <resumo do que foi feito>
  ```
