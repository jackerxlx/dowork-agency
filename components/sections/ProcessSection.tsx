"use client";

import { ArrowUpRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, market, challenges and opportunities before deciding what needs to happen next.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn what we learn into a focused strategy, clear positioning, priorities and a practical direction for growth.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "Strategy becomes reality through brand, content, websites, campaigns and digital experiences built around the objective.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We bring the work into the real world through SEO, social, paid media, content and the channels that matter.",
  },
  {
    number: "05",
    title: "Grow",
    description:
      "We measure, learn and optimize continuously so the work gets stronger as your business moves forward.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="dw-process"
      aria-labelledby="dw-process-title"
    >
      <div className="dw-process__container">

        {/* ---------------------------------------------
           TOP
        --------------------------------------------- */}
        <div className="dw-process__top">
          <div className="dw-process__eyebrow">
            <span />
            HOW WE WORK
          </div>

          <div className="dw-process__small-label">
            05 / STEPS
          </div>
        </div>

        {/* ---------------------------------------------
           INTRO
        --------------------------------------------- */}
        <div className="dw-process__intro">

          <h2 id="dw-process-title">
            From idea
            <br />
            to <em>impact.</em>
          </h2>

          <div className="dw-process__intro-copy">
            <p>
              Great work is rarely the result of one big moment. It comes
              from asking better questions, making smarter decisions and
              improving what matters.
            </p>

            <a
              href="#contact"
              className="dw-process__intro-link"
            >
              Start a project
              <span>
                <ArrowUpRight
                  size={17}
                  strokeWidth={2}
                />
              </span>
            </a>
          </div>

        </div>

        {/* ---------------------------------------------
           PROCESS TIMELINE
        --------------------------------------------- */}
        <div className="dw-process__steps">

          {processSteps.map((step, index) => (
            <article
              key={step.number}
              className="dw-process__step"
            >
              <div className="dw-process__step-number">
                {step.number}
              </div>

              <div className="dw-process__step-content">
                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>

              {index < processSteps.length - 1 && (
                <div
                  className="dw-process__step-connector"
                  aria-hidden="true"
                />
              )}
            </article>
          ))}

        </div>

        {/* ---------------------------------------------
           BOTTOM STATEMENT
        --------------------------------------------- */}
        <div className="dw-process__bottom">

          <div>
            <span>OUR PRINCIPLE</span>

            <h3>
              No unnecessary complexity.
              <br />
              Just clear thinking and
              <br />
              meaningful execution.
            </h3>
          </div>

          <a
            href="#contact"
            className="dw-process__bottom-link"
          >
            <span>Let&apos;s work together</span>

            <span>
              <ArrowUpRight
                size={17}
                strokeWidth={2}
              />
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}