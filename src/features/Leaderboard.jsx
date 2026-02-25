import { motion, useInView } from "framer-motion";
import { Trophy, User, Crown, Medal, Star, Flame, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const masterAgents = [
  { rank: 1, name: "Amrutha Ajish Achuthan", score: 2550 },
  { rank: 2, name: "Akhila Sunesh", score: 2310 },
  { rank: 3, name: "Melon__YT", score: 2265 },
  { rank: 4, name: "goalazy", score: 1735 },
  { rank: 5, name: "Athul Jose", score: 1665 },
  { rank: 6, name: "Artemis", score: 1665 },
  { rank: 7, name: "Ash", score: 1640 },
  { rank: 8, name: "Esm", score: 1315 },
  { rank: 9, name: "Dhi_", score: 1190 },
  { rank: 10, name: "Emj", score: 1170 },
];

const maxScore = masterAgents[0].score;

/* ── Animated Score Counter ── */
function ScoreCounter({ target, duration = 1.2 }) {
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

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

/* ── Rank styling config ── */
const rankConfig = {
  1: {
    bg: "from-yellow-500/20 to-yellow-600/5",
    border: "border-yellow-500/30",
    glow: "shadow-[0_0_30px_rgba(234,179,8,0.15)]",
    text: "text-yellow-400",
    icon: <Crown className="w-5 h-5 text-yellow-400" />,
    barColor: "from-yellow-400 to-amber-500",
    label: "CHAMPION",
  },
  2: {
    bg: "from-gray-300/15 to-gray-400/5",
    border: "border-gray-400/25",
    glow: "shadow-[0_0_20px_rgba(156,163,175,0.1)]",
    text: "text-gray-300",
    icon: <Medal className="w-5 h-5 text-gray-300" />,
    barColor: "from-gray-300 to-gray-400",
    label: "2ND PLACE",
  },
  3: {
    bg: "from-orange-500/15 to-orange-600/5",
    border: "border-orange-500/25",
    glow: "shadow-[0_0_20px_rgba(249,115,22,0.1)]",
    text: "text-orange-400",
    icon: <Medal className="w-5 h-5 text-orange-400" />,
    barColor: "from-orange-400 to-orange-500",
    label: "3RD PLACE",
  },
};

const defaultRank = {
  bg: "",
  border: "border-transparent",
  glow: "",
  text: "text-gray-500",
  icon: null,
  barColor: "from-cyber-purple/60 to-cyber-blue/60",
  label: null,
};

function getRankStyle(rank) {
  return rankConfig[rank] || defaultRank;
}

/* ── Row variants ── */
const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay: i * 0.06,
    },
  }),
};

const barVariants = {
  hidden: { scaleX: 0 },
  visible: (i) => ({
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: i * 0.06 + 0.3,
    },
  }),
};

export default function Leaderboard() {
  return (
    <section className="py-16 md:py-32 relative z-10" id="leaderboard">
      <div className="bg-orb bg-cyber-blue w-[30rem] h-[30rem] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full liquid-glass text-yellow-500 mb-6"
          >
            <Trophy className="w-5 h-5" />
            <span className="font-bold tracking-[0.2em] text-xs uppercase">
              Hall of Fame
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">
            Master Agent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500">
              Standings
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Live individual rankings from Forbidden Capture CTF. Ties broken by
            earliest flag submission.
          </p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent origin-center"
          />
        </motion.div>

        {/* ── Podium (Top 3) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-3 gap-3 md:gap-6 mb-12 max-w-3xl mx-auto items-end"
        >
          {/* 2nd place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.4 }}
            className="podium-card group order-1"
          >
            <div className="liquid-glass rounded-2xl p-4 md:p-6 text-center relative overflow-hidden border border-gray-400/15 hover:border-gray-400/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-300/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-gray-300/20 to-gray-500/10 flex items-center justify-center mb-3 border border-gray-400/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl md:text-2xl font-black text-gray-300">2</span>
                </div>
                <Medal className="w-5 h-5 text-gray-400 mx-auto mb-2" />
                <h4 className="text-sm md:text-base font-bold text-white truncate">{masterAgents[1].name}</h4>
                <div className="text-lg md:text-2xl font-black text-gray-300 mt-1">
                  <ScoreCounter target={masterAgents[1].score} />
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">points</span>
              </div>
            </div>
            <div className="h-16 md:h-24 bg-gradient-to-t from-gray-400/10 to-transparent rounded-b-2xl mt-[-1px] border-x border-b border-gray-400/10" />
          </motion.div>

          {/* 1st place */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3 }}
            className="podium-card group order-2"
          >
            <div className="liquid-glass rounded-2xl p-4 md:p-6 text-center relative overflow-hidden border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-500 shadow-[0_0_40px_rgba(234,179,8,0.08)]">
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/8 to-transparent" />
              {/* Shimmer line */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-full left-0 w-full h-full bg-gradient-to-b from-transparent via-yellow-500/5 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
              </div>
              <div className="relative z-10">
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Crown className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-2 drop-shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                </motion.div>
                <div className="w-14 h-14 md:w-20 md:h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-400/25 to-amber-600/10 flex items-center justify-center mb-3 border border-yellow-500/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(234,179,8,0.15)]">
                  <span className="text-2xl md:text-3xl font-black text-yellow-400">1</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white truncate">{masterAgents[0].name}</h4>
                <div className="text-xl md:text-3xl font-black text-yellow-400 mt-1 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">
                  <ScoreCounter target={masterAgents[0].score} />
                </div>
                <span className="text-[10px] text-yellow-600 uppercase tracking-wider font-bold">Champion</span>
              </div>
            </div>
            <div className="h-24 md:h-36 bg-gradient-to-t from-yellow-500/10 to-transparent rounded-b-2xl mt-[-1px] border-x border-b border-yellow-500/15" />
          </motion.div>

          {/* 3rd place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.5 }}
            className="podium-card group order-3"
          >
            <div className="liquid-glass rounded-2xl p-4 md:p-6 text-center relative overflow-hidden border border-orange-500/15 hover:border-orange-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto rounded-full bg-gradient-to-br from-orange-400/20 to-orange-600/10 flex items-center justify-center mb-3 border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-xl md:text-2xl font-black text-orange-400">3</span>
                </div>
                <Medal className="w-5 h-5 text-orange-400 mx-auto mb-2" />
                <h4 className="text-sm md:text-base font-bold text-white truncate">{masterAgents[2].name}</h4>
                <div className="text-lg md:text-2xl font-black text-orange-400 mt-1">
                  <ScoreCounter target={masterAgents[2].score} />
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">points</span>
              </div>
            </div>
            <div className="h-12 md:h-16 bg-gradient-to-t from-orange-500/10 to-transparent rounded-b-2xl mt-[-1px] border-x border-b border-orange-500/10" />
          </motion.div>
        </motion.div>

        {/* ── Full Leaderboard Table ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="leaderboard-table rounded-2xl overflow-hidden"
        >
          {/* Table header */}
          <div className="flex items-center p-4 md:p-5 bg-white/[0.03] border-b border-white/5 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <div className="w-12 text-center shrink-0">#</div>
            <div className="w-[220px] shrink-0 pl-11">Agent</div>
            <div className="flex-1 text-right">Score</div>
          </div>

          {/* Table rows */}
          <div className="divide-y divide-white/[0.03]">
            {masterAgents.map((agent, idx) => {
              const style = getRankStyle(agent.rank);
              const barWidth = (agent.score / maxScore) * 100;

              return (
                <motion.div
                  key={idx}
                  custom={idx}
                  variants={rowVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`flex items-center p-4 md:p-5 group hover:bg-white/[0.03] transition-all duration-300 relative ${agent.rank <= 3
                    ? `bg-gradient-to-r ${style.bg} ${style.glow}`
                    : ""
                    }`}
                >
                  {/* Rank */}
                  <div className="w-12 text-center shrink-0">
                    {agent.rank <= 3 ? (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="inline-flex"
                      >
                        {style.icon}
                      </motion.div>
                    ) : (
                      <span className={`font-bold text-sm ${style.text}`}>
                        {agent.rank}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <div className="w-[220px] shrink-0 flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-300 shrink-0 ${agent.rank <= 3
                        ? `${style.border} ${style.text} bg-white/5`
                        : "border-white/10 text-gray-500 bg-white/[0.02] group-hover:border-cyber-purple/30"
                        }`}
                    >
                      {agent.name.charAt(0)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span
                        className={`font-semibold truncate ${agent.rank <= 3 ? "text-white" : "text-gray-300"
                          }`}
                      >
                        {agent.name}
                      </span>
                      {style.label && (
                        <span
                          className={`text-[9px] font-bold tracking-wider ${style.text} opacity-70`}
                        >
                          {style.label}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Score bar */}
                  <div className="flex-1 flex items-center gap-3">
                    <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        custom={idx}
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${style.barColor}`}
                        style={{
                          width: `${barWidth}%`,
                          transformOrigin: "left",
                        }}
                      />
                    </div>
                    <span
                      className={`font-mono font-bold text-sm whitespace-nowrap ${agent.rank <= 3 ? style.text : "text-gray-400"
                        }`}
                    >
                      <ScoreCounter target={agent.score} duration={1} />
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
