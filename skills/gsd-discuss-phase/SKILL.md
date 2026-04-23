---
name: gsd-discuss-phase
description: "Coleta contexto para planejamento via discussão"
tags:
  - gsd
  - discussion
  - context
  - planning
related_skills:
  - gsd-plan-phase
  - gsd-research-phase
  - gsd-new-project
content: |
  # gsd-discuss-phase

  **Tipo:** Context Gathering / Discussion

  **Descrição:** Facilita discussão para entender visão e contexto antes de planejar.

  ## Quando Usar

  - "Como deveria funcionar X?"
  - "O que acha dessa abordagem?"
  - Brainstorming sobre feature
  - Coletar contexto antes de planejamento

  ## Argumentos

  `<tópico>` — O que discutir

  ## Processo

  ### 1. Frame Discussion

  Identificar:
  - O que precisa ser decidido
  - Qual o objetivo
  - Contexto atual

  ### 2. Discuss Questions

  Fazer perguntas estruturadas:
  - **About:** O que exatamente?
  - **Users:** Quem vai usar?
  - **Behavior:** Como deve funcionar?
  - **Edge Cases:** O que pode dar errado?
  - **Integration:** Como se integra com resto?

  ### 3. Capture Decisions

  Documentar em `.planning/DISCUSSIONS.md`:
  ```
  ## Discussion: <tópico>
  **Date:** <data>
  **Participants:** <quem>
  
  ### Decisions Made
  1. <decisão> — <razão>
  2. <decisão> — <razão>
  
  ### Open Questions
  - <pergunta> — <status>
  
  ### Next Steps
  - <ação>
  ```

  ### 4. Summary

  Mostrar resumo dos decisions ao usuário

  ## Nota

  Discussões informadas alimentam o planejamento em `/gsd-plan-phase`.
