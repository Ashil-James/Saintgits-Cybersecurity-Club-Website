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
import EventDetailModal from "./EventDetailModal";

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
    desc: "A cybercrime awareness and investigation session conducted by Kerala Police Academy, handled by instructor Mobin K Eldo. Covered real-world case studies, important cyber laws, fraud prevention techniques, and how to protect yourself from digital threats.",
    accent: "#3b82f6",
    gradient: "from-blue-400 to-blue-600",
    tag: "WORKSHOP",
    highlight: 100,
    highlightLabel: "attendees",
    coverImage: "/events/cybercrime_awareness.png",
    detailStats: [
      { value: "100+", label: "Students" },
      { value: "3hrs", label: "Duration" },
      { value: "1", label: "Expert Speaker" },
      { value: "5+", label: "Case Studies" },
    ],
    longDesc: [
      "The Cybercrime Awareness & Investigation session was a landmark event organized in collaboration with the Kerala Police Academy, running from 10:00 AM to 1:00 PM. This session brought real-world cybercrime investigation expertise directly to our campus, giving students an unprecedented look into how law enforcement tackles digital crime.",
      "Instructor Mobin K Eldo from the Kerala Police Academy covered a wide range of topics including numerous real-world case studies, important cyber laws and their implications, and practical guidance on how to protect oneself from online frauds and scams. Students learned about the legal framework surrounding cybercrime in India and how to identify and avoid common digital threats.",
      "The session also covered social engineering tactics, UPI and banking fraud prevention, phishing awareness, and the procedures for reporting cybercrime incidents. Students left with a deeper understanding of both the legal and practical aspects of staying safe in the digital world.",
    ],
    agenda: [
      { time: "10:00 AM", title: "Inauguration & Introduction", desc: "Welcome address and overview of cybercrime landscape in India" },
      { time: "10:30 AM", title: "Cyber Laws & Legal Framework", desc: "Key cyber laws, IT Act provisions, and legal consequences of cybercrime" },
      { time: "11:15 AM", title: "Real-World Case Studies", desc: "In-depth analysis of real cybercrime cases investigated by Kerala Police" },
      { time: "12:00 PM", title: "Fraud Prevention & Self-Protection", desc: "How to identify and protect yourself from online frauds, phishing, and scams" },
      { time: "12:45 PM", title: "Q&A & Closing", desc: "Interactive session with the instructor and certificate distribution" },
    ],
    keyTakeaways: [
      "Understanding of Indian cybercrime laws (IT Act 2000, IPC sections)",
      "Real-world cybercrime case studies and investigation insights",
      "How to protect yourself from online frauds, phishing, and scams",
      "Social engineering attack recognition and prevention",
      "UPI and banking fraud awareness and safety measures",
      "Reporting procedures for cybercrime incidents",
    ],
    speakers: [
      { name: "Mobin K Eldo", role: "Instructor, Kerala Police Academy" },
    ],
    gallery: ["/events/cybercrime_awareness.png"],
    testimonial: {
      quote: "This session completely changed my perspective on cybersecurity. Learning from actual law enforcement officers about real cases was incredibly eye-opening.",
      author: "Workshop Participant",
      role: "3rd Year CS Student",
    },
  },
  {
    title: "Pegasus CTF",
    date: "Jan 2026",
    month: "JAN",
    year: "2026",
    stats: [
      { icon: <Users />, text: "90+ Participants" },
      { icon: <Flag />, text: "External CTF" },
      { icon: <Trophy />, text: "Multi-College Event" },
    ],
    desc: "An intense overnight external Capture The Flag competition running from 5 PM to 8 AM the next morning, organized by the Cybersecurity Club, bringing together 90+ participants from multiple colleges for an epic battle of wits in web exploitation, cryptography, and forensics.",
    accent: "#ff0055",
    gradient: "from-cyber-red to-yellow-500",
    tag: "CTF",
    highlight: 90,
    highlightLabel: "participants",
    coverImage: "/events/Pegasus_Winner_1.jpeg",
    detailStats: [
      { value: "90+", label: "Participants" },
      { value: "15hrs", label: "Duration" },
      { value: "25+", label: "Challenges" },
      { value: "10+", label: "Colleges" },
    ],
    longDesc: [
      "Pegasus CTF was an ambitious overnight inter-college Capture The Flag competition, running from 5:00 PM to 8:00 AM the next morning. With 90+ participants, it brought together the brightest cybersecurity minds from across Kerala and put our club on the map as a serious force in the competitive cybersecurity community.",
      "The competition featured 25+ challenges across five categories: Web Exploitation, Binary Exploitation, Cryptography, Digital Forensics, and OSINT. Each challenge was handcrafted by our club's CTF team to test both fundamental knowledge and creative problem-solving ability.",
      "Teams competed in a Jeopardy-style format with a dynamic scoring system — challenges became worth fewer points as more teams solved them, rewarding speed and skill equally. The overnight format tested not just technical skills but also endurance and team strategy. The event concluded with a dramatic awards ceremony and networking session.",
    ],
    agenda: [
      { time: "4:30 PM", title: "Registration & Team Setup", desc: "90+ participants verified credentials and set up their environments" },
      { time: "5:00 PM", title: "CTF Begins", desc: "All challenges unlocked simultaneously across 5 categories" },
      { time: "10:00 PM", title: "Mid-Event Hints", desc: "Partial hints released for unsolved challenges" },
      { time: "12:00 AM", title: "Midnight Push", desc: "Teams push through the night with bonus challenges released" },
      { time: "7:00 AM", title: "Final Hour Sprint", desc: "Last-minute solves and scoreboard freeze" },
      { time: "8:00 AM", title: "Awards & Networking", desc: "Winners announced, prizes distributed, and post-event discussion" },
    ],
    keyTakeaways: [
      "Advanced web exploitation techniques (XSS, SQLi, SSRF)",
      "Binary analysis and reverse engineering fundamentals",
      "Cryptographic algorithm weaknesses and attacks",
      "Digital forensics and memory analysis",
      "Team coordination under competitive pressure",
      "Cross-college networking and community building",
    ],
    speakers: [
      { name: "Alphin D Thomas", role: "Challenge Author & CTO" },
      { name: "Ashil James", role: "CTF Team Captain & Infrastructure" },
    ],
    gallery: ["/events/Pegasus_Winner_1.jpeg", "/events/Pegasus_Winner_2.jpeg"],
    testimonial: {
      quote: "The challenge quality was on par with national-level CTFs. Pegasus CTF proved that student-organized events can be just as impactful as corporate ones.",
      author: "Team Captain",
      role: "Competing College",
    },
  },
  {
    title: "Forbidden Capture CTF",
    date: "Oct 2025",
    month: "OCT",
    year: "2025",
    stats: [
      { icon: <Users />, text: "90+ Participants" },
      { icon: <Trophy />, text: "Internal CTF" },
    ],
    desc: "An internal Capture The Flag competition running from 9 AM to 4 PM, where 90+ participants across 20 teams competed in an action-packed day of web security, reverse engineering, and cryptography challenges.",
    accent: "#7a00ff",
    gradient: "from-cyber-purple to-cyber-red",
    tag: "CTF",
    highlight: 90,
    highlightLabel: "participants",
    coverImage: "/events/ForbiddenCapture_Pic1.jpg",
    detailStats: [
      { value: "20", label: "Teams" },
      { value: "90+", label: "Participants" },
      { value: "15", label: "Challenges" },
      { value: "7hrs", label: "Duration" },
    ],
    longDesc: [
      "Forbidden Capture was our flagship internal CTF, running from 9:00 AM to 4:00 PM. With 90+ participants across 20 teams, it was designed to identify and nurture cybersecurity talent within the college, making it the largest internal competition in the club's history.",
      "The challenges were carefully designed to have a progressive difficulty curve — from beginner-friendly tasks that taught fundamentals, to expert-level problems that challenged even our most experienced members. Categories included Web Exploitation, Reverse Engineering, Cryptography, and Steganography.",
      "The event served as a talent pipeline for our competitive CTF team, with top performers being invited to represent the club in national and international competitions.",
    ],
    agenda: [
      { time: "8:30 AM", title: "Team Registration", desc: "90+ students formed 20 teams" },
      { time: "8:45 AM", title: "Rules & Platform Briefing", desc: "Introduction to the CTF platform and challenge categories" },
      { time: "9:00 AM", title: "Competition Start", desc: "15 challenges released across 4 categories with dynamic scoring" },
      { time: "12:30 PM", title: "Mid-Event Checkpoint", desc: "Standings update and hints released for unsolved challenges" },
      { time: "3:30 PM", title: "Scoreboard Freeze", desc: "Final scoreboard frozen for last 30 minutes" },
      { time: "4:00 PM", title: "Results & Awards", desc: "Final standings revealed and prizes awarded" },
    ],
    keyTakeaways: [
      "Hands-on experience with web application vulnerabilities",
      "Reverse engineering of compiled binaries",
      "Cryptographic attack methodologies",
      "Steganography detection and extraction",
      "Time-pressured problem solving and team collaboration",
    ],
    speakers: [
      { name: "Alphin D Thomas", role: "Event Organizer & CTO" },
      { name: "Angela Mary Thomas", role: "Red Team Captain" },
    ],
    gallery: ["/events/ForbiddenCapture_Pic1.jpg", "/events/ForbbidenCapture_Winner.jpg"],
    testimonial: {
      quote: "Forbidden Capture was my first CTF and it completely got me hooked on cybersecurity. The challenges were tough but rewarding.",
      author: "First-time Participant",
      role: "2nd Year CS Student",
    },
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
    coverImage: "/events/VulnerabilityExploitationWorkshop-1.jpg",
    detailStats: [
      { value: "70", label: "Attendees" },
      { value: "2.5hrs", label: "Duration" },
      { value: "3", label: "Live Demos" },
      { value: "1", label: "Lab Session" },
    ],
    longDesc: [
      "This high-impact workshop gave students a visceral understanding of how software vulnerabilities are discovered and exploited in real-world scenarios. The session was led by Aaron Bobby Jose, who demonstrated the full attack chain from reconnaissance to exploitation.",
      "The centerpiece of the workshop was a live demonstration of CVE exploitation on a Windows 7 machine using Metasploit. Students watched in real-time as Aaron gained remote access, escalated privileges, and demonstrated data exfiltration — all while explaining the underlying vulnerability and how defenders should patch it.",
      "The workshop also covered responsible disclosure practices, the ethics of vulnerability research, and career paths in offensive security. Participants left with a deeper understanding of why patching and security hygiene matter.",
    ],
    agenda: [
      { time: "10:00 AM", title: "Vulnerability Landscape Overview", desc: "Understanding CVEs, CVSS scores, and the vulnerability lifecycle" },
      { time: "10:45 AM", title: "Reconnaissance & Scanning", desc: "Using Nmap and other tools to identify vulnerable systems" },
      { time: "11:30 AM", title: "Live Exploitation Demo", desc: "Real-time Windows 7 exploitation using Metasploit framework" },
      { time: "12:15 PM", title: "Post-Exploitation & Defense", desc: "Privilege escalation, persistence, and how to defend against these attacks" },
    ],
    keyTakeaways: [
      "Understanding the CVE database and vulnerability scoring",
      "Network reconnaissance and service enumeration",
      "Metasploit framework fundamentals",
      "Windows exploitation techniques and post-exploitation",
      "Responsible disclosure and ethical considerations",
      "Importance of patch management and security updates",
    ],
    speakers: [
      { name: "Aaron Bobby Jose", role: "Tool Specialist & Lab Coordinator" },
    ],
    gallery: ["/events/VulnerabilityExploitationWorkshop-1.jpg", "/events/VulnerabilityWorkshop-2.jpg", "/events/VulnerabilityExpolitationWorkshop-3.jpg"],
    testimonial: {
      quote: "Watching a machine get hacked live in front of you is both terrifying and fascinating. This workshop made cybersecurity real for me.",
      author: "Workshop Attendee",
      role: "2nd Year CS Student",
    },
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
    coverImage: "/events/ey_ctf.png",
    detailStats: [
      { value: "60+", label: "Participants" },
      { value: "24hrs", label: "Duration" },
      { value: "20+", label: "Challenges" },
      { value: "3", label: "Winners" },
    ],
    longDesc: [
      "The EY Capture The Flag was a landmark collaboration between our Cybersecurity Club and Ernst & Young (EY), one of the Big Four consulting firms. This 24-hour marathon CTF was designed to identify exceptional cybersecurity talent, with the ultimate prize — internship opportunities at EY's cybersecurity division.",
      "The competition pushed participants to their limits with challenges spanning web application security, binary exploitation, advanced cryptography, and network forensics. The 24-hour format tested not just technical skills but also endurance, strategy, and team dynamics.",
      "Top-performing teams were offered direct internship interviews with EY's cybersecurity consulting practice, making this one of the highest-stakes student competitions in Kerala. The event set a new standard for industry-academia collaboration in cybersecurity education.",
    ],
    agenda: [
      { time: "Day 1 - 10:00 AM", title: "Kickoff & EY Introduction", desc: "EY representatives introduced their cybersecurity practice and the competition format" },
      { time: "Day 1 - 11:00 AM", title: "Competition Begins", desc: "All 20+ challenges unlocked across web, crypto, RE, and forensics" },
      { time: "Day 1 - 6:00 PM", title: "Mid-Event Check-in", desc: "Difficulty scaling and bonus challenges released" },
      { time: "Day 2 - 10:00 AM", title: "Final Scoreboard & Awards", desc: "Winners announced and EY internship offers extended to top 3 teams" },
    ],
    keyTakeaways: [
      "Industry-grade web security assessment techniques",
      "Advanced cryptographic analysis and code-breaking",
      "Network packet analysis and traffic forensics",
      "Real-world application of cybersecurity skills under pressure",
      "Direct exposure to corporate cybersecurity career paths",
      "Understanding of EY's cybersecurity consulting methodology",
    ],
    speakers: [
      { name: "EY Cybersecurity Team", role: "Event Sponsors & Mentors" },
      { name: "Alphin D Thomas", role: "Club CTO & Co-organizer" },
    ],
    gallery: ["/events/ey_ctf.png"],
    testimonial: {
      quote: "Getting an internship offer from EY through a college CTF was surreal. This event proved that competitive hacking can directly lead to career opportunities.",
      author: "CTF Winner",
      role: "3rd Year CS Student",
    },
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
    coverImage: "/events/ethical_hacking.png",
    detailStats: [
      { value: "50", label: "Attendees" },
      { value: "3hrs", label: "Duration" },
      { value: "10", label: "OWASP Vulns" },
      { value: "5", label: "Lab Exercises" },
    ],
    longDesc: [
      "This foundational workshop was designed as a comprehensive introduction to ethical hacking and penetration testing. It covered the full OWASP Top 10 vulnerability list with practical demonstrations and hands-on lab exercises.",
      "Attendees worked through real vulnerable web applications using industry-standard tools like Burp Suite and OWASP ZAP. Each vulnerability was demonstrated with a live exploit followed by a guided lab exercise where students could practice the technique themselves.",
      "The workshop emphasized responsible disclosure practices — participants learned not just how to find vulnerabilities, but the ethical framework for reporting them. This session sparked many students' interest in cybersecurity and led to a significant increase in club membership.",
    ],
    agenda: [
      { time: "2:00 PM", title: "Introduction to Ethical Hacking", desc: "Overview of penetration testing methodology and legal framework" },
      { time: "2:30 PM", title: "OWASP Top 10 Walkthrough", desc: "Detailed explanation of each vulnerability with real-world examples" },
      { time: "3:30 PM", title: "Hands-on Lab Session", desc: "Students practiced finding and exploiting vulnerabilities in a controlled environment" },
      { time: "4:30 PM", title: "Responsible Disclosure & Careers", desc: "Ethics of vulnerability research and career opportunities in ethical hacking" },
    ],
    keyTakeaways: [
      "Complete understanding of OWASP Top 10 vulnerabilities",
      "Practical use of Burp Suite and OWASP ZAP",
      "SQL Injection, XSS, and CSRF exploitation techniques",
      "Penetration testing methodology and reporting",
      "Responsible disclosure best practices",
    ],
    speakers: [
      { name: "Alphin D Thomas", role: "CTO, Cybersecurity Club" },
    ],
    gallery: ["/events/ethical_hacking.png"],
    testimonial: {
      quote: "This workshop was my entry point into cybersecurity. The hands-on approach made complex concepts feel accessible and exciting.",
      author: "New Club Member",
      role: "2nd Year CS Student",
    },
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
    coverImage: "/events/ust_ctf.png",
    detailStats: [
      { value: "50+", label: "Participants" },
      { value: "24hrs", label: "Duration" },
      { value: "15+", label: "Challenges" },
      { value: "Top 3", label: "Rewarded" },
    ],
    longDesc: [
      "The UST CTF was organized in collaboration with UST Global, challenging participants with 24 hours of intense problem-solving across multiple cybersecurity domains. This was the club's first industry-partnership event and set the foundation for future collaborations.",
      "The challenge set featured progressively harder problems that tested participants' abilities in web exploitation, reverse engineering, cryptography, and OSINT. UST's cybersecurity team contributed several challenges based on real scenarios they'd encountered in their professional work.",
      "The competition fostered a culture of overnight hacking sessions, mentorship between senior and junior members, and established the club's reputation as a serious competitive force in the regional cybersecurity community.",
    ],
    agenda: [
      { time: "Day 1 - 10:00 AM", title: "Opening Ceremony", desc: "UST representatives introduced the competition and their cybersecurity practice" },
      { time: "Day 1 - 11:00 AM", title: "CTF Begins", desc: "Challenges released across web, crypto, RE, and OSINT categories" },
      { time: "Day 1 - 8:00 PM", title: "Overnight Hacking", desc: "Teams pushed through the night with mentor support available" },
      { time: "Day 2 - 10:00 AM", title: "Awards & Closing", desc: "Final standings, prize distribution, and feedback session" },
    ],
    keyTakeaways: [
      "Advanced web exploitation and API security testing",
      "Binary reverse engineering with Ghidra and radare2",
      "Cryptographic attack implementation",
      "OSINT techniques and information gathering",
      "24-hour endurance and team strategy",
      "Industry exposure through UST Global partnership",
    ],
    speakers: [
      { name: "UST Cybersecurity Team", role: "Event Partner & Challenge Authors" },
    ],
    gallery: ["/events/ust_ctf.png"],
    testimonial: {
      quote: "24 hours of pure hacking with industry-grade challenges — UST CTF pushed our skills to a whole new level and showed us what professional cybersecurity looks like.",
      author: "Participating Team Lead",
      role: "3rd Year CS Student",
    },
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
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <section className="py-16 md:py-32 relative z-10 overflow-hidden" id="deployments">
      {/* Background orbs */}
      <div className="bg-orb bg-cyber-purple w-[20rem] md:w-[35rem] h-[20rem] md:h-[35rem] -left-40 top-20 opacity-20" />
      <div className="bg-orb bg-cyber-blue w-[15rem] md:w-[25rem] h-[15rem] md:h-[25rem] right-0 bottom-0 opacity-15" />

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
                    onClick={() => setSelectedEvent(event)}
                    className="event-card group relative rounded-2xl overflow-hidden cursor-pointer"
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

                      {/* View Details hint */}
                      <div className="mt-4 pt-4 border-t border-white/[0.05] flex items-center justify-between">
                        <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
                          Click to view full details
                        </span>
                        <motion.span
                          className="text-xs font-bold uppercase tracking-wider"
                          style={{ color: event.accent }}
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      <EventDetailModal
        event={selectedEvent}
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </section>
  );
}
