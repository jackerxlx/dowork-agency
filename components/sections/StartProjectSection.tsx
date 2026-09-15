import { ArrowUpRight } from "lucide-react";

export default function StartProjectSection() {
  return (
    <section className="dw-start-project" id="start-project">
      <div className="dw-start-project-orb dw-start-project-orb-one" />
      <div className="dw-start-project-orb dw-start-project-orb-two" />

      <div className="dw-start-project-inner">
        <div className="dw-start-project-eyebrow">START A PROJECT</div>

        <h2>
          Have something
          <span>worth building?</span>
        </h2>

        <p className="dw-start-project-copy">
          Tell us where you are, where you want to go and what needs to change.
          We'll help turn the opportunity into a clear plan.
        </p>

        <a href="/start-a-project/" className="dw-start-project-button">
          Start a Project
          <ArrowUpRight size={21} strokeWidth={1.8} />
        </a>

        <div className="dw-start-project-bottom">
          <span>READY WHEN YOU ARE</span>

          <p>
            Strategy, creative, technology and growth — brought together around
            your business.
          </p>
        </div>
      </div>
    </section>
  );
}