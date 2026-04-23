---
name: gsd-research-phase
description: "Pesquisa de domínio antes de planejar"
tags:
  - gsd
  - research
  - domain
  - investigation
related_skills:
  - gsd-new-project
  - gsd-plan-phase
  - gsd-spike
content: |
  # gsd-research-phase

  **Tipo:** Pesquisa / Investigação

  **Descrição:** Pesquisa domínio do problema antes de planejar. Útil para entender landscape técnico.

  ## Quando Usar

  - "Como funciona X?"
  - "Quais as opções para resolver Y?"
  - Comparar tecnologias/frameworks
  - Antes de planejar fase complexa
  - Domain research

  ## Argumentos

  `<área ou questão de pesquisa>` — Ex: "autenticação com JWT vs OAuth"

  ## Processo

  ### 1. Definir Research Questions

  Listar perguntas a responder:
  1. <pergunta 1>
  2. <pergunta 2>
  3. <pergunta 3>

  ### 2. Executar Pesquisa

  Para cada pergunta:
  - Buscar informações (web search, docs, code)
  - Avaliar fontes
  - Compilar findings

  ### 3. Synthesize

  Gerar documento em `.planning/research/NAME.md`:
  ```
  # Research: <tópico>
  
  ## Research Questions
  1. <pergunta>
  
  ## Findings
  
  ### Opção A
  **Pros:** ...
  **Cons:** ...
  **Use when:** ...
  
  ### Opção B
  **Pros:** ...
  **Cons:** ...
  **Use when:** ...
  
  ## Recommendation
  <baseado nos findings>
  ```

  ### 4. Update ROADMAP

  Se pesquisa foi para informar planning:
  - Atualizar ROADMAP.md com insights
  - Adicionar notas sobre technology choices

  ## Output

  ```
  .planning/research/<name>.md
  ```
