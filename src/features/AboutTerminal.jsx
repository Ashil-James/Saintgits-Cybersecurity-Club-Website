import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Terminal,
  Users,
  Briefcase,
  GraduationCap,
  Rocket,
} from "lucide-react";

const BOOT_SEQUENCE = [
  { text: "user@saintgits:~$ ./init_club.sh", type: "command" },
  { text: "Initializing secure environment...", type: "info" },
  { text: "Loading CTF modules............... [OK]", type: "success" },
  { text: "Establishing encrypted channel.... [OK]", type: "success" },
  { text: "Scanning member database.......... [OK]", type: "success" },
  { text: "Loading workshop modules.......... [OK]", type: "success" },
  { text: "", type: "break" },
  {
    text: "╔══════════════════════════════════════════╗",
    type: "banner",
  },
  {
    text: "║   SAINTGITS CYBERSECURITY CLUB v2.0      ║",
    type: "banner",
  },
  {
    text: "║   Members: 100+ | Status: OPERATIONAL    ║",
    type: "banner",
  },
  {
    text: "╚══════════════════════════════════════════╝",
    type: "banner",
  },
  { text: "", type: "break" },
  { text: "Welcome, Agent. All systems are online.", type: "welcome" },
  { text: "Type 'help' to see active deployments.", type: "hint" },
];

const highlights = [
  {
    icon: <Users className="w-5 h-5" />,
    label: "Thriving Community",
    detail: "100+ members learning, connecting, and growing together",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: "Skill Development",
    detail: "Weekly challenges, workshops, and hands-on training sessions",
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: "Career Opportunities",
    detail: "Internships, mentorship, and industry connections",
  },
  {
    icon: <Rocket className="w-5 h-5" />,
    label: "Project Support",
    detail: "Guidance on cybersecurity projects and research",
  },
];

export default function AboutTerminal() {
  const [lines, setLines] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || hasStarted) return;
    setHasStarted(true);

    let delay = 0;
    BOOT_SEQUENCE.forEach((line) => {
      delay += line.type === "break" ? 100 : Math.random() * 300 + 150;
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, delay);
    });
  }, [isInView, hasStarted]);

  return (
    <section className="py-16 md:py-32 relative z-10" id="ops" ref={sectionRef}>
      <div className="bg-orb bg-cyber-purple w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] left-0 top-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 relative">
          {/* ── Left: Text + Highlight cards ── */}
          <div className="w-full lg:w-1/2 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-cyber-purple mb-6 mx-auto lg:mx-0">
                <Terminal className="w-3.5 h-3.5" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  Our Mission
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight">
                More than just <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-red via-cyber-purple to-cyber-blue">
                  a club.
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                We are a community of 100+ passionate students united by a
                shared mission — to provide every member with the exposure,
                skills, and opportunities needed to become a competent
                cybersecurity professional.
              </p>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10">
                From weekly challenges and CTF competitions to industry
                workshops and networking with high-profile professionals, we
                serve as the launchpad for the next generation of cybersecurity
                experts.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start justify-center sm:justify-start gap-3 p-4 rounded-xl liquid-glass group hover:border-cyber-purple/20 transition-all duration-300 text-center sm:text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple shrink-0 group-hover:scale-110 transition-transform">
                    {h.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">
                      {h.label}
                    </h4>
                    <p className="text-xs text-gray-500">{h.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: Terminal ── */}
          <div className="w-full lg:w-1/2 relative lg:sticky lg:top-24 max-w-3xl mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-linear-to-tr from-cyber-red to-cyber-blue blur-[80px] opacity-15" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="terminal-window rounded-2xl overflow-hidden relative z-10"
            >
              {/* Title bar */}
              <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_#27c93f]" />
                </div>
                <div className="mx-auto text-xs text-gray-400 font-mono flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> root@saintgits-cyber — bash
                </div>
              </div>

              {/* Terminal body */}
              <div className="p-4 md:p-6 h-[300px] md:h-[380px] font-mono text-xs md:text-sm overflow-y-auto flex flex-col gap-1 bg-[#020205]/80 custom-scrollbar">
                {lines.map((line, idx) => {
                  if (line.type === "break")
                    return <div key={idx} className="h-2" />;

                  const colorClass =
                    line.type === "command"
                      ? "text-green-400"
                      : line.type === "success"
                        ? "text-gray-300"
                        : line.type === "banner"
                          ? "text-cyber-purple font-bold"
                          : line.type === "welcome"
                            ? "text-cyber-blue font-bold text-base"
                            : line.type === "hint"
                              ? "text-gray-500"
                              : "text-gray-400";

                  return (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      key={idx}
                      className={colorClass}
                    >
                      {line.type === "command" && (
                        <span className="text-cyber-red mr-1">❯</span>
                      )}
                      {line.type === "success" && (
                        <span className="text-green-500 mr-1">✓</span>
                      )}
                      {line.text}
                    </motion.div>
                  );
                })}
                {lines.length === BOOT_SEQUENCE.length && (
                  <motion.div className="flex items-center gap-1 mt-2">
                    <span className="text-cyber-red">❯</span>
                    <motion.div
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="w-2.5 h-5 bg-cyber-purple"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
