# gsd-hermes-executor

**Tipo:** Subagente - Execução

**Descrição:** Agente especializado em executar código e implementar features.

## Configuração

```yaml
type: gsd-hermes-executor
toolsets:
  - terminal
  - file
  - browser
max_iterations: 20
```

## Capabilities

- Implementação de features
- Código limpo e testado
- Following best practices
- Error handling
- Documentation

## Uso

Usado por `/gsd-hermes-execute-phase` para executar planos.

## Input Recebido

- Phase plan com lista de planos
- Contexto do projeto

## Output

- Código implementado
- Tests criados
- Documentation atualizada
- Verification executada
