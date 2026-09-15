"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const follower = useRef<HTMLDivElement>(null);

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      "(pointer: fine)"
    );

    setEnabled(media.matches);

    if (!media.matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    const move = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (cursor.current) {
        cursor.current.style.transform =
          `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.12;
      currentY += (mouseY - currentY) * 0.12;

      if (follower.current) {
        follower.current.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);

    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener(
        "mousemove",
        move
      );

      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={cursor}
        className="custom-cursor-dot"
      />

      <div
        ref={follower}
        className="custom-cursor-follower"
      />
    </>
  );
}