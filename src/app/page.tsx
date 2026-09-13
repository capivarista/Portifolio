"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const bootLines = [
  "Initializing kernel...",
  "Loading Wired protocol...",
  "Establishing connection to Navi...",
  "Mounting filesystem /dev/portfolio...",
  "Checking network interfaces...",
  "Loading Copland OS modules...",
  "Rendering user profile...",
  "Welcome to the Wired, Ghabriel.",
];

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

type Project = {
  id: string;
  name: string;
  access: "case" | "public";
  description: string;
  tech: string[];
  url?: string;
};

const projects: Project[] = [
  {
    id: "performance",
    name: "dashboard_performance.patch",
    access: "case",
    description:
      "Caso profissional anonimizado: uma carga que ultrapassava mil requisições foi redesenhada com agregações no servidor, snapshots, lazy loading e fallback resiliente. Na maior parte dos cenários observados, o volume caiu para poucas dezenas.",
    tech: ["Performance", "SQL", "Caching", "Server-side", "Observabilidade"],
  },
  {
    id: "duckshot",
    name: "duckshot_pi.js",
    access: "public",
    description:
      "Experimento que conecta JavaScript, interface web e prototipação física em uma releitura de um clássico.",
    tech: ["JavaScript", "Node.js", "SQL", "Hardware"],
    url: "https://github.com/capivarista/DuckShot",
  },
  {
    id: "albergo",
    name: "albergo_web.html",
    access: "public",
    description:
      "Experiência web criada para apresentar uma solução de gestão hoteleira, incluindo produto, planos e atendimento.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    url: "https://github.com/capivarista/Albergo.github.io",
  },
  {
    id: "livraria",
    name: "livraria_java.jar",
    access: "public",
    description:
      "Aplicação de gerenciamento de livraria desenvolvida para explorar modelagem de domínio e orientação a objetos.",
    tech: ["Java", "POO", "Modelagem"],
    url: "https://github.com/capivarista/Livraria-Java",
  },
  {
    id: "undead",
    name: "village_of_the_undead.c",
    access: "public",
    description:
      "RPG textual desenvolvido em equipe, com lógica de jogo, narrativa ramificada e gerenciamento de estado.",
    tech: ["C", "Game Dev", "Lógica", "Trabalho em equipe"],
    url: "https://github.com/capivarista/village_of_the_undead",
  },
];

const skills = [
  ["frontend", "React · Next.js · TypeScript · Tailwind CSS"],
  ["backend", "Node.js · Java · APIs REST · Serverless"],
  ["dados", "PostgreSQL · SQL · modelagem · agregações"],
  ["infra", "Docker · Kubernetes · CI/CD · Linux"],
  ["outros", "C · C++ · Arduino · automação"],
];

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [bootComplete, setBootComplete] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);
  const activeProject = projects.find((project) => project.id === activeProjectId) ?? projects[0];

  useEffect(() => {
    const timer = window.setTimeout(
      () => setBootComplete(true),
      reduceMotion ? 350 : 3200,
    );

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <main className="crt-flicker min-h-screen relative z-10">
      <AnimatePresence>
        {!bootComplete && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
            className="boot-screen"
            role="status"
            aria-live="polite"
          >
            <div className="boot-frame">
              <div className="boot-meta">
                <span>WIRED_OS BIOS v2.6.1</span>
                <span>MEMORY CHECK: OK</span>
              </div>
              <div className="boot-log">
                {bootLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : index * 0.28,
                      duration: reduceMotion ? 0 : 0.08,
                    }}
                    className="boot-line"
                  >
                    <span>root@wired:~$</span> {line}
                  </motion.div>
                ))}
              </div>
              <div className="boot-footer">
                <span><i className="cursor" /> CONNECTING...</span>
                <button type="button" onClick={() => setBootComplete(true)}>
                  [ ESC ] SKIP BOOT
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.55 }}
        className="main-shell"
      >
        <nav className="terminal-nav" aria-label="Navegação principal">
          <a href="#top">~/home</a>
          <a href="#perfil">/whoami</a>
          <a href="#trabalho">/projects</a>
          <a href="#contato">/netstat</a>
        </nav>

        <section id="top" className="terminal-window hero-terminal">
          <div className="terminal-header">
            <span>SYSTEM.BOOT // WIRED_OS v2.6.1</span>
            <span className="terminal-status">● ONLINE</span>
          </div>
          <div className="terminal-content hero-content">
            <p className="command-line">root@wired:~$ ./identify_user.sh</p>
            <motion.h1
              className="glitch text-glow"
              data-text="GHABRIEL"
              initial={{ opacity: 0 }}
              animate={{ opacity: bootComplete ? 1 : 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.35 }}
            >
              GHABRIEL
            </motion.h1>
            <p className="hero-role">
              Desenvolvedor Full-stack // Automação, Performance &amp; Infraestrutura
            </p>
            <p className="hero-summary">
              Transformo problemas operacionais em software claro, rápido e confiável.
            </p>
            <div className="system-prompt">
              <span className="cursor" /> AWAITING INTERESTING PROBLEMS...
            </div>
          </div>
        </section>

        <section id="perfil" className="terminal-window">
          <div className="terminal-header">
            <span>SYSTEM.INFO // USER_PROFILE</span>
            <span>UID: GHABRIEL</span>
          </div>
          <div className="terminal-content profile-layout">
            <div className="ascii-panel" aria-hidden="true">
              <pre className="ascii-art">{asciiAvatar}</pre>
              <span>PROFILE.NODE</span>
              <span>BR / REMOTE</span>
            </div>
            <div className="profile-copy">
              <p className="command-line">root@wired:~$ whoami</p>
              <h2>Entre a ideia e a operação.</h2>
              <p>
                Trabalho onde produto, código e operação se encontram. Desenvolvo aplicações web,
                integrações e automações acompanhando o ciclo completo: entender, desenhar,
                implementar, observar e evoluir.
              </p>
              <p>
                Tenho interesse especial por performance, arquitetura de dados e infraestrutura —
                pontos em que pequenas decisões mudam custo, confiabilidade e experiência.
              </p>
              <div className="tag-list" aria-label="Principais competências">
                {["Full-stack", "Automação", "Performance", "PostgreSQL", "Cloud", "DevOps"].map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="trabalho" className="terminal-window">
          <div className="terminal-header">
            <span>DATA.ARCHIVE // PROJECTS</span>
            <span>{projects.length} OBJECTS</span>
          </div>
          <div className="terminal-content">
            <div className="section-intro">
              <div>
                <p className="command-line">root@wired:~$ ls -la ./work/</p>
                <h2>Problemas resolvidos.</h2>
              </div>
              <p>
                Trabalhos profissionais aparecem sem nomes ou detalhes proprietários. Repositórios
                pessoais são identificados como públicos.
              </p>
            </div>

            <div className="project-explorer">
              <div className="file-list" role="list" aria-label="Projetos e casos">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    type="button"
                    className={project.id === activeProjectId ? "active" : ""}
                    onMouseEnter={() => setActiveProjectId(project.id)}
                    onFocus={() => setActiveProjectId(project.id)}
                    onClick={() => setActiveProjectId(project.id)}
                    aria-pressed={project.id === activeProjectId}
                  >
                    <span className="file-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="file-name">{project.name}</span>
                    <span className={`access-badge ${project.access}`}>
                      {project.access === "case" ? "ANON" : "PUBLIC"}
                    </span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.article
                  key={activeProject.id}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduceMotion ? 0 : -10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.16 }}
                  className="project-detail"
                >
                  <p className="detail-path">/work/{activeProject.name}</p>
                  <h3>{activeProject.name}</h3>
                  <p>{activeProject.description}</p>
                  <div className="tag-list">
                    {activeProject.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  {activeProject.url ? (
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-action"
                    >
                      OPEN PUBLIC REPOSITORY ↗
                    </a>
                  ) : (
                    <span className="privacy-note">[ DETAILS SANITIZED // PROFESSIONAL CONTEXT ]</span>
                  )}
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <section id="stack" className="terminal-window">
          <div className="terminal-header">
            <span>SYSTEM.MODULES // STACK</span>
            <span>STATUS: LOADED</span>
          </div>
          <div className="terminal-content stack-content">
            <p className="command-line">root@wired:~$ cat /etc/skills.conf</p>
            <h2>Ferramentas são meios.</h2>
            <div className="stack-table">
              {skills.map(([group, items]) => (
                <div key={group}>
                  <span>[{group}]</span>
                  <p>{items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="terminal-window contact-terminal">
          <div className="terminal-header">
            <span>NETWORK.CONNECTIONS // CONTACT</span>
            <span>PORTS: OPEN</span>
          </div>
          <div className="terminal-content">
            <p className="command-line">root@wired:~$ netstat -an</p>
            <h2>Tem um problema interessante?</h2>
            <p className="contact-copy">
              Vamos conversar sobre produtos web, automação, performance e arquitetura de sistemas.
            </p>
            <div className="connection-list">
              <a href="mailto:ghabrielantonio77@gmail.com">
                <span>SMTP</span> ghabrielantonio77@gmail.com
              </a>
              <a href="https://github.com/capivarista" target="_blank" rel="noopener noreferrer">
                <span>SSH</span> github.com/capivarista ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ghabriel-antonio-716250284/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>HTTPS</span> linkedin.com/in/ghabriel-antonio-716250284 ↗
              </a>
            </div>
          </div>
        </section>

        <footer>
          <p>WIRED_OS © 2026 // Connected to the Wired</p>
          <a href="#top">RETURN_TO_ROOT ↑</a>
        </footer>
      </motion.div>
    </main>
  );
}
