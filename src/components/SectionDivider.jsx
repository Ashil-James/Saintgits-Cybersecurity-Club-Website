import { motion } from "framer-motion";

export default function SectionDivider({ variant = "default" }) {
    if (variant === "glow") {
        return (
            <div className="relative py-8 flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-cyber-purple/40 to-transparent"
                />
                {/* Center dot */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="absolute w-2 h-2 rounded-full bg-cyber-purple/60 shadow-[0_0_15px_rgba(122,0,255,0.4)]"
                />
            </div>
        );
    }

    if (variant === "dots") {
        return (
            <div className="relative py-8 flex items-center justify-center gap-3">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.3 }}
                        className="w-1 h-1 rounded-full bg-white/20"
                    />
                ))}
            </div>
        );
    }

    if (variant === "code") {
        return (
            <div className="relative py-6 flex items-center justify-center overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                >
                    <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-white/10" />
                    <span className="text-[10px] font-mono text-gray-700 tracking-wider">
                        &lt;/&gt;
                    </span>
                    <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-white/10" />
                </motion.div>
            </div>
        );
    }

    /* default */
    return (
        <div className="relative py-6 flex items-center justify-center">
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-xs h-[1px] bg-gradient-to-r from-transparent via-white/8 to-transparent"
            />
        </div>
    );
}
