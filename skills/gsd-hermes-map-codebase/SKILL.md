---
name: gsd-hermes-map-codebase
description: "Mapeia codebase existente para contexto"
tags:
  - gsd
  - mapping
  - codebase
  - discovery
related_skills:
  - gsd-hermes-new-project
  - gsd-hermes-research-phase
content: |
  # gsd-hermes-map-codebase

  **Tipo:** Discovery / Mapping

  **Descrição:** Mapeia codebase existente para entender arquitetura e estrutura.

  ## Quando Usar

  - Brownfield project (código existente)
  - Entender projeto de outra pessoa
  - "O que tem nesse codebase?"

  ## Argumentos

  Nenhum (usa diretório atual)

  ## Processo

  ### 1. Structure Discovery

  Identificar:
  - Linguagem(s)/Framework(s)
  - Package manager
  - Estrutura de diretórios
  - Entry points

  ### 2. Generate Map

  Criar `.planning/codebase-map.md`:
  ```
  # Codebase Map
  
  ## Overview
  <descrição geral>
  
  ## Tech Stack
  - Language: <lang>
  - Framework: <framework>
  - Package Manager: <pm>
  
  ## Structure
  ```
  <tree>
  ```
  
  ## Key Files
  - <arquivo>: <o que faz>
  - <arquivo>: <o que faz>
  
  ## Entry Points
  - <entry>: <description>
  
  ## Dependencies
  - <dep>: <description>
  ```
  ```

  ### 3. Integration Points

  Identificar:
  - APIs externas
  - Databases
  - Services
  - Auth mechanisms

  ### 4. Document

  Guardar em `.planning/codebase-map.md`

  ## Output

  ```
  .planning/codebase-map.md
  ```

  ## Success Criteria

  - Estrutura clara do projeto
  - Entry points identificados
  - Dependencies documentadas
