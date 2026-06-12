import React, { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

const GAP = 16; // distance between dot centers
const DOT_RADIUS = 0.5; // 1px circle
const INFLUENCE = 100; // mouse influence radius
const PUSH_STRENGTH = 5; // how hard dots get pushed away
const SPRING = 0.07; // pull back toward origin
const DAMPING = 0.88; // velocity decay (gravity-like easing)
const REST_EPSILON = 0.05;

/**
 * Interactive dot-grid background rendered on canvas.
 * Dots near the cursor are pushed away and spring back smoothly.
 * Only displaced dots are simulated/redrawn each frame, so the grid
 * stays cheap even with tens of thousands of dots.
 */
export function DotGrid({ color = "#a8a8b2", className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let dots = [];
    let cols = 0;
    let rows = 0;
    let staticLayer = null; // pre-rendered grid of resting dots
    const active = new Set(); // indices of dots currently in motion
    const mouse = { x: -9999, y: -9999 };
    let visible = false;

    // tiny dots get anti-aliased into near-invisibility by arc(); draw them
    // as pixel-grid-aligned squares instead so they stay fully opaque
    // (indistinguishable from circles at this size)
    function drawDot(target, x, y) {
      if (DOT_RADIUS <= 0.75) {
        const size = Math.max(1, Math.round(DOT_RADIUS * 2));
        target.fillRect(Math.round(x - DOT_RADIUS), Math.round(y - DOT_RADIUS), size, size);
      } else {
        target.beginPath();
        target.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
        target.fill();
      }
    }

    function buildGrid() {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;

      cols = Math.ceil(width / GAP);
      rows = Math.ceil(height / GAP);
      dots = new Array(cols * rows);
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const ox = c * GAP + GAP / 2;
          const oy = r * GAP + GAP / 2;
          dots[r * cols + c] = { ox, oy, x: ox, y: oy, vx: 0, vy: 0 };
        }
      }
      active.clear();

      staticLayer = document.createElement("canvas");
      staticLayer.width = canvas.width;
      staticLayer.height = canvas.height;
      const sctx = staticLayer.getContext("2d");
      sctx.scale(dpr, dpr);
      sctx.fillStyle = color;
      for (const dot of dots) {
        drawDot(sctx, dot.ox, dot.oy);
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(staticLayer, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function activateNearMouse() {
      const minC = Math.max(0, Math.floor((mouse.x - INFLUENCE) / GAP));
      const maxC = Math.min(cols - 1, Math.ceil((mouse.x + INFLUENCE) / GAP));
      const minR = Math.max(0, Math.floor((mouse.y - INFLUENCE) / GAP));
      const maxR = Math.min(rows - 1, Math.ceil((mouse.y + INFLUENCE) / GAP));
      for (let r = minR; r <= maxR; r += 1) {
        for (let c = minC; c <= maxC; c += 1) {
          active.add(r * cols + c);
        }
      }
    }

    function tick() {
      if (!visible || active.size === 0) return;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(staticLayer, 0, 0);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = color;
      const clear = GAP / 2;

      for (const i of active) {
        const dot = dots[i];

        const dx = dot.x - mouse.x;
        const dy = dot.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < INFLUENCE && dist > 0.001) {
          const force = (1 - dist / INFLUENCE) ** 2 * PUSH_STRENGTH;
          dot.vx += (dx / dist) * force;
          dot.vy += (dy / dist) * force;
        }

        dot.vx += (dot.ox - dot.x) * SPRING;
        dot.vy += (dot.oy - dot.y) * SPRING;
        dot.vx *= DAMPING;
        dot.vy *= DAMPING;
        dot.x += dot.vx;
        dot.y += dot.vy;

        const atRest =
          Math.abs(dot.x - dot.ox) < REST_EPSILON &&
          Math.abs(dot.y - dot.oy) < REST_EPSILON &&
          Math.abs(dot.vx) < REST_EPSILON &&
          Math.abs(dot.vy) < REST_EPSILON;

        if (atRest) {
          dot.x = dot.ox;
          dot.y = dot.oy;
          dot.vx = 0;
          dot.vy = 0;
          active.delete(i);
          continue;
        }

        // hide the resting dot baked into the static layer, draw the live one
        ctx.clearRect(dot.ox - clear, dot.oy - clear, GAP, GAP);
        drawDot(ctx, dot.x, dot.y);
      }
    }

    function onPointerMove(event) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      activateNearMouse();
    }

    function onPointerLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }

    buildGrid();

    const resizeObserver = new ResizeObserver(buildGrid);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
