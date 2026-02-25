import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function TerminalSimulator() {
  const [lines, setLines] = useState([]);

  const bootSequence = [
    "Initializing Saintgits Cyber Protocol...",
    "Loading exploit payloads... [OK]",
    "Bypassing mainframe firewalls... [OK]",
    "Establishing secure connection to Pegasus '26 servers...",
    "Access Granted. Welcome, Operator.",
  ];

  useEffect(() => {
    let delay = 0;
    bootSequence.forEach((line) => {
      delay += Math.random() * 800 + 400;
      setTimeout(() => {
        setLines((prev) => [...prev, line]);
      }, delay);
    });
  }, []);

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="liquid-glass rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,68,255,0.2)] border border-white/10"
        >
          <div className="bg-white/[0.05] border-b border-white/10 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_5px_#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_5px_#eab308]" />
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" />
            </div>
            <div className="mx-auto flex items-center gap-2 text-xs text-gray-400 font-mono">
              <Terminal className="w-3 h-3" /> root@saintgits-cyber:~
            </div>
          </div>

          <div className="p-6 h-64 font-mono text-sm overflow-y-auto flex flex-col gap-2 bg-[#030014]/80">
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  line.includes("Access Granted")
                    ? "text-neon-blue font-bold"
                    : "text-gray-300"
                }
              >
                <span className="text-neon-red mr-2">❯</span> {line}
              </motion.div>
            ))}
            {lines.length === bootSequence.length && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="w-2 h-4 bg-neon-purple mt-1"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
