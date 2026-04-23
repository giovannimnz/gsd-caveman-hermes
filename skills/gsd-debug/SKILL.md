---
name: gsd-debug
description: "Debug sistemático usando método científico"
tags:
  - gsd
  - debug
  - investigation
related_skills:
  - gsd-quick
  - gsd-verify-work
  - gsd-forensics
content: |
  # gsd-debug

  **Tipo:** Investigação / Debug

  **Descrição:** Investiga bugs usando método científico sistemático. Mantém estado persistente e retorna resultados estruturados.

  ## Quando Usar

  - Bug, erro, crash, comportamento inesperado
  - Problema que não é óbvio a causa
  - Necesita investigação profunda

  ## Argumentos

  `<descrição do bug>` — Sintomas reportados pelo usuário

  ## Processo

  ### 1. Symptom Capture

  - Documentar o que usuário reportou
  - Clarificar contexto (o que esperava vs o que aconteceu)
  - Separar factos de suposições

  ### 2. Hypothesis Generation

  Listar possíveis causas:
  - Hipótese 1: <causa possível>
  - Hipótese 2: <causa possível>
  - Hipótese 3: <causa possível>

  ### 3. Testing

  Para cada hipótese (em ordem de likelihood):
  1. Descrever teste que vai fazer
  2. Executar teste
  3. Analisar resultado
  4. Refinar hipóteses

  ### 4. Root Cause

  Quando encontrar:
  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  ROOT CAUSE FOUND
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  **Causa:** <descrição clara>
  **Evidence:** <provas coletadas>
  **Fix:** <como corrigir>
  ```

  ### 5. Fix & Verify

  - Aplicar correção
  - Verificar que symptoms sumiram
  - Confirmar com usuário

  ## Estados de Return

  - `ROOT CAUSE FOUND` — Causa raiz identificada
  - `CHECKPOINT REACHED` — Precisa input do usuário
  - `DEBUG COMPLETE` — Problema resolvido
