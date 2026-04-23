---
name: gsd-hermes-new-project
description: "Inicializa novo projeto com gathering de contexto e PROJECT.md"
tags:
  - gsd
  - project
  - initialization
related_skills:
  - gsd-hermes-do
  - gsd-hermes-plan-phase
  - gsd-hermes-map-codebase
content: |
  # gsd-hermes-new-project

  **Tipo:** Comando de Inicialização

  **Descrição:** Inicializa um novo projeto através de fluxo unificado: questioning → research → requirements → roadmap.

  ## Quando Usar

  - Novo projeto do zero
  - Primeiro comando antes de qualquer desenvolvimento
  - Criar estrutura de planejamento

  ## Output Criado

  ```
  .planning/
  ├── PROJECT.md       # Contexto do projeto
  ├── config.json      # Preferências do workflow
  ├── ROADMAP.md       # Estrutura de fases
  ├── REQUIREMENTS.md  # Requisitos com escopo
  ├── STATE.md         # Memória do projeto
  └── research/       # Pesquisa de domínio (opcional)
  ```

  ## Argumentos

  `[--auto]` — Modo automático. Pulsa questioning e executa research → requirements → roadmap automaticamente.

  ## Processo

  ### 1. Setup

  - Verificar se projeto já existe (erro se já INITIALIZED)
  - Inicializar git se necessário
  - Criar estrutura `.planning/`

  ### 2. Questioning (se não --auto)

  Fazer perguntas profundas sobre:
  - **O que** exactamente quer resolver
  - **Quem** vai usar
  - **Por que** isso importa
  - **Constraints** (tempo, tecnologia, budget)
  - **Success criteria** — como sabe que funcionou?

  ### 3. Research (opcional)

  Se `--auto` ou usuário pedir:
  - Pesquisar domain
  - Pesquisar tecnologias
  - Synthesizar findings

  ### 4. Requirements

  Gerar `REQUIREMENTS.md` com:
  - Feature table
  - Out of scope claro
  - Success criteria

  ### 5. Roadmap

  Gerar `ROADMAP.md` com:
  - Fases numeradas
  - Planos por fase
  - Estimativas

  ### 6. Finalização

  - Criar STATE.md com memória inicial
  - Commitar se git

  ## Próximo Passo

  Depois deste comando, rodar:
  ```
  /gsd-hermes-plan-phase 1
  ```
