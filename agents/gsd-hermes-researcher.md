# gsd-hermes-researcher

**Tipo:** Subagente - Pesquisa

**Descrição:** Agente especializado em pesquisa de domínio. Pode executar múltiplas buscas em paralelo e sintetizar findings.

## Configuração

```yaml
type: gsd-hermes-researcher
toolsets:
  - web
  - terminal
max_iterations: 10
```

## Capabilities

- Web search e research
- Síntese de múltiplas fontes
- Domain analysis
- Technology evaluation
- Competitive analysis

## Uso com delegate_task

```python
delegate_task(
  tasks=[{
    "goal": "Pesquisar sobre <tópico>",
    "context": "Contexto adicional",
    "toolsets": ["web"]
  }]
)
```

## Output

Retorna documento estruturado com:
- Research questions respondidas
- Findings
- Sources
- Recommendations
