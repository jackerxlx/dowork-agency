import Image from "next/image";

export default function ConsultationSection() {
  return (
    <section
      className="dw-consultation"
      id="consultation"
      aria-labelledby="dw-consultation-title"
    >
      <div className="dw-consultation__inner">
        {/* VISUAL */}
        <div className="dw-consultation__visual">
          <div
            className="dw-consultation__glow"
            aria-hidden="true"
          />

          <Image
            src="/images/dowork-consultation.png"
            alt="DOWORK team discussing digital marketing and business growth"
            width={1000}
            height={800}
            className="dw-consultation__image"
          />
        </div>

        {/* CONTENT */}
        <div className="dw-consultation__content">
          <h2 id="dw-consultation-title">
            Let’s talk about
            <span>your growth.</span>
          </h2>

          <p className="dw-consultation__copy">
            Tell us what you want to improve and where you want your business
            to go next. We’ll understand your needs and suggest the right
            next step for your digital marketing.
          </p>

          <p className="dw-consultation__note">
            No pressure. Just a useful conversation.
          </p>

          <a
            href="/start-a-project/"
            className="dw-consultation__cta"
          >
            Book a FREE Consultation
          </a>
        </div>
      </div>

      {/* BOTTOM ORGANIC CURVE */}
      <div
        className="dw-consultation__bottom-curve"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 355
              C170 355 315 350 470 338
              C650 324 790 294 925 255
              C1070 214 1168 158 1270 105
              C1340 69 1398 42 1440 24
              L1440 360
              L0 360
              Z
            "
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}