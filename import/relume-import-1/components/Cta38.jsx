"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { useState } from "react";

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

export function Cta38() {
  const hoverState = useHover();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container" onMouseMove={hoverState.handleMouseMove}>
        <p className="mb-6 font-semibold md:mb-8">Zasady</p>
        <motion.div
          initial="initial"
          whileHover={hoverState.direction}
          onMouseEnter={hoverState.handleMouseEnter}
          onMouseLeave={hoverState.handleMouseLeave}
        >
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(0)}
            className={hoverState.getHeadingClassNames(0)}
          >
            <p className="mr-6 whitespace-nowrap text-xl font-bold md:mr-8 md:text-2xl">
              18 sektorów objętych regulacją
            </p>
            <h3 className="text-5xl font-bold md:text-9xl lg:text-10xl">
              18 sektorów objętych regulacją
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(0)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                alt="Relume placeholder image 1"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(1)}
            className={hoverState.getHeadingClassNames(1)}
          >
            <p className="mr-6 whitespace-nowrap text-xl font-bold md:mr-8 md:text-2xl">
              Próg 50 pracowników lub 10 mln EUR obrotu
            </p>
            <h3 className="text-5xl font-bold md:text-9xl lg:text-10xl">
              Próg 50 pracowników lub 10 mln EUR obrotu
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(1)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                alt="Relume placeholder image 2"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(2)}
            className={hoverState.getHeadingClassNames(2)}
          >
            <p className="mr-6 whitespace-nowrap text-xl font-bold md:mr-8 md:text-2xl">
              Nowelizacja KSC od lutego 2026
            </p>
            <h3 className="text-5xl font-bold md:text-9xl lg:text-10xl">
              Nowelizacja KSC od lutego 2026
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(2)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                alt="Relume placeholder image 3"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(3)}
            className={hoverState.getHeadingClassNames(3)}
          >
            <p className="mr-6 whitespace-nowrap text-xl font-bold md:mr-8 md:text-2xl">
              Wiele firm nie wie jeszcze, co się zmienia
            </p>
            <h3 className="text-5xl font-bold md:text-9xl lg:text-10xl">
              Sprawdzisz w dwie minuty
            </h3>
            <motion.div
              className={hoverState.getOverlayClassNames(3)}
              style={hoverState.style}
            >
              <motion.img
                className="size-full max-w-md"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                alt="Relume placeholder image 4"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
