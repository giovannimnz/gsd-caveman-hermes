---
name: gsd-hermes-do
description: "Dispatcher inteligente - roteia texto livre para o comando GSD apropriado"
tags:
  - gsd
  - dispatcher
  - routing
related_skills:
  - gsd-hermes-new-project
  - gsd-hermes-plan-phase
  - gsd-hermes-debug
  - gsd-hermes-spike
  - gsd-hermes-sketch
content: |
  # gsd-hermes-do

  **Tipo:** Dispatcher / Router

  **Descrição:** Analisa texto livre e roteia para o comando GSD mais apropriado. Nunca executa o trabalho direto — apenas faz o roteamento inteligente.

  ## Quando Usar

  Use quando você souber o que quer mas não sabe qual comando GSD usar. Ex:
  - "quero criar um projeto novo"
  - "preciso debugar esse erro"
  - "preciso testar se essa library funciona"
  - "fazer um mockup do login"

  ## Routing Table

  | Se o texto descreve... | Route para | Por quê |
  |------------------------|------------|---------|
  | Novo projeto, "iniciar", "criar projeto" | `/gsd-hermes-new-project` | Inicialização completa |
  | Mapear ou analisar codebase | `/gsd-hermes-map-codebase` | Descoberta de código |
  | Bug, erro, crash, falha | `/gsd-hermes-debug` | Investigação sistemática |
  | Spiking, "testar se", "validar viabilidade" | `/gsd-hermes-spike` | Experimento descartável |
  | Mockup, prototype, design, UI | `/gsd-hermes-sketch` | Explorar visual |
  | Pesquisar, explorar, comparar | `/gsd-hermes-research-phase` | Pesquisa de domínio |
  | Discutir visão, brainstorming | `/gsd-hermes-discuss-phase` | Contexto para planejamento |
  | Tarefa complexa (refatorar, migrar, redesenhar) | `/gsd-hermes-add-phase` | Fase completa com plano |
  | Planear fase específica | `/gsd-hermes-plan-phase` | Planejamento direto |
  | Executar fase | `/gsd-hermes-execute-phase` | Execução direta |
  | Review, qualidade | `/gsd-hermes-verify-work` | Verificação |
  | Progresso, status | `/gsd-hermes-progress` | Status check |
  | Nota, ideia, LEMBRETE | `/gsd-hermes-add-todo` | Captura para depois |
  | Adicionar testes | `/gsd-hermes-add-tests` | Geração de testes |
  | Tarefa pequena e específica | `/gsd-hermes-quick` | Execução rápida |
  | Ajudar com GSD | `/gsd-hermes-help` | Ajuda |

  ## Argumentos

  `<descrição do que quer fazer>` — Descrição livre do que o usuário deseja.

  ## Processo

  1. **Analisar input** — Interpretar a intent do usuário
  2. **Verificar contexto** — Checar se existe `.planning/` no projeto
  3. **Rotear** — Aplicar a routing table acima
  4. **Confirmar** — Mostrar o routing decision
  5. **Dispatch** — Chamar o comando apropriado

  ## Exemplo de Output

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   GSD ► ROUTING
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  **Input:** "quero criar um sistema de login"
  **Routing para:** /gsd-hermes-new-project
  **Reason:** Inicialização de novo projeto detectada
  ```
