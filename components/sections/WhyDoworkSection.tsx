import {
  BarChart3,
  Compass,
  Lightbulb,
  MessageCircle,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Compass,
    title: "Bespoke Digital Strategy",
    description:
      "We take the time to understand your business, your customers and your goals before we build a marketing strategy. Every plan is shaped around what your business actually needs, rather than a generic marketing package.",
  },
  {
    icon: Users,
    title: "An Experienced Digital Marketing Team",
    description:
      "You get a team that brings together SEO, content, social media, paid advertising and web expertise. Everyone works towards the same goal, so your digital marketing feels connected instead of scattered.",
  },
  {
    icon: Lightbulb,
    title: "Quality Work That Builds Trust",
    description:
      "Your brand represents your business, so every piece of work needs to feel right. We focus on clear messaging, strong creative work and a consistent digital presence that gives customers a reason to trust you.",
  },
  {
    icon: BarChart3,
    title: "Marketing Built Around Performance",
    description:
      "Good marketing should do more than generate clicks and impressions. We track the numbers that matter, learn from what is working and improve campaigns to help your business attract better leads and stronger opportunities.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication, Reliable Support",
    description:
      "You should always know what is happening with your marketing. We keep communication straightforward, share honest recommendations and stay involved from the first strategy call through every stage of the work.",
  },
];

export default function WhyChooseDoworkSection() {
  return (
    <section
      className="dw-why-choose"
      id="why-dowork"
      aria-labelledby="dw-why-choose-title"
    >
      {/* ORGANIC WHITE TOP CURVE */}
      <div
        className="dw-why-choose__top-curve"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 360"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 0
              C130 10 240 42 355 88
              C500 145 640 220 795 255
              C965 294 1110 315 1235 325
              C1325 332 1390 338 1440 344
              L1440 0
              Z
            "
            fill="#ffffff"
          />
        </svg>
      </div>

      <div className="dw-why-choose__inner">
        {/* HEADER */}

        <div className="dw-why-choose__header">
          <h2 id="dw-why-choose-title">
            Why choose <span>DOWORK?</span>
          </h2>

          <div
            className="dw-why-choose__scribble"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 280 32"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 17C55 8 100 15 144 12C190 9 234 15 275 11"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <path
                d="M74 25C112 21 153 21 198 23"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p>
            There are plenty of reasons to choose DOWORK. We have kept the
            list simple and focused on what actually matters to your business.
          </p>
        </div>

        {/* REASONS */}

        <div className="dw-why-choose__grid">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <article
                className={[
                  "dw-why-choose__item",
                  index === 3
                    ? "dw-why-choose__item--fourth"
                    : "",
                  index === 4
                    ? "dw-why-choose__item--fifth"
                    : "",
                ].join(" ")}
                key={reason.title}
              >
                <div className="dw-why-choose__icon">
                  <Icon
                    size={30}
                    strokeWidth={1.7}
                  />
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>
              </article>
            );
          })}
        </div>

        {/* CLOSING STATEMENT */}

        <div className="dw-why-choose__closing">
          <p>
            Clear thinking.
            <span> Better marketing.</span>
            <strong> Stronger business.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}