#!/usr/bin/env node

/**
 * gsd-caveman-hermes - Auto Installer
 * 
 * Este script configura automaticamente o gsd-caveman-hermes no Hermes Agent.
 * Executado automaticamente após `npm install gsd-caveman-hermes`
 */

const fs = require('fs');
const path = require('path');

const HOME = process.env.HOME || process.env.USERPROFILE || '/opt/data/home';
const HERMES_SKILLS_DIR = path.join(HOME, './skills');
const HERMES_AGENTS_DIR = path.join(HOME, './agents');
const PROJECT_DIR = __dirname;

// Cores para output
const green = (text) => console.log('\x1b[32m' + text + '\x1b[0m');
const yellow = (text) => console.log('\x1b[33m' + text + '\x1b[0m');
const red = (text) => console.log('\x1b[31m' + text + '\x1b[0m');
const cyan = (text) => console.log('\x1b[36m' + text + '\x1b[0m');

console.log(`
╔═══════════════════════════════════════════════════════════╗
║         gsd-caveman-hermes - Auto Installer              ║
╚═══════════════════════════════════════════════════════════╝
`);

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    green(`✓ Created: ${dir}`);
  }
}

function linkOrCopy(src, dest, name) {
  try {
    // Tenta criar link simbólico
    if (fs.existsSync(dest)) {
      fs.unlinkSync(dest);
    }
    fs.symlinkSync(src, dest);
    green(`✓ Linked: ${name}`);
    return 'link';
  } catch (err) {
    // Se falhar, copia
    try {
      if (fs.statSync(dest).isDirectory()) {
        fs.rmSync(dest, { recursive: true });
      }
      fs.copyFileSync(src, dest);
      green(`✓ Copied: ${name}`);
      return 'copy';
    } catch (err2) {
      yellow(`⚠ Skipped: ${name} (${err2.message})`);
      return 'skip';
    }
  }
}

function installSkills() {
  cyan('\n📦 Installing Skills...');
  ensureDir(HERMES_SKILLS_DIR);

  const skillsDir = path.join(PROJECT_DIR, 'skills');
  const skills = fs.readdirSync(skillsDir);
  let installed = 0;

  for (const skill of skills) {
    const src = path.join(skillsDir, skill);
    const dest = path.join(HERMES_SKILLS_DIR, skill);
    
    if (fs.statSync(src).isDirectory()) {
      const result = linkOrCopy(src, dest, `skills/${skill}`);
      if (result !== 'skip') installed++;
    }
  }

  green(`\n✓ ${installed}/${skills.length} skills installed`);
}

function installAgents() {
  cyan('\n🤖 Installing Agents...');
  ensureDir(HERMES_AGENTS_DIR);

  const agentsDir = path.join(PROJECT_DIR, 'agents');
  if (!fs.existsSync(agentsDir)) {
    yellow('⚠ No agents directory found, skipping');
    return;
  }

  const agents = fs.readdirSync(agentsDir);
  let installed = 0;

  for (const agent of agents) {
    const src = path.join(agentsDir, agent);
    const dest = path.join(HERMES_AGENTS_DIR, agent);
    const result = linkOrCopy(src, dest, `agents/${agent}`);
    if (result !== 'skip') installed++;
  }

  green(`\n✓ ${installed}/${agents.length} agents installed`);
}

function printSummary() {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                    Installation Complete!                 ║
╚═══════════════════════════════════════════════════════════╝

📚 Available Commands:

  GSD Hermes (Spec-Driven Development):
    /gsd              - Entry point & help
    /gsd-do          - Dispatcher (rota inteligente)
    /gsd-new-project - Iniciar novo projeto
    /gsd-plan-phase  - Planejar fase N
    /gsd-execute-phase - Executar fase N
    /gsd-debug       - Debug sistemático
    /gsd-spike      - Experimento descartável
    /gsd-sketch     - Mockup UI
    /gsd-progress   - Status do projeto

  Caveman (Compressed Communication ~75% tokens):
    /caveman         - Ativar modo full
    /caveman ultra   - Modo ultra compressivo
    /caveman lite    - Modo lite
    /caveman-commit  - Commit messages terse
    /caveman-review  - Code review em 1 linha
    /caveman-help    - Help card

💡 Quick Start:
   npm install gsd-caveman-hermes  ✓ (done!)
   /gsd-new-project                 - Start a project
   /caveman                         - Activate compression

📖 Docs: https://github.com/SEU_USER/gsd-caveman-hermes
`);
}

// Main
try {
  installSkills();
  installAgents();
  printSummary();
} catch (err) {
  red(`\n✗ Installation failed: ${err.message}`);
  process.exit(1);
}
