import { motion } from "framer-motion";
import {
  Trophy,
  BookOpen,
  Users,
  Briefcase,
  ArrowRight,
  Wrench,
  Network,
  Calendar,
} from "lucide-react";

const services = [
  {
    icon: <Calendar className="w-7 h-7" />,
    title: "Weekly Challenges",
    desc: "Solve curated cybersecurity challenges every week. Practice real-world scenarios, build problem-solving skills, and compete on our live leaderboard.",
    accent: "from-red-500 to-orange-500",
    accentBg:
      "bg-red-500/10 text-red-400 group-hover:bg-red-500/20 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    number: "01",
  },
  {
    icon: <Trophy className="w-7 h-7" />,
    title: "CTF Competitions",
    desc: "Participate in national and international Capture The Flag competitions. Learn offensive and defensive techniques in a competitive, team-driven environment.",
    accent: "from-purple-500 to-pink-500",
    accentBg:
      "bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    number: "02",
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: "Workshops & Awareness",
    desc: "Hands-on workshops, awareness sessions, and expert talks designed to bridge the gap between academic knowledge and industry-ready skills.",
    accent: "from-blue-500 to-cyan-500",
    accentBg:
      "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
    number: "03",
  },
  {
    icon: <Briefcase className="w-7 h-7" />,
    title: "Career & Mentorship",
    desc: "Access internship opportunities, get connected with industry professionals, receive project guidance, and build the network you need to launch your career.",
    accent: "from-emerald-500 to-green-500",
    accentBg:
      "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    number: "04",
  },
];

export default function Services() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="md:w-2/3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-cyber-blue mb-6">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                  What We Offer
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Your Pathway to{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-blue to-cyber-purple">
                  Cybersecurity Excellence
                </span>
              </h2>
              <p className="text-gray-500 max-w-xl text-sm">
                Everything you need to transform from a curious learner into a
                skilled cybersecurity professional — all under one roof.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="liquid-glass liquid-glass-hover rounded-2xl p-7 group cursor-pointer relative overflow-hidden flex flex-col"
            >
              {/* Big number watermark */}
              <span className="absolute -top-2 -right-1 text-6xl font-black text-white/[0.02] group-hover:text-white/[0.05] transition-colors select-none">
                {service.number}
              </span>

              {/* Gradient line at top */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 border border-white/5 transition-all duration-500 ${service.accentBg}`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed flex-1">
                {service.desc}
              </p>

              {/* Learn more link */}
              <div className="mt-5 flex items-center gap-1.5 text-xs text-gray-600 group-hover:text-white/60 transition-colors">
                <span className="font-semibold uppercase tracking-wider">
                  Learn more
                </span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
