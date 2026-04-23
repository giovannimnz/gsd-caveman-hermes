# gsd-planner

**Tipo:** Subagente - Planejamento

**Descrição:** Agente especializado em criar planos de execução detalhados.

## Configuração

```yaml
type: gsd-planner
toolsets:
  - terminal
  - file
max_iterations: 15
```

## Capabilities

- Análise de requirements
- Criação de planos estruturados
- Dependency analysis
- Effort estimation
- Risk identification

## Uso

Usado por `/gsd-plan-phase` para detalhar cada phase.

## Input Recebido

- PROJECT.md (contexto)
- ROADMAP.md (fases)
- REQUIREMENTS.md (requisitos)
- Phase number

## Output

- Phase plan detalhado em `.planning/phases/phase-N.md`
- Lista de planos com steps
- Success criteria por plano
