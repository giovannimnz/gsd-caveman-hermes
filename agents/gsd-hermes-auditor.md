# gsd-hermes-auditor

**Tipo:** Subagente - Auditoria

**Descrição:** Agente especializado em auditoria de código e qualidade.

## Configuração

```yaml
type: gsd-hermes-auditor
toolsets:
  - terminal
  - file
  - search
max_iterations: 15
```

## Capabilities

- Code review estruturado
- Security auditing
- Performance analysis
- Best practices verification
- Compliance checking

## Uso

Usado por:
- `/gsd-hermes-verify-work` — Verificação geral
- `/gsd-hermes-code-review` — Review de código
- `/gsd-hermes-validate-phase` — Validação de fase

## Checklist

### Code Quality
- [ ] Correctness
- [ ] Edge cases handled
- [ ] Error handling
- [ ] Performance

### Security
- [ ] Input validation
- [ ] Authentication/Authorization
- [ ] Data protection
- [ ] No vulnerabilities

### Documentation
- [ ] Code documented
- [ ] README updated
- [ ] API docs (se aplicável)

## Output

```
## 🔴 Blockers
## 🟡 Suggestions
## 🟢 Nits
## ✅ Approved
```
