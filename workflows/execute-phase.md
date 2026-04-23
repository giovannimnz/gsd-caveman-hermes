# Workflow: execute-phase

## Purpose

Executa todos os planos de uma fase em ordem.

## Prereqs

- `.planning/phases/phase-N.md` existe
- Phase status é "planned"

## Steps

### 1. Verify Phase

```bash
# Verificar que phase existe
cat .planning/phases/phase-N.md

# Verificar status
grep "Status" .planning/STATE.md
```

### 2. For Each Plan

Execute plan:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXECUTING: Plan <N> - <title>
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

#### 2a. Execute Steps

Execute cada step do plano.

#### 2b. Verify

Após steps, verificar:
- Code compiles/runs
- Tests pass
- No regressions

#### 2c. If Fail

```
⚠️ CHECKPOINT: Plan <N> failed

**Issue:** <description>
**What tried:** <what did>

Options:
1. Retry — Try different approach
2. Skip — Move to next plan (not recommended)
3. Debug — Investigate issue

Choose:
```

### 3. Update STATE

Após cada plan:
```markdown
## Phase N - Plan <M>
- Status: COMPLETED
- Completed: <date>
```

### 4. Phase Complete

Quando todos plans completam:
```markdown
## Phase N
- Status: COMPLETED
- Completed: <date>
- Next: Phase N+1 (if exists)
```

### 5. Auto-Validate

Rodar `/gsd-validate-phase N`

## Output

- Código implementado
- Tests passando
- STATE.md atualizado

## Next Step

- Se mais phases: `/gsd-plan-phase N+1`
- Se última: `/gsd-verify-work` para verification final
