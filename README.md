# GSD Hermes Caveman

Sistema de meta-prompting, engenharia de contexto e desenvolvimento dirigido por especificações, **com modo caveman integrado**.

Baseado em:
- [get-shit-done](https://github.com/gsd-build/get-shit-done) — spec-driven development
- [caveman](https://github.com/JuliusBrussee/caveman) — compressão de comunicação

## Caveman Mode

Caveman torna a comunicação do agente **75% mais curta** em tokens, mantendo 100% de precisão técnica.

### Níveis de Intensidade

| Modo | Uso | Exemplo |
|------|-----|---------|
| **lite** | `/caveman lite` | "Your component re-renders because you create a new object reference each render." |
| **full** | `/caveman` | "New object ref each render. Inline object prop = new ref = re-render." |
| **ultra** | `/caveman ultra` | "Inline obj prop → new ref → re-render. `useMemo`." |
| **wenyan-lite** | `/caveman wenyan-lite` | "組件頻重繪，以每繪新生對象參照故。" |
| **wenyan-full** | `/caveman wenyan` | "物出新參照，致重繪。useMemo Wrap之。" |
| **wenyan-ultra** | `/caveman wenyan-ultra` | "新參照→重繪。useMemo Wrap。" |

### Skills Caveman

| Skill | Uso | Descrição |
|-------|-----|-----------|
| `caveman` | `/caveman` | Modo principal de comunicação compressa |
| `caveman-commit` | `/caveman-commit` | Commit messages terse (Conventional Commits, ≤50 chars) |
| `caveman-review` | `/caveman-review` | Code review em uma linha: `L42: bug: user null. Add guard.` |
| `caveman-compress` | `/caveman:compress <file>` | Comprimir arquivos .md pra caveman |
| `caveman-help` | `/caveman-help` | Card de referência rápida |

## GSD Hermes (Spec-Driven Development)

### Skills GSD

| Skill | Uso | Descrição |
|-------|-----|-----------|
| `gsd/do` | `/gsd-do` | Dispatcher inteligente |
| `gsd/new-project` | `/gsd-new-project` | Inicializa projeto |
| `gsd/plan-phase` | `/gsd-plan-phase N` | Planeja fase N |
| `gsd/execute-phase` | `/gsd-execute-phase N` | Executa fase N |
| `gsd/add-phase` | `/gsd-add-phase` | Adiciona fase |
| `gsd/debug` | `/gsd-debug` | Debug sistemático |
| `gsd/spike` | `/gsd-spike` | Experimento descartável |
| `gsd/sketch` | `/gsd-sketch` | Mockup UI |
| `gsd/research-phase` | `/gsd-research-phase` | Pesquisa de domínio |
| `gsd/verify-work` | `/gsd-verify-work` | Verificação de qualidade |
| `gsd/validate-phase` | `/gsd-validate-phase N` | Valida fase N |
| `gsd/code-review` | `/gsd-code-review` | Code review |
| `gsd/progress` | `/gsd-progress` | Status do projeto |
| `gsd/add-todo` | `/gsd-add-todo` | Adiciona tarefa |

## Estrutura do Projeto

```
gsd-hermes-caveman/
├── skills/
│   ├── caveman/           # Caveman main
│   ├── caveman-commit/   # Terse commits
│   ├── caveman-review/   # One-line reviews
│   ├── caveman-help/     # Help card
│   ├── compress/         # Compression tool
│   ├── gsd-do/          # GSD Dispatcher
│   ├── gsd-new-project/ # Project init
│   ├── gsd-plan-phase/  # Phase planning
│   └── ... (mais GSD skills)
├── agents/               # Agentes especializados
├── workflows/            # Workflows GSD
├── templates/           # Templates de projeto
└── references/         # Guias e referências
```

## Quick Start

### Ativar Caveman

```
/caveman          # Modo full (default)
/caveman ultra    # Modo ultra compressivo
/caveman lite     # Modo lite
```

### Iniciar Projeto GSD

```
/gsd-new-project
/gsd-plan-phase 1
/gsd-execute-phase 1
```

## Arquitetura

- **Caveman**: Otimiza comunicação (entrada/saída de tokens)
- **GSD Hermes**: Otimiza processo (spec-driven, fases, planejamento)

Caveman funciona com qualquer skill. GSD Hermes organiza o trabalho em fases com planejamento estruturado.

## Comandos Principais

### Caveman
```
/caveman [lite|full|ultra|wenyan-lite|wenyan|wenyan-ultra]
/caveman-commit
/caveman-review
/caveman:compress <arquivo>
/caveman-help
stop caveman  # Desativar
```

### GSD Hermes
```
/gsd-do <tarefa>
/gsd-new-project [--auto]
/gsd-plan-phase <N>
/gsd-execute-phase <N>
/gsd-add-phase <descrição>
/gsd-debug <bug>
/gsd-spike <pergunta>
/gsd-sketch <UI>
/gsd-research-phase <tópico>
/gsd-verify-work
/gsd-validate-phase <N>
/gsd-code-review
/gsd-progress
/gsd-add-todo <tarefa>
/gsd-help
```

## Licença

MIT

Baseado em:
- [get-shit-done](https://github.com/gsd-build/get-shit-done) by TÂCHES
- [caveman](https://github.com/JuliusBrussee/caveman) by JuliusBrussee
