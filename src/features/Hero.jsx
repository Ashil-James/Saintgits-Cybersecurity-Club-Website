import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── Animated typing text ── */
function TypeWriter({ text, delay = 0, speed = 60 }) {
  const [displayed, setDisplayed] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [isInView, text, delay, speed]);

  return (
    <span ref={ref}>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-[3px] h-[1em] bg-cyber-purple ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

/* ── Animated counter ── */
function Counter({ target, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

/* ── Floating particles ── */
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
    color:
      i % 3 === 0
        ? "bg-cyber-red"
        : i % 3 === 1
          ? "bg-cyber-purple"
          : "bg-cyber-blue",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color} opacity-30`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -80, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ── Hero Stats ── */
const heroStats = [
  { value: 100, suffix: "+", label: "Active Members" },
  { value: 7, suffix: "+", label: "Events Hosted" },
  { value: 4, suffix: "", label: "CTF Competitions" },
  { value: 10, suffix: "+", label: "Workshops Conducted" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-space-black">
      {/* ── Background Effects ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyber-purple/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyber-blue/8 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-cyber-red/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="perspective-grid pointer-events-none z-0" />
      <Particles />

      {/* ── Floating Logo Orb ── */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[25%] hidden lg:flex items-center justify-center w-64 h-64 rounded-full opacity-70"
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-cyber-purple/20"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-4 rounded-full border border-cyber-blue/15"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0, 0.2] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <div className="relative w-40 h-40 rounded-3xl liquid-glass border-t-cyber-red/30 border-b-cyber-blue/30 flex items-center justify-center overflow-hidden p-4 shadow-[0_0_60px_rgba(122,0,255,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/5 via-transparent to-cyber-blue/5" />
          <img
            src="/cyber_logopng.png"
            alt="Cybersecurity Club Logo"
            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,0,85,0.3)]"
          />
        </div>
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-cyber-red shadow-[0_0_10px_#ff0055]"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: "circle(120px)", offsetDistance: "0%" }}
        />
        <motion.div
          className="absolute w-1.5 h-1.5 rounded-full bg-cyber-blue shadow-[0_0_10px_#0044ff]"
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          style={{ offsetPath: "circle(100px)", offsetDistance: "45%" }}
        />
      </motion.div>

      {/* ── Main Content ── */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight text-white drop-shadow-2xl">
            <span
              className="glitch relative inline-block"
              data-text="Learn. Hack."
            >
              Learn. Hack.
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-purple via-cyber-blue to-cyber-red animate-gradient-x">
              Secure the Future.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The premier student-led cybersecurity community at Saintgits — a
            platform for 100+ members to learn, grow, and excel in the world
            of cybersecurity through hands-on CTFs, workshops, and
            industry mentorship.
          </p>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://discord.gg/asjFQKE55p"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-linear-to-r from-cyber-blue to-cyber-purple hover:scale-105 transition-all shadow-[0_0_30px_rgba(122,0,255,0.5)] group cursor-none inline-flex items-center justify-center"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12" />
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join our Discord
              </span>
            </a>

            <a
              href="#deployments"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white/80 hover:text-white liquid-glass hover:border-white/20 transition-all inline-flex items-center justify-center gap-2 group"
            >
              View Events
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </div>

          {/* ── Stats Ticker ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 group-hover:text-gray-400 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-600">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1">
          <motion.div
            className="w-1 h-2 rounded-full bg-cyber-purple"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
