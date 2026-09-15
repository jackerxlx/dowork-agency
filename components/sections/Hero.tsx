"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const marketingImageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = marketingImageRef.current;

    if (!element) return;

    let animationFrame = 0;

    const updateParallax = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Keep the movement subtle and premium.
      const progress = Math.min(scrollY / heroHeight, 1);

      const moveY = progress * -42;
      const rotateX = progress * 3;
      const rotateY = progress * -4;
      const scale = 1 + progress * 0.025;

      element.style.transform = `
        translate3d(0, ${moveY}px, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${scale})
      `;

      animationFrame = 0;
    };

    const handleScroll = () => {
      if (animationFrame) return;

      animationFrame = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="dw-hero-final"
      aria-labelledby="dw-hero-title"
    >
      <div className="dw-container dw-hero-final__container">

        {/* GIRL — LEFT */}

        <div
          className="
            dw-hero-final__person
            dw-hero-final__person--girl
          "
          aria-hidden="true"
        >
          <Image
            src="/images/dowork-hero-girl.png"
            alt=""
            width={1000}
            height={1000}
            priority
            className="dw-hero-final__person-image"
          />
        </div>

        {/* CENTER CONTENT */}

        <div className="dw-hero-final__content">
          <h1
            id="dw-hero-title"
            className="dw-hero-final__hidden-title"
          >
            DOWORK Marketing Agency
          </h1>

          <div
            ref={marketingImageRef}
            className="dw-hero-final__marketing-art"
          >
            <Image
              src="/images/dowork-marketing-agency.png"
              alt="DOWORK Marketing Agency"
              width={1920}
              height={1080}
              priority
              className="dw-hero-final__marketing-image"
            />
          </div>

          {/* SINGLE CTA */}

          <a
            href="#contact"
            className="dw-hero-final__cta"
          >
            Start a Project
          </a>
        </div>

        {/* BOY — RIGHT */}

        <div
          className="
            dw-hero-final__person
            dw-hero-final__person--boy
          "
          aria-hidden="true"
        >
          <Image
            src="/images/dowork-hero-boy.png"
            alt=""
            width={1000}
            height={1000}
            priority
            className="dw-hero-final__person-image"
          />
        </div>

      </div>
    </section>
  );
}