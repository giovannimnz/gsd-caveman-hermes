# Workflow: new-project

## Purpose

Inicializa novo projeto com contexto profundo e estrutura de planejamento.

## Prereqs

- Diretório vazio ou novo projeto
- Git inicializado (opcional)

## Steps

### 1. Setup

```bash
# Criar estrutura
mkdir -p .planning/research

# Inicializar git se não existir
git init 2>/dev/null || true
```

### 2. Questioning

Fazer perguntas ao usuário:

1. **O que exatamente quer construir?**
   - Descrição em linhas gerais
   - Qual o problema que resolve?

2. **Quem vai usar?**
   - Target audience
   - User personas

3. **Por que isso importa?**
   - Business value
   - Impacto esperado

4. **Constraints?**
   - Timeline
   - Tech stack preferences
   - Budget/restrições

5. **Como sabe que funcionou?**
   - Success criteria
   - Metrics

### 3. Research (opcional)

Se usuário pediu ou `--auto`:

```bash
# Pesquisar domínio
/gsd-hermes-research-phase <domain>
```

### 4. Requirements

Gerar `REQUIREMENTS.md`:

```markdown
# Requirements: <project>

## Overview
<descrição>

## User Stories
1. Como [usuário], quero [ação] para [benefício]
2. ...

## Features
### Must Have
- [ ] Feature 1
- [ ] Feature 2

### Should Have
- [ ] Feature 3

### Won't Have (This Release)
- Feature 4

## Success Criteria
- [ ] Criteria 1
- [ ] Criteria 2
```

### 5. Roadmap

Gerar `ROADMAP.md`:

```markdown
# Roadmap: <project>

## Phase 1: <nome>
**Goal:** <objetivo>
**Plans:**
- Plan 1: <título>
- Plan 2: <título>

## Phase 2: <nome>
...

## Effort Estimate
- Total: <X> days
- Phase 1: <Y> days
- ...
```

### 6. State

Gerar `STATE.md`:

```markdown
# Project State

## Info
- **Project:** <nome>
- **Created:** <date>
- **Status:** ACTIVE

## Current Phase
- Phase: 0 (not started)

## Progress
- Phases: 0 total
- Completed: 0
```

### 7. Config

Gerar `config.json`:

```json
{
  "granularity": "standard",
  "parallel_plans": false,
  "auto_validate": true,
  "commit_docs": true
}
```

## Output Files

```
.planning/
├── PROJECT.md       # Contexto do projeto
├── config.json      # Configurações
├── ROADMAP.md       # Fases e roadmap
├── REQUIREMENTS.md  # Requisitos
├── STATE.md         # Estado atual
└── research/        # Pesquisas
```

## Next Step

Rodar `/gsd-hermes-plan-phase 1`
