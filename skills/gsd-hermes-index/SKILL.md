---
name: gsd-hermes-index
description: "Lista todas as skills disponíveis no GSD Hermes"
tags:
  - gsd
  - index
  - skills
content: |
  # GSD Hermes - Índice de Skills

  ## Skills Disponíveis

  ### Core / Dispatching
  - `gsd-hermes/do` - Dispatcher inteligente
  - `gsd-hermes/help` - Ajuda

  ### Inicialização
  - `gsd-hermes/new-project` - Novo projeto
  - `gsd-hermes/map-codebase` - Mapear codebase

  ### Planning
  - `gsd-hermes/plan-phase` - Planejar fase
  - `gsd-hermes/add-phase` - Adicionar fase
  - `gsd-hermes/discuss-phase` - Discutir contexto
  - `gsd-hermes/research-phase` - Pesquisa de domínio
  - `gsd-hermes/list-phase` - Listar fases

  ### Execution
  - `gsd-hermes/execute-phase` - Executar fase
  - `gsd-hermes/quick` - Tarefa rápida

  ### Exploration
  - `gsd-hermes/spike` - Experimento descartável
  - `gsd-hermes/sketch` - Mockup UI

  ### Quality
  - `gsd-hermes/verify-work` - Verificar trabalho
  - `gsd-hermes/validate-phase` - Validar fase
  - `gsd-hermes/code-review` - Code review

  ### Debug
  - `gsd-hermes/debug` - Debug sistemático

  ### Management
  - `gsd-hermes/progress` - Status do projeto
  - `gsd-hermes/add-todo` - Adicionar tarefa

  ## Agents

  - `gsd-hermes/researcher` - Agente de pesquisa
  - `gsd-hermes/planner` - Agente de planejamento
  - `gsd-hermes/executor` - Agente de execução
  - `gsd-hermes/debugger` - Agente de debug
  - `gsd-hermes/auditor` - Agente de auditoria

  ## Uso

  Para carregar uma skill:
  ```
  skill_view(name="gsd-hermes-do")
  ```

  Para carregar todas:
  ```
  skill_view(name="gsd-hermes-index")
  ```
