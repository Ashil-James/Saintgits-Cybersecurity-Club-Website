import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Users, Trophy } from "lucide-react";

/* ── Animated counter ── */
function Counter({ target, suffix = "", duration = 2.5 }) {
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
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

const impactStats = [
    {
        icon: <Users className="w-5 h-5" />,
        value: 100,
        suffix: "+",
        label: "Members",
        color: "text-cyber-purple",
    },
    {
        icon: <Trophy className="w-5 h-5" />,
        value: 4,
        suffix: "",
        label: "CTF Wins",
        color: "text-yellow-400",
    },
    {
        icon: <Zap className="w-5 h-5" />,
        value: 10,
        suffix: "+",
        label: "Workshops",
        color: "text-cyber-blue",
    },
    {
        icon: <Shield className="w-5 h-5" />,
        value: 7,
        suffix: "+",
        label: "Events",
        color: "text-cyber-red",
    },
];

export default function JoinCTA() {
    return (
        <section className="py-16 md:py-32 relative z-10 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-purple/5 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-purple/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-cyber-purple mb-8"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-400">
                            Open for Recruitment
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight">
                        Ready to{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyber-red via-cyber-purple to-cyber-blue animate-gradient-x">
                            Level Up?
                        </span>
                    </h2>

                    <p className="text-gray-400 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
                        Join a community of 100+ driven students who are building real
                        cybersecurity skills, competing globally, and forging connections
                        that last a lifetime.
                    </p>

                    {/* Impact stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
                    >
                        {impactStats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="liquid-glass rounded-xl p-4 group hover:border-cyber-purple/20 transition-all"
                            >
                                <div
                                    className={`${stat.color} mb-2 flex justify-center opacity-60 group-hover:opacity-100 transition-opacity`}
                                >
                                    {stat.icon}
                                </div>
                                <div className="text-2xl font-black text-white">
                                    <Counter target={stat.value} suffix={stat.suffix} />
                                </div>
                                <div className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="https://discord.gg/asjFQKE55p"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden w-full sm:w-auto px-10 py-4 rounded-xl font-bold text-white bg-linear-to-r from-cyber-purple to-cyber-blue hover:scale-105 transition-all shadow-[0_0_40px_rgba(122,0,255,0.4)] group inline-flex items-center justify-center gap-3"
                        >
                            <span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
                            <span className="relative flex items-center gap-2">
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                                Join our Discord
                            </span>
                        </a>

                        <a
                            href="/deployments"
                            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white/70 hover:text-white liquid-glass hover:border-white/20 transition-all inline-flex items-center justify-center gap-2 group"
                        >
                            View Our Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Trust text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 }}
                        className="text-xs text-gray-700 mt-8"
                    >
                        Free to join • Open to all departments • No experience required
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
