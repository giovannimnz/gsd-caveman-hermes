---
name: gsd-sketch
description: "Mockups HTML descartáveis para explorar design/UI"
tags:
  - gsd
  - sketch
  - ui
  - design
  - mockup
related_skills:
  - gsd-spike
  - gsd-ui-review
  - gsd-do
content: |
  # gsd-sketch

  **Tipo:** Design / Exploração Visual

  **Descrição:** Cria mockups HTML descartáveis para explorar direção visual. Experimento visual temporário.

  ## Quando Usar

  - "Como seria o login?"
  - "Quero ver como fica esse componente"
  - Explorar direção de design
  - Prototype de UI
  - "What would this look like?"

  ## Argumentos

  `<descrição do que mockar>` — Ex: "tela de login com theme dark"

  ## Processo

  ### 1. Entender Requisitos

  - O que precisa ser mockado?
  - Qual o contexto de uso?
  - Tech stack ou preferences?

  ### 2. Criar Sketch

  - Criar arquivo HTML em pasta temp ou `.sketches/`
  - Incluir CSS inline (sem dependências externas se possível)
  - Implementar o mockup

  ### 3. Mostrar ao Usuário

  - Explicar o que foi criado
  - Destacar decisões de design
  - Pedir feedback

  ### 4. Iterate (se necessário)

  - Incorporar feedback
  - Atualizar mockup
  - Mostrar novamente

  ### 5. Wrap Up

  Se aprovado:
  - Mover para local apropriado no projeto
  - Documentar design decisions

  Se rejeitado:
  - Descartar sketch
  - Documentar o que não funcionou

  ## Output

  ```
  .sketches/
  └── sketch-YYYY-MM-DD/
      ├── index.html
      └── NOTES.md
  ```

  ## Importante

  - Sketches são DESCARTÁVEIS se não aprovados
  - Não commitar sketches não aprovados
  - Manter apenas approved designs no projeto
