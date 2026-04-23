---
name: gsd-hermes-code-review
description: "Revisão de código estruturada"
tags:
  - gsd
  - code-review
  - quality
  - review
related_skills:
  - gsd-hermes-verify-work
  - gsd-hermes-quick
content: |
  # gsd-hermes-code-review

  **Tipo:** Quality / Review

  **Descrição:** Revisa código de forma estruturada, identificando issues e melhorias.

  ## Quando Usar

  - Antes de merge
  - Depois de completar plano
  - Code review request
  - "Review esse código"

  ## Argumentos

  `[<arquivos ou path>]` — Opcional. Padrão é changed files.

  ## Processo

  ### 1. Gather Context

  - Identificar arquivos para review
  - Carregar diff ou arquivos
  - Entender o que o código faz

  ### 2. Review Checklist

  Para cada arquivo:
  - [ ] **Correctness** — Lógica está certa?
  - [ ] **Edge Cases** — Handles corner cases?
  - [ ] **Security** — Vulnerabilidades?
  - [ ] **Performance** — EFFICIÊNCIA?
  - [ ] **Readability** — Código legível?
  - [ ] **Testing** — Tests adequados?
  - [ ] **Style** — Segue conventions?

  ### 3. Issues Found

  Classificar issues:
  - 🔴 **BLOCKER:** Must fix before merge
  - 🟡 **SUGGESTION:** Consider improving
  - 🟢 **NIT:** Minor style/preference

  ### 4. Output

  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  CODE REVIEW
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  **Files:** <lista>
  
  ## 🔴 Blockers
  - <issue> — <file:line> — <suggestion>
  
  ## 🟡 Suggestions
  - <issue> — <reason>
  
  ## 🟢 Nits
  - <nit>
  
  ## ✅ Looks Good
  - <file>: <razão>
  
  **Verdict:** APPROVE / REQUEST_CHANGES / NEEDS_WORK
  ```

  ## Success Criteria

  - Zero blockers
  - All suggestions documented
  - Verdict claro
