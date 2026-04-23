# Routing Guide - When to Use Each Command

## Quick Reference

| I want to... | Use this command |
|--------------|------------------|
| Start a new project | `/gsd-new-project` |
| Map existing codebase | `/gsd-map-codebase` |
| Route freeform request | `/gsd-do` |
| Plan a specific phase | `/gsd-plan-phase N` |
| Execute a phase | `/gsd-execute-phase N` |
| Add new phase | `/gsd-add-phase` |
| Research domain | `/gsd-research-phase` |
| Debug something | `/gsd-debug` |
| Spike/experiment | `/gsd-spike` |
| Mockup UI | `/gsd-sketch` |
| Verify work | `/gsd-verify-work` |
| Validate phase | `/gsd-validate-phase N` |
| Review code | `/gsd-code-review` |
| Check progress | `/gsd-progress` |
| Add todo/note | `/gsd-add-todo` |
| Get help | `/gsd-help` |

## Decision Trees

### New to Project?

```
START HERE
    │
    ▼
Is there existing code?
    │
    ├─ YES → /gsd-map-codebase
    │         then /gsd-new-project
    │
    └─ NO → /gsd-new-project
```

### Want to Add Something?

```
What is it?
    │
    ├─ Bug → /gsd-debug
    │
    ├─ Small fix/change → /gsd-quick
    │
    ├─ New feature (complex) → /gsd-add-phase
    │
    ├─ New feature (small) → /gsd-quick
    │
    ├─ Exploration/research → /gsd-research-phase
    │
    └─ UI mockup → /gsd-sketch
```

### Mid-Project?

```
Where are you?
    │
    ├─ Planning → /gsd-plan-phase N
    │
    ├─ Executing → /gsd-execute-phase N
    │
    ├─ Done with phase → /gsd-validate-phase N
    │
    └─ Lost/confused → /gsd-progress
```

## Command Combinations

### Happy Path (New Project)

1. `/gsd-new-project`
2. `/gsd-plan-phase 1`
3. `/gsd-execute-phase 1`
4. `/gsd-validate-phase 1`
5. `/gsd-plan-phase 2`
6. ...continue until done

### With Research

1. `/gsd-new-project`
2. `/gsd-research-phase <topic>`
3. `/gsd-plan-phase 1`
4. ...

### With Debug

1. `/gsd-debug <bug description>`
2. (fix the issue)
3. `/gsd-verify-work`
