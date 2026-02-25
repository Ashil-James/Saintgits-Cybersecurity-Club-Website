import { motion } from "framer-motion";

const tools = [
    "Burp Suite",
    "Wireshark",
    "Metasploit",
    "Nmap",
    "Ghidra",
    "John the Ripper",
    "Hashcat",
    "Gobuster",
    "SQLMap",
    "Hydra",
    "Aircrack-ng",
    "Volatility",
    "Autopsy",
    "CyberChef",
    "Kali Linux",
    "Docker",
    "Python",
    "Bash",
];

const platforms = [
    "HackTheBox",
    "TryHackMe",
    "CTFtime",
    "PicoCTF",
    "OverTheWire",
    "CryptoHack",
    "PortSwigger Academy",
    "VulnHub",
];

function MarqueeRow({ items, reverse = false, speed = 30 }) {
    const duplicated = [...items, ...items];

    return (
        <div className="relative overflow-hidden py-2">
            <motion.div
                className="flex gap-4 whitespace-nowrap"
                animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                {duplicated.map((item, i) => (
                    <div
                        key={i}
                        className="inline-flex items-center gap-2 px-3 md:px-5 py-2 md:py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyber-purple/30 hover:bg-white/[0.06] transition-all duration-300 group cursor-default"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple/50 group-hover:bg-cyber-purple group-hover:shadow-[0_0_8px_rgba(122,0,255,0.5)] transition-all" />
                        <span className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                            {item}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function TechMarquee() {
    return (
        <section className="py-16 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-xl mx-auto"
                >
                    <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-gray-600 mb-1">
                        Tools & Platforms We Train On
                    </h3>
                    <p className="text-xs text-gray-700">
                        Industry-standard arsenal powering our members
                    </p>
                </motion.div>
            </div>

            {/* Gradient overlays for fade effect */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-space-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-space-black to-transparent z-10 pointer-events-none" />

                <MarqueeRow items={tools} speed={35} />
                <MarqueeRow items={platforms} reverse speed={25} />
            </div>
        </section>
    );
}
