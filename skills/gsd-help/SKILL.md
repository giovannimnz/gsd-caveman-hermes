---
name: gsd-help
description: "Mostra ajuda sobre comandos GSD Hermes"
tags:
  - gsd
  - help
  - documentation
related_skills:
  - gsd-do
  - gsd-progress
content: |
  # gsd-help

  **Tipo:** Help / Documentation

  **Descrição:** Mostra ajuda sobre como usar GSD Hermes e lista comandos disponíveis.

  ## Argumentos

  `[<comando>]` — Opcional. Se fornecido, mostra ajuda específica.

  ## Output (sem argumentos)

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GSD HERMES - HELP
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  **Sistema de desenvolvimento dirigido por especificações**
  
  ## Comandos Disponíveis
  
  ### Inicialização
  - /gsd-new-project — Iniciar projeto do zero
  - /gsd-map-codebase — Mapear codebase existente
  
  ### Dispatching
  - /gsd-do — Route texto livre para comando certo
  
  ### Planning
  - /gsd-plan-phase — Planejar fase
  - /gsd-add-phase — Adicionar nova fase
  - /gsd-research-phase — Pesquisa de domínio
  
  ### Execution
  - /gsd-execute-phase — Executar fase
  - /gsd-quick — Tarefa rápida
  - /gsd-spike — Experimento descartável
  - /gsd-sketch — Mockup UI
  
  ### Quality
  - /gsd-verify-work — Verificar trabalho
  - /gsd-validate-phase — Validar fase
  - /gsd-code-review — Review de código
  
  ### Debug
  - /gsd-debug — Debug sistemático
  
  ### Management
  - /gsd-progress — Status do projeto
  - /gsd-add-todo — Adicionar tarefa
  - /gsd-milestone-summary — Resumo de milestone
  
  ## Quick Start
  
  1. cd para seu projeto
  2. /gsd-new-project
  3. /gsd-plan-phase 1
  4. /gsd-execute-phase 1
  ```
