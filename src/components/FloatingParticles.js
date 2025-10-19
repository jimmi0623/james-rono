import React, { useEffect, useRef } from "react";

/**
 * FloatingParticles
 * Reusable animated particle background
 * Props:
 * - color (default: "#00bfff")
 * - count (default: 60)
 * - height (default: "100%")
 * - opacity (default: 0.8)
 */
const FloatingParticles = ({
  color = "#00bfff",
  count = 60,
  height = "100%",
  opacity = 0.8,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.3,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.6 + 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${p.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = color;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      requestAnimationFrame(draw);
    };
    draw();

    return () => window.removeEventListener("resize", resize);
  }, [color, count]);

  return (
    <canvas
      ref={canvasRef}
      className="position-absolute top-0 start-0 w-100"
      style={{
        height,
        zIndex: 0,
        opacity,
        pointerEvents: "none",
      }}
    />
  );
};

export default FloatingParticles;
