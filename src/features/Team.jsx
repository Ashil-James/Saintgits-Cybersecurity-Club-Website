import { motion, useMotionValue, useTransform } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { useRef } from "react";

const boardMembers = [
  {
    name: "Justin Mathew",
    role: "Teacher In Charge",
    desc: "Faculty at Department of Computer Science",
    image: "/Justinsir_img.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Alphin D Thomas",
    role: "Chief Technical Officer",
    desc: "National CTF Semi-Finalist | 3rd Year Computer Science Undergrad",
    image: "/Alphin_img.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Jerit Reji",
    role: "Research & Content",
    desc: "FOSS Enthusiast | 3rd Year Computer Science Undergrad",
    image: "/Jerit_img.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Ashil James",
    role: "CTF Team Captain",
    desc: "Full Stack Dev | Competitive Programmer | CyberSecurity Intern @ One Team Solutions",
    image: "/Ashil_img.JPG",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Aaron Bobby Jose",
    role: "Tool Specialist / Lab Coordinator",
    desc: "Cybersecurity Enthusiast | Web Exploitation & Reverse Engineering",
    image: "/Aaron_img.png",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Diya Susan Mathew",
    role: "Web & Infrastructure Admin",
    desc: "Backend Developer Intern at Lauren | Frontend Developer at Tessat",
    image: "/Diya_img.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Mathew Tito",
    role: "Community & Events",
    desc: "3rd Year Computer Science Undergrad",
    image: "/Mathew_img.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Angela Mary Thomas",
    role: "Red Team Captain",
    desc: "Ethical Hacking Enthusiast | Competitive Programmer | Interned @ OneTeam Solutions",
    image: "/Angela_img.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Sujith S",
    role: "Blue Team Captain",
    desc: "Backend Developer | Experienced in Java & Cybersecurity Tools",
    image: "/Sujith_img.JPG",
    social: { linkedin: "#", github: "#" },
  },
];

/* ── Animation Variants ── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92, rotateX: 8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      mass: 0.8,
    },
  },
};

/* ── Tilt Card Component ── */
function TiltCard({ children, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-6, 6]);

  function handleMouse(e) {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ y: -12, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="team-card group relative rounded-3xl p-5 md:p-8 text-center flex flex-col h-full cursor-none overflow-hidden"
    >
      {children}
    </motion.div>
  );
}

export default function Team() {
  return (
    <section className="py-16 md:py-32 relative z-10" id="team">
      {/* Background glowing orbs */}
      <div className="bg-orb bg-cyber-red w-[40rem] h-[40rem] left-1/4 top-1/4" />
      <div className="bg-orb bg-cyber-purple w-[30rem] h-[30rem] right-1/4 bottom-1/4 opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* ── Section Title ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10 md:mb-20 text-center"
        >
          {/* Club Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl liquid-glass mb-6 overflow-hidden p-2"
          >
            <img
              src="/cyber_logopng.png"
              alt="Cybersecurity Club Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Command{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red via-cyber-purple to-cyber-blue">
              Center
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-gray-500 text-sm tracking-[0.3em] uppercase"
          >
            The hackers behind the firewall
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="mx-auto mt-6 h-px w-40 bg-gradient-to-r from-transparent via-cyber-red/60 to-transparent origin-center"
          />
        </motion.div>

        {/* ── Card Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto"
          style={{ perspective: 1000 }}
        >
          {boardMembers.map((member, index) => (
            <TiltCard key={index} index={index}>
              {/* Animated gradient border overlay */}
              <div
                className="absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, #ff0055, #7a00ff, #0044ff, #ff0055)",
                  backgroundSize: "300% 300%",
                  animation: "borderGlow 4s ease infinite",
                }}
              >
                <div className="w-full h-full rounded-3xl bg-[#0d1117]" />
              </div>

              {/* Card inner content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Hover glow blobs */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyber-red/0 group-hover:bg-cyber-red/8 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-cyber-blue/0 group-hover:bg-cyber-blue/8 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

                {/* ── Profile Picture ── */}
                <div className="relative w-36 h-36 mx-auto mb-6 shrink-0 group">
                  {/* Spinning gradient ring */}
                  <motion.div
                    className="absolute inset-[-5px] rounded-full opacity-50 group-hover:opacity-100 blur-[3px] transition-opacity duration-500"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #ff0055, #7a00ff, #0044ff, #7a00ff, #ff0055)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Pulsing outer glow on hover */}
                  <div className="absolute inset-[-12px] rounded-full bg-cyber-purple/0 group-hover:bg-cyber-purple/10 blur-xl transition-all duration-700 pointer-events-none" />

                  {/* Image container — liquid glass style */}
                  <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<span class="text-4xl font-black bg-gradient-to-br from-cyber-red to-cyber-purple bg-clip-text text-transparent absolute inset-0 flex items-center justify-center">${member.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>

                  {/* Online indicator */}
                  <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#0d1117] shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                    <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-40" />
                  </div>
                </div>

                {/* ── Name ── */}
                <motion.h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-200 group-hover:to-white transition-all duration-500">
                  {member.name}
                </motion.h3>

                {/* ── Role Badge — liquid glass pill ── */}
                <div className="inline-flex items-center justify-center mx-auto mb-4">
                  <span className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] liquid-glass text-cyber-purple group-hover:shadow-[0_0_16px_rgba(122,0,255,0.25)] transition-all duration-500">
                    {member.role}
                  </span>
                </div>

                {/* ── Description ── */}
                <p className="text-sm text-gray-400 leading-relaxed mb-8 grow group-hover:text-gray-300 transition-colors duration-500">
                  {member.desc}
                </p>

                {/* ── Social Links ── */}
                <div className="flex justify-center gap-3 mt-auto">
                  {[
                    {
                      href: member.social.linkedin,
                      icon: Linkedin,
                      hoverBorder: "#0044ff",
                      hoverShadow: "rgba(0,68,255,0.4)",
                      hoverColor: "#0044ff",
                    },
                    {
                      href: member.social.github,
                      icon: Github,
                      hoverBorder: "#7a00ff",
                      hoverShadow: "rgba(122,0,255,0.4)",
                      hoverColor: "#7a00ff",
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{
                        scale: 1.2,
                        boxShadow: `0 0 20px ${social.hoverShadow}`,
                        borderColor: social.hoverBorder,
                        color: social.hoverColor,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="w-10 h-10 rounded-xl liquid-glass flex items-center justify-center text-gray-500 transition-colors duration-300"
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
