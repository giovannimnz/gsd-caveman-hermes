# Phase Lifecycle Guide

## Overview

Cada phase segue um lifecycle: PLANNED → IN_PROGRESS → COMPLETED → VALIDATED.

## Lifecycle States

```
┌─────────────┐
│  PLANNED    │  Phase exists but not started
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ IN_PROGRESS │  Plans being executed
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ COMPLETED   │  All plans executed
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ VALIDATED   │  Phase verified and approved
└─────────────┘
```

## State Transitions

### PLANNED → IN_PROGRESS

**Trigger:** User runs `/gsd-execute-phase N`

**Actions:**
- Update STATE.md
- Start first plan

### IN_PROGRESS → COMPLETED

**Trigger:** All plans finished

**Actions:**
- Update STATE.md
- Run validation

### COMPLETED → VALIDATED

**Trigger:** `/gsd-validate-phase N` returns READY

**Actions:**
- Update STATE.md
- Mark phase as validated
- Trigger next phase planning (if any)

## Backlog State

Phases not yet planned:

```
┌─────────────┐
│  BACKLOG    │  Not yet planned
└─────────────┘
```

## Skipping Phases

Not recommended but supported:

```
/gsd-add-phase "Phase N"
```

Will add to roadmap even if previous phases incomplete.
