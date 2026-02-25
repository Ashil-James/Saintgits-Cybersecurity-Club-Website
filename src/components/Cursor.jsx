import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointerFine, setIsPointerFine] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerFine(mediaQuery.matches);

    const handlePointerChange = (e) => setIsPointerFine(e.matches);
    mediaQuery.addEventListener("change", handlePointerChange);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      mediaQuery.removeEventListener("change", handlePointerChange);
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!isPointerFine) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyber-red rounded-full pointer-events-none z-[100] shadow-[0_0_10px_#ff0055]"
        animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyber-blue rounded-full pointer-events-none z-[99] shadow-[0_0_15px_rgba(0,68,255,0.4)]"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      />
    </>
  );
}
