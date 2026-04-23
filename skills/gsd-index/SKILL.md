---
name: gsd-index
description: "Lista todas as skills disponíveis no GSD Hermes"
tags:
  - gsd
  - index
  - skills
content: |
  # GSD Hermes - Índice de Skills

  ## Skills Disponíveis

  ### Core / Dispatching
  - `gsd/do` - Dispatcher inteligente
  - `gsd/help` - Ajuda

  ### Inicialização
  - `gsd/new-project` - Novo projeto
  - `gsd/map-codebase` - Mapear codebase

  ### Planning
  - `gsd/plan-phase` - Planejar fase
  - `gsd/add-phase` - Adicionar fase
  - `gsd/discuss-phase` - Discutir contexto
  - `gsd/research-phase` - Pesquisa de domínio
  - `gsd/list-phase` - Listar fases

  ### Execution
  - `gsd/execute-phase` - Executar fase
  - `gsd/quick` - Tarefa rápida

  ### Exploration
  - `gsd/spike` - Experimento descartável
  - `gsd/sketch` - Mockup UI

  ### Quality
  - `gsd/verify-work` - Verificar trabalho
  - `gsd/validate-phase` - Validar fase
  - `gsd/code-review` - Code review

  ### Debug
  - `gsd/debug` - Debug sistemático

  ### Management
  - `gsd/progress` - Status do projeto
  - `gsd/add-todo` - Adicionar tarefa

  ## Agents

  - `gsd/researcher` - Agente de pesquisa
  - `gsd/planner` - Agente de planejamento
  - `gsd/executor` - Agente de execução
  - `gsd/debugger` - Agente de debug
  - `gsd/auditor` - Agente de auditoria

  ## Uso

  Para carregar uma skill:
  ```
  skill_view(name="gsd/do")
  ```

  Para carregar todas:
  ```
  skill_view(name="gsd-index")
  ```
