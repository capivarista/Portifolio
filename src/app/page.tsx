"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// BOOT SEQUENCE TEXT
// ============================================
const bootLines = [
  "Initializing kernel...",
  "Loading Wired protocol...",
  "Establishing connection to Navi...",
  "Mounting filesystem /dev/sda1...",
  "Checking network interfaces...",
  "Loading Copland OS modules...",
  "Decryption key verified...",
  "Welcome to the Wired, Ghabriel.",
];

// ============================================
// ASCII ART
// ============================================
const asciiAvatar = `
    ████████████████
    ██          ██
    ██  ██████  ██
    ██  ██  ██  ██
    ██  ██████  ██
    ██          ██
    ████████████████
    ██          ██
    ██  ██████  ██
    ██          ██
    ████████████████
`;


const projects = [
  {
    id: "acervobook",
    name: "acervobook.exe",
    type: "exe",
    description: "ERP SaaS multi-tenant para sebos e bibliotecas. Next.js 14, Prisma ORM, PostgreSQL, NextAuth.js. Server Actions com validação Zod e tratamento de erros Prisma.",
    tech: ["Next.js 14", "Prisma", "PostgreSQL", "TypeScript", "Tailwind"],
  },
  {
    id: "k8s_migration",
    name: "k8s_migration.sh",
    type: "sh",
    description: "Migração de n8n e Chatwoot de Docker Compose para Kubernetes. Helm charts, ConfigMaps, Secrets, Ingress NGINX, alta disponibilidade.",
    tech: ["Kubernetes", "Helm", "Docker", "DevOps", "CI/CD"],
  },
  {
    id: "sim_racing",
    name: "sim_racing.hw",
    type: "hw",
    description: "Engenharia de hardware para volante Force Feedback DIY. Arduino, drivers de motor, eletrônica de potência, simulação de física em tempo real.",
    tech: ["Arduino", "C++", "Eletrônica", "CAD", "Engenharia"],
  },
  {
    id: "roblox_td",
    name: "roblox_td.lua",
    type: "lua",
    description: "Tower Defense game development no Roblox Studio. Lua scripting, pathfinding AI, wave system, economia de jogo, UI framework.",
    tech: ["Lua", "Roblox Studio", "Game Dev", "3D", "UI/UX"],
  },
];


export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Boot sequence animation
  useEffect(() => {
    const timer = setTimeout(() => setBootComplete(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="crt-flicker min-h-screen relative z-10">

      <AnimatePresence>
        {!bootComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-start justify-center p-8 font-mono text-sm"
          >
            <div className="max-w-2xl w-full">
              {bootLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3, duration: 0.1 }}
                  className="boot-line text-glow mb-2"
                >
                  <span className="text-crt-green">root@wired:~$</span> {line}
                </motion.div>
              ))}
              <div className="mt-4">
                <span className="cursor"></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="p-4 md:p-8 space-y-8"
      >

        <section className="terminal-window max-w-4xl mx-auto">
          <div className="terminal-header">
            SYSTEM.BOOT // WIRED_OS v2.6.1
          </div>
          <div className="terminal-content text-center">
            <motion.h1
              className="glitch text-5xl md:text-7xl font-bold mb-4 text-glow"
              data-text="GHABRIEL"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.5 }}
            >
              GHABRIEL
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-ghost-white mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 0.5 }}
            >
              DevOps &amp; Software Developer // Trainee
            </motion.p>
            <motion.div
              className="mt-6 text-sm text-crt-green-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 0.5 }}
            >
              <span className="cursor"></span> Awaiting input...
            </motion.div>
          </div>
        </section>


        <section className="terminal-window max-w-4xl mx-auto">
          <div className="terminal-header">
            SYSTEM.INFO // USER_PROFILE
          </div>
          <div className="terminal-content flex flex-col md:flex-row gap-6 items-center">
            <div className="ascii-art flex-shrink-0 text-center">
              {asciiAvatar}
            </div>
            <div className="flex-grow space-y-4">
              <h2 className="text-2xl text-glow mb-4">/whoami</h2>
              <p className="text-ghost-white leading-relaxed">
                Especialista em automação, infraestrutura e desenvolvimento full-stack. 
                Experiência com migrações cloud-native, orquestração de containers, 
                e sistemas distribuídos. 
              </p>
              <p className="text-ghost-white leading-relaxed">
                Atualmente focado em arquiteturas multi-tenant, Server Actions com 
                validação estrita, e otimização de queries N+1. 
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["DevOps", "Kubernetes", "Next.js", "PostgreSQL", "TypeScript", "Automation"].map((tag) => (
                  <span
                    key={tag}
                    className="border border-crt-green px-3 py-1 text-xs text-glow"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>


        <section className="terminal-window max-w-4xl mx-auto">
          <div className="terminal-header">
            DATA.ARCHIVE // PROJECTS
          </div>
          <div className="terminal-content">
            <h2 className="text-2xl text-glow mb-6">/ls -la ./projects/</h2>
            <div className="space-y-2">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="flex items-center p-3 border border-crt-green-dim hover:bg-crt-green hover:text-bg cursor-pointer transition-all"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`file-icon ${project.type}`}>📄</span>
                  <span className="flex-grow font-mono">{project.name}</span>
                  <span className="text-xs text-crt-green-dim">
                    {new Date().toISOString().split('T')[0]}
                  </span>
                </motion.div>
              ))}
            </div>


            <AnimatePresence>
              {hoveredProject && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 border-2 border-crt-green bg-black/90 text-glow"
                >
                  <h3 className="text-lg font-bold mb-2">
                    {projects.find(p => p.id === hoveredProject)?.name}
                  </h3>
                  <p className="text-ghost-white mb-3">
                    {projects.find(p => p.id === hoveredProject)?.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {projects.find(p => p.id === hoveredProject)?.tech.map((t) => (
                      <span key={t} className="text-xs border border-crt-green-dim px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>


        <section className="terminal-window max-w-4xl mx-auto">
          <div className="terminal-header">
            NETWORK.CONNECTIONS // CONTACT
          </div>
          <div className="terminal-content">
            <h2 className="text-2xl text-glow mb-6">/netstat -an</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <a
                href="https://github.com/capivarista"
                target="_blank"
                rel="noopener noreferrer"
                className="lain-link text-glow flex items-center gap-2"
              >
                <span className="text-2xl"></span>
                github.com/capivarista
              </a>
              <a
                href="https://linkedin.com/in/ghabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="lain-link text-glow flex items-center gap-2"
              >
                <span className="text-2xl"></span>
                linkedin.com/in/ghabriel
              </a>
              <a
                href="mailto:ghabrielantonio77@gmail.com"
                className="lain-link text-glow flex items-center gap-2"
              >
                <span className="text-2xl"></span>
                ghabrielantonio77@gmail.com
              </a>
            </div>
          </div>
        </section>


        <footer className="text-center text-xs text-crt-green-dim mt-8">
          <p>WIRED_OS © 2026 // Connected to the Wired</p>
          <p className="mt-1">
            <span className="cursor"></span>
          </p>
        </footer>
      </motion.div>
    </main>
  );
}
