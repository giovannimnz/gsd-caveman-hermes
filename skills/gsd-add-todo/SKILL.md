---
name: gsd-add-todo
description: "Adiciona tarefa, nota ou lembrete ao projeto"
tags:
  - gsd
  - todo
  - notes
  - backlog
related_skills:
  - gsd-progress
  - gsd-inbox
  - gsd-backlog
content: |
  # gsd-add-todo

  **Tipo:** Captura / Backlog

  **Descrição:** Captura tarefa, ideia ou lembrete para processar depois.

  ## Quando Usar

  - "Lembrar de fazer X"
  - "Preciso adicionar feature Y"
  - Ideia para später
  - Nota importante
  - "Remember to..."

  ## Argumentos

  `<tarefa ou nota>` — A tarefa/nota a capturar

  ## Processo

  ### 1. Parse Input

  Identificar:
  - **Type:** TASK | IDEA | NOTE | BUG | IMPROVEMENT
  - **Priority:** HIGH | MEDIUM | LOW
  - **Context:** Onde se aplica

  ### 2. Append to BACKLOG

  Adicionar em `.planning/BACKLOG.md`:
  ```
  ## [TASK] <título>
  - **Added:** <data>
  - **Priority:** <HIGH|MEDIUM|LOW>
  - **Context:** <onde aplica>
  - **Notes:** <detalhes>
  ```

  ### 3. Confirm

  Mostrar ao usuário:
  ```
  ✅ Added to BACKLOG:
  - [TASK] <título> (Priority: <HIGH|MEDIUM|LOW>)
  ```

  ## Output

  ```
  .planning/BACKLOG.md
  ```

  ## Notas

  - BACKLOG.md é processado pelo `/gsd-backlog` para priorização
  - Tarefas devem ser small e actionable
  - Se grande demais, sugere拆分 para multiple tasks
