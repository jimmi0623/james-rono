import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = ({ particleCount = 25, blur = 100 }) => {
  return (
    <div className="position-absolute w-100 h-100 top-0 start-0 overflow-hidden" style={{ zIndex: 0 }}>
      {/* Neon gradient animation */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0,255,255,0.15), transparent 70%)",
            "radial-gradient(circle at 100% 100%, rgba(255,0,255,0.12), transparent 70%)",
            "radial-gradient(circle at 50% 50%, rgba(0,191,255,0.15), transparent 70%)",
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          filter: `blur(${blur}px)`,
          opacity: 0.5,
        }}
      />

      {/* Floating particles */}
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={i}
          className="position-absolute rounded-circle"
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 80 - 40],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            width: Math.random() * 6 + 4,
            height: Math.random() * 6 + 4,
            background: `radial-gradient(circle, rgba(0,255,255,0.8), transparent)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            zIndex: 0,
            filter: "blur(1px)",
          }}
        />
      ))}

      {/* Subtle rotating particle grid */}
      <motion.div
        className="position-absolute top-50 start-50 translate-middle"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          filter: "blur(3px)",
          opacity: 0.15,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;