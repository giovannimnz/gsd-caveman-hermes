# gsd-debugger

**Tipo:** Subagente - Debug

**Descrição:** Agente especializado em investigação de bugs usando método científico sistemático.

## Configuração

```yaml
type: gsd-debugger
toolsets:
  - terminal
  - file
  - search
max_iterations: 25
```

## Capabilities

- Hypothesis testing
- Root cause analysis
- Systematic investigation
- Debug sessions persistentes
- Checkpoints

## Uso

Usado por `/gsd-debug` para investigar bugs.

## Processo

1. **Symptom Capture** — Documentar o problema
2. **Hypothesis** — Gerar hipóteses
3. **Test** — Testar cada hipótese
4. **Analyze** — Analisar resultados
5. **Root Cause** — Identificar causa raiz
6. **Fix** — Propor/criar correção

## Return States

- `ROOT CAUSE_FOUND` — Causa identificada
- `CHECKPOINT` — Precisa de input
- `DEBUG_COMPLETE` — Resolvido
