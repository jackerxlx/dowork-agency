"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type InnerPageHeroProps = {
  eyebrow?: string;
  title: string;
  accent: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
};

export default function InnerPageHero({
  eyebrow = "DOWORK DIGITAL MARKETING AGENCY",
  title,
  accent,
  description,
  ctaText = "Start a Project",
  ctaHref = "/start-a-project/",
}: InnerPageHeroProps) {
  return (
    <section
      className="dw-inner-hero"
      aria-labelledby="dw-inner-hero-title"
    >
      <div className="dw-inner-hero__scene">

        {/* GIRL — LEFT */}
        <div
          className="dw-inner-hero__person dw-inner-hero__person--girl"
          aria-hidden="true"
        >
          <Image
            src="/images/dowork-hero-girl.png"
            alt=""
            width={1000}
            height={1000}
            priority
            className="dw-inner-hero__person-image"
          />
        </div>

        {/* CENTER */}
        <div className="dw-inner-hero__content">

          <div className="dw-inner-hero__eyebrow">
            {eyebrow}
          </div>

          <h1
            id="dw-inner-hero-title"
            className="dw-inner-hero__title"
          >
            <span>{title}</span>
            <em>{accent}</em>
          </h1>

          <p className="dw-inner-hero__description">
            {description}
          </p>

          <a
            href={ctaHref}
            className="dw-inner-hero__cta"
          >
            {ctaText}
            <ArrowUpRight
              size={17}
              strokeWidth={1.8}
            />
          </a>

        </div>

        {/* BOY — RIGHT */}
        <div
          className="dw-inner-hero__person dw-inner-hero__person--boy"
          aria-hidden="true"
        >
          <Image
            src="/images/dowork-hero-boy.png"
            alt=""
            width={1000}
            height={1000}
            priority
            className="dw-inner-hero__person-image"
          />
        </div>
      </div>

      {/* ORGANIC BOTTOM */}
      <div
        className="dw-inner-hero__bottom-shape"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 82
              C65 38 125 42 188 72
              C215 85 238 91 265 82
              L325 42
              L385 100
              L445 48
              L510 112
              L575 53
              L640 120
              L705 58
              L770 116
              L835 48
              L900 108
              L970 56
              L1040 118
              L1110 44
              L1180 96
              L1245 58
              C1275 48 1297 58 1322 75
              C1360 102 1400 110 1440 82
              L1440 220
              L0 220
              Z
            "
            fill="#f9e0e7"
          />
        </svg>
      </div>
    </section>
  );
}