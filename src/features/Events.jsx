import { motion, useInView } from "framer-motion";
import {
  Users,
  Trophy,
  Clock,
  ShieldAlert,
  Flag,
  Siren,
  Zap,
  Calendar,
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

const events = [
  {
    title: "Cybercrime Awareness & Investigation",
    date: "Feb 2026",
    month: "FEB",
    year: "2026",
    stats: [
      { icon: <Users />, text: "100 Students" },
      { icon: <Siren />, text: "Kerala Police Academy" },
    ],
    desc: "A cybercrime awareness and investigation session conducted by Kerala Police Academy, handled by instructor Mobin K Eldo. Covered cyber forensics, digital evidence handling, and real-world case studies.",
    accent: "#3b82f6",
    gradient: "from-blue-400 to-blue-600",
    tag: "WORKSHOP",
    highlight: 100,
    highlightLabel: "attendees",
  },
  {
    title: "Pegasus CTF",
    date: "Jan 2026",
    month: "JAN",
    year: "2026",
    stats: [
      { icon: <Flag />, text: "External CTF" },
      { icon: <Trophy />, text: "Multi-College Event" },
    ],
    desc: "An external Capture The Flag competition organized by the Cybersecurity Club, bringing together teams from multiple colleges for an intense battle of wits in web exploitation, cryptography, and forensics.",
    accent: "#ff0055",
    gradient: "from-cyber-red to-yellow-500",
    tag: "CTF",
    highlight: null,
    highlightLabel: "",
  },
  {
    title: "Forbidden Capture CTF",
    date: "Oct 2025",
    month: "OCT",
    year: "2025",
    stats: [
      { icon: <Users />, text: "20 Teams" },
      { icon: <Trophy />, text: "Internal CTF" },
    ],
    desc: "An internal Capture The Flag competition where 20 teams competed across categories including web security, reverse engineering, and cryptography challenges.",
    accent: "#7a00ff",
    gradient: "from-cyber-purple to-cyber-red",
    tag: "CTF",
    highlight: 20,
    highlightLabel: "teams",
  },
  {
    title: "Vulnerability Exploitation Workshop",
    date: "Sep 2025",
    month: "SEP",
    year: "2025",
    stats: [
      { icon: <Users />, text: "70 Students" },
      { icon: <ShieldAlert />, text: "Live Demo" },
    ],
    desc: "A hands-on workshop conducted by Aaron Bobby Jose on vulnerability exploitation. Featured a live demonstration of a Windows 7 vulnerability, showing how attackers can compromise a machine in real time.",
    accent: "#ef4444",
    gradient: "from-red-500 to-orange-500",
    tag: "WORKSHOP",
    highlight: 70,
    highlightLabel: "attendees",
  },
  {
    title: "EY Capture The Flag",
    date: "Feb 2025",
    month: "FEB",
    year: "2025",
    stats: [
      { icon: <Users />, text: "60+ Participants" },
      { icon: <Trophy />, text: "EY Internship to top teams" },
    ],
    desc: "A 24-hour capture the flag competition tackling web security, cryptography, and reverse engineering challenges.",
    accent: "#eab308",
    gradient: "from-yellow-400 to-yellow-600",
    tag: "CTF",
    highlight: 60,
    highlightLabel: "participants",
  },
  {
    title: "Ethical Hacking Workshop",
    date: "Oct 2024",
    month: "OCT",
    year: "2024",
    stats: [
      { icon: <Users />, text: "50 Attendees" },
      { icon: <Clock />, text: "3 Hours" },
    ],
    desc: "Hands-on training session covering OWASP Top 10 vulnerabilities, penetration testing methodologies, and responsible disclosure practices.",
    accent: "#7a00ff",
    gradient: "from-cyber-purple to-cyber-red",
    tag: "WORKSHOP",
    highlight: 50,
    highlightLabel: "attendees",
  },
  {
    title: "UST Capture The Flag",
    date: "Jan 2024",
    month: "JAN",
    year: "2024",
    stats: [
      { icon: <Users />, text: "50+ Attendees" },
      { icon: <Clock />, text: "24 Hours" },
    ],
    desc: "Intense 24-hour CTF competition pushing participants to solve advanced web, crypto, and RE challenges.",
    accent: "#0044ff",
    gradient: "from-cyber-blue to-cyber-purple",
    tag: "CTF",
    highlight: 50,
    highlightLabel: "participants",
  },
];

/* ── Animated Counter ── */
function AnimatedCounter({ target, duration = 1.5 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !target) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

/* ── Card variants ── */
const cardVariants = {
  hidden: { opacity: 0, x: -60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 18,
      delay: i * 0.12,
    },
  }),
};

/* ── Summary Stats ── */
const summaryStats = [
  { value: 7, label: "Events Conducted", icon: <Calendar className="w-5 h-5" /> },
  { value: 400, suffix: "+", label: "Students Impacted", icon: <Users className="w-5 h-5" /> },
  { value: 4, label: "CTF Competitions", icon: <Flag className="w-5 h-5" /> },
  { value: 3, label: "Workshops", icon: <Zap className="w-5 h-5" /> },
];

export default function Events() {
  return (
    <section className="py-16 md:py-32 relative z-10 overflow-hidden" id="deployments">
      {/* Background orbs */}
      <div className="bg-orb bg-cyber-purple w-[35rem] h-[35rem] -left-40 top-20 opacity-20" />
      <div className="bg-orb bg-cyber-blue w-[25rem] h-[25rem] right-0 bottom-0 opacity-15" />

      <div className="container mx-auto px-6 max-w-7xl 2xl:max-w-[1600px] relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-cyber-purple mb-6"
          >
            <Zap className="w-4 h-4 xl:w-5 xl:h-5" />
            <span className="font-bold tracking-[0.2em] text-xs xl:text-sm uppercase">
              Event Timeline
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white tracking-tight mb-4">
            Recent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple via-cyber-red to-cyber-blue">
              Deployments
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base xl:text-lg">
            From workshops to inter-college CTFs — a track record of impactful
            cybersecurity events.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 h-px w-40 xl:w-56 bg-gradient-to-r from-transparent via-cyber-purple/60 to-transparent origin-center"
          />
        </motion.div>

        {/* ── Summary Stats Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 xl:gap-8 mb-10 md:mb-16 max-w-2xl lg:max-w-none mx-auto"
        >
          {summaryStats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="liquid-glass rounded-2xl p-3 md:p-5 xl:p-8 text-center group hover:border-cyber-purple/50 hover:shadow-[0_0_30px_rgba(122,0,255,0.3)] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 xl:w-14 xl:h-14 rounded-xl bg-cyber-purple/10 text-cyber-purple mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-xl md:text-3xl xl:text-4xl font-black text-white mb-1">
                <AnimatedCounter target={stat.value} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <div className="text-[10px] md:text-xs xl:text-sm text-gray-500 uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-cyber-purple/50 via-cyber-red/30 to-transparent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {events.map((event, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className={`relative flex items-start mb-12 last:mb-0 ${isLeft
                  ? "md:flex-row flex-row"
                  : "md:flex-row-reverse flex-row"
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-[#0d1117]"
                    style={{ backgroundColor: event.accent, boxShadow: `0 0 15px ${event.accent}`, zIndex: 10 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: idx * 0.12 + 0.2 }}
                  />
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: event.accent }}
                  />
                </div>

                {/* Date label (shown on opposite side on desktop) */}
                <div
                  className={`hidden md:flex w-1/2 ${isLeft ? "justify-end pr-12" : "justify-start pl-12"
                    } items-start pt-4`}
                >
                  <div className="text-right">
                    <span
                      className="text-4xl font-black tracking-tight"
                      style={{ color: event.accent }}
                    >
                      {event.month}
                    </span>
                    <span className="block text-sm text-gray-600 font-mono">
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Event Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${isLeft ? "md:pl-12" : "md:pr-12"
                    } max-w-xl md:max-w-none mx-auto md:mx-0 w-full`}
                >
                  <motion.div
                    whileHover={{
                      y: -6,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="event-card group relative rounded-2xl overflow-hidden"
                  >
                    {/* Top accent bar */}
                    <div
                      className="h-1 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${event.accent}, transparent)`,
                      }}
                    />

                    <div className="p-4 md:p-6 relative">
                      {/* Hover glow */}
                      <div
                        className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                        style={{ backgroundColor: event.accent }}
                      />

                      {/* Tag + Mobile date */}
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider uppercase"
                          style={{
                            backgroundColor: `${event.accent}15`,
                            color: event.accent,
                            border: `1px solid ${event.accent}30`,
                          }}
                        >
                          {event.tag}
                        </span>
                        <span className="md:hidden text-xs text-gray-500 font-mono">
                          {event.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-base md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed mb-5 group-hover:text-gray-300 transition-colors duration-300">
                        {event.desc}
                      </p>

                      {/* Stats row */}
                      <div className="flex flex-wrap items-center gap-4">
                        {event.stats.map((stat, sIdx) => (
                          <div
                            key={sIdx}
                            className="flex items-center gap-2 text-xs text-gray-400 font-medium"
                          >
                            <span className="[&>svg]:w-3.5 [&>svg]:h-3.5 text-gray-500">
                              {stat.icon}
                            </span>
                            {stat.text}
                          </div>
                        ))}

                        {/* Animated counter highlight */}
                        {event.highlight && (
                          <div className="ml-auto flex items-center gap-1.5">
                            <span
                              className="text-2xl font-black"
                              style={{ color: event.accent }}
                            >
                              <AnimatedCounter target={event.highlight} />
                            </span>
                            <span className="text-[10px] text-gray-500 uppercase tracking-wider">
                              {event.highlightLabel}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
