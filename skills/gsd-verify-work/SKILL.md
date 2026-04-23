---
name: gsd-verify-work
description: "Verifica qualidade e completude do trabalho"
tags:
  - gsd
  - quality
  - verification
  - review
related_skills:
  - gsd-code-review
  - gsd-validate-phase
  - gsd-progress
content: |
  # gsd-verify-work

  **Tipo:** Quality / Verification

  **Descrição:** Verifica se o trabalho está completo e atende aos criteria.

  ## Quando Usar

  - Depois de completar uma phase
  - Antes de marcar milestone como done
  - Code review geral
  - "Está pronto pra review?"

  ## Argumentos

  `[<escopo>]` — Opcional. Padrão é work atual da phase corrente.

  ## Processo

  ### 1. Carregar Criteria

  - Ler requirements da phase ou milestone
  - Listar acceptance criteria
  - Listar definition of done

  ### 2. Verificar Cada Criteria

  Para cada criterion:
  ```
  [ ] <criterion> — **PASS/FAIL/PARTIAL**
      Evidence: <como verificou>
  ```

  ### 3. Checklist de Qualidade

  - [ ] Código compila/runs
  - [ ] Tests passaram
  - [ ] Documentation atualizada
  - [ ] No regressions
  - [ ] Code review feito
  - [ ] Acceptance criteria atendidos

  ### 4. Resultado

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  VERIFICATION RESULT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  **Status:** READY / NEEDS_WORK / BLOCKED
  
  **Passed:**
  - <item>
  
  **Failed:**
  - <item> — <reason>
  
  **Recommendations:**
  - <sugestão>
  ```

  ## Success Criteria

  - Todos os criteria passam
  - Nenhum BLOCKED
  - Documentation completa
