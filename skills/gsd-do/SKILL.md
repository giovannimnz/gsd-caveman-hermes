---
name: gsd-do
description: "Dispatcher inteligente - roteia texto livre para o comando GSD apropriado"
tags:
  - gsd
  - dispatcher
  - routing
related_skills:
  - gsd-new-project
  - gsd-plan-phase
  - gsd-debug
  - gsd-spike
  - gsd-sketch
content: |
  # gsd-do

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
  | Novo projeto, "iniciar", "criar projeto" | `/gsd-new-project` | Inicialização completa |
  | Mapear ou analisar codebase | `/gsd-map-codebase` | Descoberta de código |
  | Bug, erro, crash, falha | `/gsd-debug` | Investigação sistemática |
  | Spiking, "testar se", "validar viabilidade" | `/gsd-spike` | Experimento descartável |
  | Mockup, prototype, design, UI | `/gsd-sketch` | Explorar visual |
  | Pesquisar, explorar, comparar | `/gsd-research-phase` | Pesquisa de domínio |
  | Discutir visão, brainstorming | `/gsd-discuss-phase` | Contexto para planejamento |
  | Tarefa complexa (refatorar, migrar, redesenhar) | `/gsd-add-phase` | Fase completa com plano |
  | Planear fase específica | `/gsd-plan-phase` | Planejamento direto |
  | Executar fase | `/gsd-execute-phase` | Execução direta |
  | Review, qualidade | `/gsd-verify-work` | Verificação |
  | Progresso, status | `/gsd-progress` | Status check |
  | Nota, ideia, LEMBRETE | `/gsd-add-todo` | Captura para depois |
  | Adicionar testes | `/gsd-add-tests` | Geração de testes |
  | Tarefa pequena e específica | `/gsd-quick` | Execução rápida |
  | Ajudar com GSD | `/gsd-help` | Ajuda |

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
  **Routing para:** /gsd-new-project
  **Reason:** Inicialização de novo projeto detectada
  ```
