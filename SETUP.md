# Setup Guide - gsd-caveman-hermes

## Opção 1: Link Simbólico (Recomendado)

```bash
# Clone o repo no host (ou copie a pasta)
git clone https://github.com/SEU_USER/gsd-caveman-hermes.git ~/gsd-caveman-hermes

# Crie link simbólico para a pasta de skills do Hermes
ln -s ~/gsd-caveman-hermes/skills ~/./skills/gsd-caveman-hermes

# Crie link simbólico para agents (se Hermes suportar)
ln -s ~/gsd-caveman-hermes/agents ~/./agents/gsd-caveman-hermes
```

## Opção 2: Copiar Pasta Inteira

```bash
# Copie a pasta skills para o diretório de skills do Hermes
cp -r ~/gsd-caveman-hermes/skills/* ~/./skills/

# Copie agents também
cp -r ~/gsd-caveman-hermes/agents ~/./agents/
```

## Opção 3: Git Submodule (para usar em projetos)

```bash
# No diretório do projeto
git submodule add https://github.com/SEU_USER/gsd-caveman-hermes.git .gsd-caveman-hermes

# Os skills ficam em .gsd-caveman-hermes/skills/
```

## Verificar Instalação

No Hermes, teste:

```
skill_view(name="gsd")
skill_view(name="caveman")
skill_view(name="gsd-do")
skill_view(name="caveman-commit")
```

## Estrutura de Diretórios Esperada

Após instalação:

```
~/./skills/
├── gsd/                    # Entry point GSD
├── gsd-do/
├── gsd-new-project/
├── gsd-plan-phase/
├── gsd-execute-phase/
├── gsd-debug/
├── gsd-spike/
├── gsd-sketch/
├── gsd-research-phase/
├── gsd-verify-work/
├── gsd-validate-phase/
├── gsd-code-review/
├── gsd-progress/
├── gsd-add-todo/
├── gsd-add-phase/
├── gsd-discuss-phase/
├── gsd-map-codebase/
├── gsd-list-phase/
├── gsd-help/
├── gsd-index/
├── caveman/               # Entry point Caveman (~75% tokens)
├── caveman-commit/        # Commit messages terse
├── caveman-review/        # One-line code review
├── caveman-help/         # Help card
└── compress/             # Compression tool
```

## Quick Start

### Ativar Caveman (comunicação compressa)
```
/caveman
/caveman ultra    # Para compressão máxima
/caveman lite     # Para modo menos agressivo
```

### Iniciar Projeto GSD
```
/gsd-new-project
/gsd-plan-phase 1
/gsd-execute-phase 1
```

## Desativar

```
stop caveman  # Sai do modo caveman
```

## Notas

- `/caveman` e `/gsd` são entry points curtos
- Skills GSD são prefixed com `gsd-` (ex: `gsd-do`, `gsd-new-project`)
- Skills Caveman são prefixed com `caveman-` (ex: `caveman-commit`, `caveman-review`)
- Caveman NÃO altera a funcionalidade GSD, só comprime a comunicação
- Você pode usar GSD normalmente E ativar caveman para economizar tokens
