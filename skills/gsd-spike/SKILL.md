---
name: gsd-spike
description: "Experimento descartável para validar viabilidade técnica"
tags:
  - gsd
  - spike
  - exploration
  - viability
related_skills:
  - gsd-research-phase
  - gsd-sketch
  - gsd-do
content: |
  # gsd-spike

  **Tipo:** Investigação / Experimento

  **Descrição:** Experimento descartável para validar viabilidade. Produz artefatos temporários que são descartados após a spike.

  ## Quando Usar

  - "Vou testar se essa library funciona"
  - "Preciso saber se consigo fazer X"
  - Validar feasibility de approach técnico
  - Proof of concept
  - "Will this work?"

  ## Argumentos

  `<pergunta ou área a validar>` — Ex: "Posso usar WebSockets com essa lib?"

  ## Processo

  ### 1. Definir Spike Question

  Pergunta clara a responder:
  - Posso [fazer X] com [tecnologia Y]?
  - Quanto tempo leva para [fazer Z]?

  ### 2. Design Experiment

  - Listar o que vai testar
  - Definir success criteria (como saber se funcionou?)
  - Definir limite de tempo

  ### 3. Execute Spike

  - Criar ambiente de teste (pode ser pasta temp)
  - Executar experimento
  - Medir resultados vs criteria

  ### 4. Wrap Up

  Resultado estruturado:
  ```
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  SPIKE RESULT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  
  **Pergunta:** <original>
  **Resposta:** <sim/não/com caveats>
  **Evidence:** <resultados do teste>
  **Recommendation:** <o que fazer com isso>
  ```

  ### 5. Cleanup

  - Descartar artefatos temporários
  - Manter apenas a learning no PROJECT.md ou .planning/research/

  ## Importante

  - Código da spike é DESCARTÁVEL
  - Não commitar código de spike
  - Guardar apenas aprendizados
