import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
    X,
    Calendar,
    MapPin,
    Users,
    Clock,
    ChevronRight,
    Quote,
    Target,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const modalVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 80, damping: 20 },
    },
    exit: {
        opacity: 0,
        y: 40,
        scale: 0.97,
        transition: { duration: 0.25, ease: "easeIn" },
    },
};

export default function EventDetailModal({ event, isOpen, onClose }) {
    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Close on Escape
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [isOpen, onClose]);

    if (!event) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[200] flex items-start justify-center"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    {/* Backdrop */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative z-10 w-full max-w-4xl mx-4 my-4 md:my-8 max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-4rem)] overflow-y-auto rounded-2xl md:rounded-3xl bg-[#0a0e1a] border border-white/[0.08] shadow-[0_0_80px_rgba(122,0,255,0.15)] custom-scrollbar"
                    >
                        {/* ── Close Button ── */}
                        <button
                            onClick={onClose}
                            className="sticky top-4 right-4 float-right z-50 w-10 h-10 rounded-full liquid-glass flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all mr-4 mt-4"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* ── Hero Banner ── */}
                        <div className="relative w-full h-[250px] md:h-[350px] -mt-14 overflow-hidden">
                            <img
                                src={event.coverImage}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/60 to-transparent" />
                            <div
                                className="absolute inset-0 opacity-20"
                                style={{
                                    background: `linear-gradient(135deg, ${event.accent}30, transparent 60%)`,
                                }}
                            />

                            {/* Title overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                <div className="flex items-center gap-3 mb-3">
                                    <span
                                        className="px-3 py-1.5 rounded-lg text-[10px] md:text-xs font-bold tracking-wider uppercase"
                                        style={{
                                            backgroundColor: `${event.accent}20`,
                                            color: event.accent,
                                            border: `1px solid ${event.accent}40`,
                                        }}
                                    >
                                        {event.tag}
                                    </span>
                                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {event.date}
                                    </span>
                                </div>
                                <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                                    {event.title}
                                </h2>
                            </div>
                        </div>

                        {/* ── Content Body ── */}
                        <div className="px-6 md:px-10 pb-10">
                            {/* Stats Bar */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 -mt-2 mb-10">
                                {event.detailStats.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + i * 0.08 }}
                                        className="liquid-glass rounded-xl p-3 md:p-4 text-center group hover:border-white/15 transition-all"
                                    >
                                        <div
                                            className="text-lg md:text-2xl font-black mb-0.5"
                                            style={{ color: event.accent }}
                                        >
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* About Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="mb-10"
                            >
                                <h3 className="flex items-center gap-2 text-lg md:text-xl font-bold text-white mb-4">
                                    <Sparkles className="w-5 h-5" style={{ color: event.accent }} />
                                    About This Event
                                </h3>
                                <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
                                    {event.longDesc.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Agenda Timeline */}
                            {event.agenda && event.agenda.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mb-10"
                                >
                                    <h3 className="flex items-center gap-2 text-lg md:text-xl font-bold text-white mb-6">
                                        <Clock className="w-5 h-5" style={{ color: event.accent }} />
                                        Event Agenda
                                    </h3>
                                    <div className="relative pl-6 border-l border-white/10">
                                        {event.agenda.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.5 + i * 0.08 }}
                                                className="relative mb-6 last:mb-0 group"
                                            >
                                                {/* Dot */}
                                                <div
                                                    className="absolute -left-[30.5px] top-1.5 w-3 h-3 rounded-full border-2 border-[#0a0e1a] group-hover:scale-125 transition-transform"
                                                    style={{
                                                        backgroundColor: event.accent,
                                                        boxShadow: `0 0 10px ${event.accent}60`,
                                                    }}
                                                />
                                                <span
                                                    className="text-[10px] font-bold uppercase tracking-wider mb-1 block"
                                                    style={{ color: event.accent }}
                                                >
                                                    {item.time}
                                                </span>
                                                <h4 className="text-sm md:text-base font-bold text-white mb-1">
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Key Takeaways */}
                            {event.keyTakeaways && event.keyTakeaways.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mb-10"
                                >
                                    <h3 className="flex items-center gap-2 text-lg md:text-xl font-bold text-white mb-5">
                                        <Target className="w-5 h-5" style={{ color: event.accent }} />
                                        Key Takeaways
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {event.keyTakeaways.map((item, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + i * 0.06 }}
                                                className="flex items-start gap-3 p-4 rounded-xl liquid-glass group hover:border-white/10 transition-all"
                                            >
                                                <CheckCircle2
                                                    className="w-4 h-4 mt-0.5 shrink-0"
                                                    style={{ color: event.accent }}
                                                />
                                                <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                                    {item}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Photo Gallery */}
                            {event.gallery && event.gallery.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                    className="mb-10"
                                >
                                    <h3 className="flex items-center gap-2 text-lg md:text-xl font-bold text-white mb-5">
                                        <Sparkles className="w-5 h-5" style={{ color: event.accent }} />
                                        Gallery
                                    </h3>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                        {event.gallery.map((img, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.7 + i * 0.08 }}
                                                className="relative aspect-video rounded-xl overflow-hidden border border-white/[0.06] group"
                                            >
                                                <img
                                                    src={img}
                                                    alt={`${event.title} - Photo ${i + 1}`}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Speakers */}
                            {event.speakers && event.speakers.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.75 }}
                                    className="mb-10"
                                >
                                    <h3 className="flex items-center gap-2 text-lg md:text-xl font-bold text-white mb-5">
                                        <Users className="w-5 h-5" style={{ color: event.accent }} />
                                        {event.speakers.length === 1 ? "Speaker" : "Speakers"}
                                    </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {event.speakers.map((speaker, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.75 + i * 0.1 }}
                                                className="liquid-glass rounded-xl p-4 flex items-center gap-4 min-w-[200px] group hover:border-white/15 transition-all"
                                            >
                                                <div
                                                    className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-black shrink-0"
                                                    style={{
                                                        backgroundColor: `${event.accent}15`,
                                                        color: event.accent,
                                                    }}
                                                >
                                                    {speaker.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-bold text-white">
                                                        {speaker.name}
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {speaker.role}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Testimonial */}
                            {event.testimonial && (
                                <motion.div
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="relative liquid-glass rounded-2xl p-6 md:p-8 overflow-hidden"
                                >
                                    <div
                                        className="absolute top-0 left-0 w-1 h-full rounded-full"
                                        style={{ backgroundColor: event.accent }}
                                    />
                                    <Quote
                                        className="w-8 h-8 mb-4 opacity-20"
                                        style={{ color: event.accent }}
                                    />
                                    <p className="text-base md:text-lg text-gray-300 leading-relaxed italic mb-4">
                                        &ldquo;{event.testimonial.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                                            style={{
                                                backgroundColor: `${event.accent}20`,
                                                color: event.accent,
                                            }}
                                        >
                                            {event.testimonial.author.charAt(0)}
                                        </div>
                                        <div>
                                            <span className="text-sm font-bold text-white">
                                                {event.testimonial.author}
                                            </span>
                                            <span className="text-xs text-gray-500 block">
                                                {event.testimonial.role}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
