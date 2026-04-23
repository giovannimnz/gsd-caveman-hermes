# Context Budget Guide

## Overview

Context budget é sobre gerenciar a quantidade de informação que cabe no contexto do modelo durante execução.

## Principios

### 1. Prioritize Recent & Relevant

- Informação mais recente > informação antiga
- Contexto específico > contexto geral
- Imports only what each phase needs

### 2. Prune Ruthlessly

Remova do contexto quando:
- Informação foi processada e incorporada
- Não é mais relevante para current task
- Está duplicated elsewhere

### 3. Use External References

Em vez de colocar tudo no contexto:
- Referencie arquivos (`@file.md`)
- Use `.planning/` como source of truth
- Mantenha arquivos organizados

## Practical Rules

| Scenario | Action |
|----------|--------|
| >50 files in context | Summarize or prune |
| >10 tool calls | Check if context is growing |
| Same info repeated | Remove duplicates |
| Old research still in context | Archive to file |

## State Management

Use `.planning/STATE.md` como single source of truth:
- Current phase
- Progress
- Blockers
- Decisions

Não mantenha isso tudo no contexto — leia do arquivo quando precisar.
