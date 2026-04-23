# Workflow: plan-phase

## Purpose

Cria plano detalhado para uma fase específica.

## Prereqs

- `.planning/` existe
- ROADMAP.md tem a fase
- Phase status é "planned" ou "backlog"

## Steps

### 1. Load Context

```bash
# Verificar estrutura
ls .planning/

# Carregar arquivos
cat .planning/PROJECT.md
cat .planning/ROADMAP.md
cat .planning/REQUIREMENTS.md
cat .planning/STATE.md
```

### 2. Extract Phase Info

Do ROADMAP:
- Phase number
- Phase title
- Phase goal
- List of plans

### 3. Create Phase Directory

```bash
mkdir -p .planning/phases
```

### 4. Create Phase Plan

Gerar `.planning/phases/phase-N.md`:

```markdown
# Phase N: <title>

## Overview
<phase goal>

## Dependencies
- Phase <X> (must be complete)
- <other deps>

## Deliverables
- [ ] <deliverable 1>
- [ ] <deliverable 2>

## Plans

### Plan 1: <title>
**Goal:** <what>
**Steps:**
1. <step>
2. <step>
3. <step>
**Verify:** <how to verify>
**Rollback:** <how to rollback>

### Plan 2: <title>
...

## Success Criteria
- [ ] <criteria 1>
- [ ] <criteria 2>
```

### 5. Update STATE

Em `.planning/STATE.md`:
```markdown
## Phase N
- Status: PLANNED
- Plans: <count>
- Planned: <date>
```

## Output

```
.planning/phases/phase-N.md
```

## Next Step

Rodar `/gsd-execute-phase N`
