"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { pickIcon, SCOPE_HOVER_ICONS } from "../icons/sectionIcons";

const imageVariants = {
  initial: { x: 0, y: 0 },
  top: { y: 25, transition: { type: "spring", duration: 1 } },
  bottom: { y: -25, transition: { type: "spring", duration: 1 } },
  left: { x: 25, transition: { type: "spring", duration: 1 } },
  right: { x: -25, transition: { type: "spring", duration: 1 } },
};

const useHover = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [direction, setDirection] = useState("initial");

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();

    const centerX = left + w / 2;
    const centerY = top + h / 2;

    const xOffset = ev.clientX - centerX;
    const yOffset = ev.clientY - centerY;

    const angleDegrees = Math.atan2(yOffset, xOffset) * (180 / Math.PI);
    const adjustedAngle = angleDegrees < 0 ? angleDegrees + 360 : angleDegrees;

    if (adjustedAngle >= 315 || adjustedAngle < 45) {
      return "right";
    } else if (adjustedAngle >= 45 && adjustedAngle < 135) {
      return "bottom";
    } else if (adjustedAngle >= 135 && adjustedAngle < 225) {
      return "left";
    } else {
      return "top";
    }
  };

  const handleMouseEnter = (event) => {
    if (!event.currentTarget) return;
    setDirection(getDirection(event, event.currentTarget));
  };

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const leftBoundary = containerRect.left + containerRect.width / 2 - 100;
    const rightBoundary = containerRect.right / 2 + 100;

    const clampedX = Math.max(leftBoundary, Math.min(rightBoundary, e.clientX));
    const smoothFactor = 0.1;

    setCursorPosition((prev) => ({
      x: prev.x + (clampedX - prev.x) * smoothFactor,
      y: prev.y + (e.clientY - prev.y) * smoothFactor,
    }));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getLinkHoverHandler = (index) => () => {
    setHoveredIndex(index);
  };

  const translateTopInverse = direction === "top" ? -25 : 0;
  const translateBottomInverse = direction === "bottom" ? 25 : 0;
  const translateLeftInverse = direction === "left" ? -25 : 0;
  const translateRightInverse = direction === "right" ? 25 : 0;

  const style = {
    translateX:
      cursorPosition.x - 300 + translateLeftInverse + translateRightInverse,
    translateY:
      cursorPosition.y - 300 + translateTopInverse + translateBottomInverse,
  };

  const getHeadingClassNames = (index) => {
    return clsx(
      "relative flex items-center justify-start border-b border-border-primary py-5 transition-colors duration-300 md:py-6",
      {
        "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
        "lg:text-black": hoveredIndex === index || hoveredIndex === null,
      },
    );
  };

  const getOverlayClassNames = (index) => {
    return clsx(
      "pointer-events-none fixed inset-0 z-10 ml-[300px] hidden size-[600px] lg:block",
      {
        "opacity-100": hoveredIndex === index,
        "opacity-0": hoveredIndex !== index,
      },
    );
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
    getLinkHoverHandler,
    style,
    direction,
    getHeadingClassNames,
    getOverlayClassNames,
  };
};

export function Cta38({ scope }) {
  const hoverState = useHover();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container" onMouseMove={hoverState.handleMouseMove}>
        <p className="mb-6 font-semibold md:mb-8">{scope.kicker}</p>
        <motion.div
          initial="initial"
          whileHover={hoverState.direction}
          onMouseEnter={hoverState.handleMouseEnter}
          onMouseLeave={hoverState.handleMouseLeave}
        >
          {scope.items.map((item, i) => (
            <a
              key={i}
              href="#"
              onMouseEnter={hoverState.getLinkHoverHandler(i)}
              className={hoverState.getHeadingClassNames(i)}
            >
              <span className="mr-6 font-mono text-md font-semibold text-neutral-400 md:mr-8">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-4xl font-bold md:text-7xl lg:text-8xl">
                {item}
              </h3>
              <motion.div
                className={hoverState.getOverlayClassNames(i)}
                style={hoverState.style}
                variants={imageVariants}
              >
                {(() => {
                  const Icon = pickIcon(SCOPE_HOVER_ICONS, i);
                  return (
                    <div className="flex size-full max-w-md items-center justify-center border border-border-primary bg-neutral-50 p-16">
                      <Icon
                        className="size-32 text-black md:size-40"
                        strokeWidth={1}
                      />
                    </div>
                  );
                })()}
              </motion.div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
