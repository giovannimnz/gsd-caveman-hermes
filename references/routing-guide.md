# Routing Guide - When to Use Each Command

## Quick Reference

| I want to... | Use this command |
|--------------|------------------|
| Start a new project | `/gsd-hermes-new-project` |
| Map existing codebase | `/gsd-hermes-map-codebase` |
| Route freeform request | `/gsd-hermes-do` |
| Plan a specific phase | `/gsd-hermes-plan-phase N` |
| Execute a phase | `/gsd-hermes-execute-phase N` |
| Add new phase | `/gsd-hermes-add-phase` |
| Research domain | `/gsd-hermes-research-phase` |
| Debug something | `/gsd-hermes-debug` |
| Spike/experiment | `/gsd-hermes-spike` |
| Mockup UI | `/gsd-hermes-sketch` |
| Verify work | `/gsd-hermes-verify-work` |
| Validate phase | `/gsd-hermes-validate-phase N` |
| Review code | `/gsd-hermes-code-review` |
| Check progress | `/gsd-hermes-progress` |
| Add todo/note | `/gsd-hermes-add-todo` |
| Get help | `/gsd-hermes-help` |

## Decision Trees

### New to Project?

```
START HERE
    │
    ▼
Is there existing code?
    │
    ├─ YES → /gsd-hermes-map-codebase
    │         then /gsd-hermes-new-project
    │
    └─ NO → /gsd-hermes-new-project
```

### Want to Add Something?

```
What is it?
    │
    ├─ Bug → /gsd-hermes-debug
    │
    ├─ Small fix/change → /gsd-hermes-quick
    │
    ├─ New feature (complex) → /gsd-hermes-add-phase
    │
    ├─ New feature (small) → /gsd-hermes-quick
    │
    ├─ Exploration/research → /gsd-hermes-research-phase
    │
    └─ UI mockup → /gsd-hermes-sketch
```

### Mid-Project?

```
Where are you?
    │
    ├─ Planning → /gsd-hermes-plan-phase N
    │
    ├─ Executing → /gsd-hermes-execute-phase N
    │
    ├─ Done with phase → /gsd-hermes-validate-phase N
    │
    └─ Lost/confused → /gsd-hermes-progress
```

## Command Combinations

### Happy Path (New Project)

1. `/gsd-hermes-new-project`
2. `/gsd-hermes-plan-phase 1`
3. `/gsd-hermes-execute-phase 1`
4. `/gsd-hermes-validate-phase 1`
5. `/gsd-hermes-plan-phase 2`
6. ...continue until done

### With Research

1. `/gsd-hermes-new-project`
2. `/gsd-hermes-research-phase <topic>`
3. `/gsd-hermes-plan-phase 1`
4. ...

### With Debug

1. `/gsd-hermes-debug <bug description>`
2. (fix the issue)
3. `/gsd-hermes-verify-work`
