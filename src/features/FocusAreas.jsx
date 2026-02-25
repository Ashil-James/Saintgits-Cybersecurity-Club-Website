import { motion, useMotionValue, useTransform } from "framer-motion";
import { Flag, ShieldAlert, Cpu, BookOpen, ArrowUpRight } from "lucide-react";

const areas = [
  {
    icon: <Flag className="w-7 h-7" />,
    title: "Capture The Flag",
    desc: "Compete in national and international CTF competitions. Sharpen your skills across Web, Crypto, Forensics, and Binary Exploitation categories.",
    color: "cyber-red",
    gradient: "from-red-500/20 to-red-900/5",
    borderHover: "hover:border-red-500/30",
    iconBg: "bg-red-500/10 text-red-400 group-hover:bg-red-500/20",
    stats: "4+ competitions",
  },
  {
    icon: <ShieldAlert className="w-7 h-7" />,
    title: "Web Exploitation",
    desc: "Learn to discover and responsibly disclose real-world vulnerabilities including SQL Injection, XSS, SSTI, and authentication bypasses.",
    color: "cyber-purple",
    gradient: "from-purple-500/20 to-purple-900/5",
    borderHover: "hover:border-purple-500/30",
    iconBg: "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20",
    stats: "OWASP Top 10",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Reverse Engineering",
    desc: "Dive deep into compiled binaries and malware to understand how software works at the assembly and machine-code level.",
    color: "cyber-blue",
    gradient: "from-blue-500/20 to-blue-900/5",
    borderHover: "hover:border-blue-500/30",
    iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20",
    stats: "Ghidra & IDA Pro",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Workshops & Training",
    desc: "Regular peer-led sessions and expert-guided workshops covering industry tools, cloud security, network defense, and the OWASP Top 10.",
    color: "white",
    gradient: "from-white/10 to-white/[0.02]",
    borderHover: "hover:border-white/20",
    iconBg: "bg-white/5 text-white group-hover:bg-white/10",
    stats: "Monthly sessions",
  },
];

function TiltCard({ area, index }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      className={`glow-card p-8 group cursor-none relative overflow-hidden ${area.borderHover} transition-all duration-500`}
    >
      {/* Hover gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/[0.03] to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

      <div style={{ transform: "translateZ(40px)" }} className="relative z-10">
        {/* Icon with animated ring */}
        <div className="relative mb-6">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center ${area.iconBg} transition-all duration-500 border border-white/5`}
          >
            {area.icon}
          </div>
          <motion.div
            className="absolute -inset-1 rounded-2xl border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
          />
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
          {area.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">
          {area.desc}
        </p>

        {/* Bottom bar with stat and arrow */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <span className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold">
            {area.stats}
          </span>
          <motion.div
            className="w-8 h-8 rounded-lg bg-white/[0.03] flex items-center justify-center text-gray-600 group-hover:text-white group-hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <ArrowUpRight className="w-4 h-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FocusAreas() {
  return (
    <section className="py-16 md:py-32 relative z-10 [perspective:1000px]">
      <div className="bg-orb bg-cyber-blue w-[40rem] h-[40rem] right-0 top-0" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-cyber-blue mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-purple to-cyber-blue">
              Focus Areas
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Building well-rounded cybersecurity professionals through hands-on
            experience across multiple domains of security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="max-w-md mx-auto sm:max-w-none w-full"
            >
              <TiltCard area={area} index={idx} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
