import React, { useEffect, useRef } from 'react';

/**
 * Tasteful Abstract AI Visual:
 * Interactive, restrained neural/tensor graph with subtle ambient pulses
 * Optimized for high performance and respects reduced-motion preferences.
 */
export default function AbstractAiVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate node topology (Neural / Tensor matrix nodes)
    const nodeCount = 28;
    const nodes = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.8,
        color: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a855f7' : '#38bdf8',
        pulse: Math.random() * Math.PI * 2
      });
    }

    const maxDistance = 110;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!prefersReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;
          node.pulse += 0.02;

          // Bounce off bounds
          if (node.x < 10 || node.x > width - 10) node.vx *= -1;
          if (node.y < 10 || node.y > height - 10) node.vy *= -1;
        }

        const pulseGlow = Math.sin(node.pulse) * 1.5 + 2.5;

        // Faint glow halo
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + pulseGlow, 0, Math.PI * 2);
        ctx.fillStyle = node.color === '#60a5fa' ? 'rgba(96, 165, 250, 0.12)' : 'rgba(168, 85, 247, 0.12)';
        ctx.fill();

        // Node center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center rounded-2xl overflow-hidden border border-slate-800/80 bg-gradient-to-b from-dark-900/90 to-dark-950/90 shadow-glow-card">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/15 via-transparent to-transparent pointer-events-none" />

      {/* Interactive dynamic canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" aria-hidden="true" />

      {/* Central Abstract Neural Core */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none select-none">
        <div className="relative flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-blue-500/30 bg-dark-900/90 backdrop-blur-md shadow-glow-blue">
          {/* Subtle spinning outer orbit ring */}
          <div className="absolute inset-0 rounded-full border border-violet-500/30 border-dashed animate-pulse-slow" />
          
          {/* Initials Monogram */}
          <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-blue-violet font-mono">
            SS
          </span>

          {/* Orbiting data points */}
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8]" />
          <span className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_8px_#c084fc]" />
        </div>

        {/* Caption */}
        <div className="mt-4 px-3.5 py-1 rounded-full bg-dark-850/80 border border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>AI Architecture &amp; Engineering</span>
        </div>
      </div>
    </div>
  );
}
