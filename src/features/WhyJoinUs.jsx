import { motion } from "framer-motion";
import {
    Rocket,
    GraduationCap,
    Handshake,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

const reasons = [
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Learn by Doing",
        points: [
            "Weekly hands-on challenges across all skill levels",
            "CTF competitions that test real attack & defense skills",
            "Peer-led workshops on industry tools and techniques",
        ],
        accent: "cyber-purple",
        gradient: "from-purple-500/20 to-purple-900/5",
        iconBg: "bg-purple-500/10 text-purple-400",
        borderAccent: "group-hover:border-purple-500/30",
    },
    {
        icon: <Handshake className="w-6 h-6" />,
        title: "Build Your Network",
        points: [
            "Community of 100+ members who share your passion",
            "Connections to industry professionals and mentors",
            "Collaborate on projects with talented peers",
        ],
        accent: "cyber-blue",
        gradient: "from-blue-500/20 to-blue-900/5",
        iconBg: "bg-blue-500/10 text-blue-400",
        borderAccent: "group-hover:border-blue-500/30",
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: "Launch Your Career",
        points: [
            "Access to internship and job opportunities",
            "Portfolio-worthy projects and competition wins",
            "Skills that recruiters actively look for",
        ],
        accent: "cyber-red",
        gradient: "from-red-500/20 to-red-900/5",
        iconBg: "bg-red-500/10 text-red-400",
        borderAccent: "group-hover:border-red-500/30",
    },
];

const journeySteps = [
    { step: "01", title: "Join", desc: "Sign up and join our Discord community" },
    {
        step: "02",
        title: "Learn",
        desc: "Attend workshops and start solving challenges",
    },
    {
        step: "03",
        title: "Compete",
        desc: "Participate in CTFs and climb the leaderboard",
    },
    {
        step: "04",
        title: "Excel",
        desc: "Build expertise, lead sessions, and mentor others",
    },
];

export default function WhyJoinUs() {
    return (
        <section className="py-16 md:py-28 relative z-10 overflow-hidden">
            <div className="bg-orb bg-cyber-blue w-[35rem] h-[35rem] -left-20 bottom-0" />

            <div className="container mx-auto px-6 relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full liquid-glass text-cyber-blue mb-6">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                            Why Us
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
                        Why{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-blue via-cyber-purple to-cyber-red">
                            Join the Club?
                        </span>
                    </h2>
                    <p className="text-gray-500 max-w-lg mx-auto text-sm">
                        We don&apos;t just teach cybersecurity — we build the complete
                        professional.
                    </p>
                </motion.div>

                {/* Reason cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20">
                    {reasons.map((r, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12 }}
                            className={`liquid-glass rounded-2xl p-5 md:p-7 group cursor-default relative overflow-hidden transition-all duration-500 ${r.borderAccent}`}
                        >
                            {/* Hover gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            <div className="relative z-10">
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border border-white/5 ${r.iconBg} group-hover:scale-110 transition-transform duration-300`}
                                >
                                    {r.icon}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-5">{r.title}</h3>

                                <ul className="space-y-3">
                                    {r.points.map((point, j) => (
                                        <motion.li
                                            key={j}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.12 + j * 0.06 }}
                                            className="flex items-start gap-2.5"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-green-500/60 mt-0.5 shrink-0 group-hover:text-green-400 transition-colors" />
                                            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                                {point}
                                            </span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Your Journey Path ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h3 className="text-center text-sm font-bold tracking-[0.2em] uppercase text-gray-600 mb-10">
                        Your Journey With Us
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
                        {/* Connecting line (desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-cyber-purple via-cyber-blue to-cyber-red opacity-30" />

                        {journeySteps.map((s, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.12 }}
                                className="text-center group relative"
                            >
                                {/* Step number */}
                                <div className="relative mx-auto mb-4 w-14 h-14 rounded-full liquid-glass flex items-center justify-center border border-white/10 group-hover:border-cyber-purple/40 transition-all duration-300">
                                    <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-br from-cyber-purple to-cyber-blue">
                                        {s.step}
                                    </span>
                                    {/* Pulse ring on hover */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border border-cyber-purple/20"
                                        initial={{ scale: 1, opacity: 0 }}
                                        whileHover={{
                                            scale: 1.3,
                                            opacity: [0, 0.5, 0],
                                        }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    />
                                </div>

                                <h4 className="text-base font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-purple group-hover:to-cyber-blue transition-all">
                                    {s.title}
                                </h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {s.desc}
                                </p>

                                {/* Arrow between steps (desktop) */}
                                {i < journeySteps.length - 1 && (
                                    <div className="hidden md:block absolute top-[28px] -right-2 text-gray-700">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
