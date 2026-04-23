# Get Shit Done - Hermes Edition

Sistema de meta-prompting, engenharia de contexto e desenvolvimento dirigido por especificações, **adaptado para o Hermes Agent**.

Baseado no [get-shit-done](https://github.com/gsd-build/get-shit-done) original, reescrito para máxima compatibilidade com o Hermes Agent.

## Diferenças do Original

| Aspecto | GSD Original | GSD Hermes |
|---------|--------------|------------|
| Runtime | Claude Code | Hermes Agent |
| Estrutura de skills | Tags customizadas (`<objective>`, etc.) | Formato nativo Hermes |
| Subagentes | Proprietário | `delegate_task` nativo |
| hooks | Bash/JS hooks | Scripts compatíveis |
| Instalação | npm global | Pasta local ou git submodule |

## Estrutura do Projeto

```
get-shit-done-hermes/
├── skills/           # Skills do Hermes (dispatcher, phases, etc.)
├── agents/           # Configurações de subagentes
├── workflows/        # Workflows completos (referência)
├── references/       # Guias e referências
├── templates/        # Templates de projeto
├── hooks/            # Scripts de automação
└── scripts/          # Utilitários
```

## Quick Start

### 1. Clone/Instale

```bash
# Opção A: Clone direto
git clone https://github.com/SEU_USER/get-shit-done-hermes.git ~/get-shit-done-hermes

# Opção B: Como submodule
git submodule add https://github.com/SEU_USER/get-shit-done-hermes.git .get-shit-done
```

### 2. Carregue uma skill

No Hermes, use:
```
skill_view(name="gsd/do")
```

### 3. Comece um novo projeto

```bash
# No diretório do projeto
/gsd-new-project
```

## Skills Disponíveis

### Core
- `gsd/do` - Dispatcher inteligente (rota texto livre para o comando certo)
- `gsd/new-project` - Inicializa projeto com questioning, research, requirements, roadmap
- `gsd/plan-phase` - Planeja uma fase específica
- `gsd/execute-phase` - Executa uma fase
- `gsd/add-phase` - Adiciona nova fase ao projeto
- `gsd/debug` - Debug sistemático com método científico
- `gsd/spike` - Experimento descartável para validar viabilidade
- `gsd/sketch` - Mockups HTML para explorar design
- `gsd/research-phase` - Pesquisa de domínio

### Quality
- `gsd/code-review` - Revisão de código
- `gsd/verify-work` - Verificação de qualidade
- `gsd/validate-phase` - Validação de fase

### Management
- `gsd/progress` - Status do projeto
- `gsd/add-todo` - Adiciona tarefa
- `gsd/milestone-summary` - Resumo de milestone

## Conceitos Principais

### Fases (Phases)
O projeto é dividido em fases (phase 1, phase 2, etc.). Cada fase tem:
- **Plan** → **Build** → **Verify** → **Document**

### Planning Directory
```
.planning/
├── PROJECT.md       # Contexto do projeto
├── config.json      # Preferências
├── ROADMAP.md       # Fases e roadmap
├── REQUIREMENTS.md  # Requisitos
├── STATE.md        # Memória do projeto
└── research/       # Pesquisa de domínio
```

### Dispatcher (/do)
O `/do` é o ponto de entrada principal. Descreva o que você quer em texto livre e ele roteia para o comando GSD apropriado.

## Licença

MIT - Baseado no projeto original [get-shit-done](https://github.com/gsd-build/get-shit-done) da TÂCHES.
