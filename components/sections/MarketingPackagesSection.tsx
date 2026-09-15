import Image from "next/image";

const packages = [
  {
    number: "01",
    title: "FOUNDATION",
    description: "Build the right digital foundation.",
    image: "/images/dowork-foundation.png",
    alt: "Digital marketing strategy and brand foundation illustration",
  },
  {
    number: "02",
    title: "GROWTH",
    description: "Create consistent digital momentum.",
    image: "/images/dowork-growth.png",
    alt: "Digital marketing growth and analytics illustration",
  },
  {
    number: "03",
    title: "PERFORMANCE",
    description: "Scale what is already working.",
    image: "/images/dowork-performance.png",
    alt: "Performance marketing and conversion illustration",
  },
];

export default function MarketingPackagesSection() {
  return (
    <section
      className="dw-marketing-packages"
      id="packages"
      aria-labelledby="dw-marketing-services-title"
    >
      <div className="dw-marketing-packages__inner">
        <div className="dw-marketing-packages__header">
          <div>
            <div className="dw-marketing-packages__eyebrow">
              DIGITAL MARKETING SERVICES
            </div>

            <div className="dw-marketing-packages__scribble" aria-hidden="true">
              <svg
                viewBox="0 0 260 24"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 13C50 8 94 11 137 9C181 7 222 11 256 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M72 20C107 17 145 17 187 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <a
            href="/services/"
            className="dw-marketing-packages__view"
          >
            View All Services
          </a>
        </div>

        <div className="dw-marketing-packages__grid">
          {packages.map((pkg) => (
            <article
              className="dw-marketing-package"
              key={pkg.number}
            >
              <div className="dw-marketing-package__image-wrap">
                <Image
                  src={pkg.image}
                  alt={pkg.alt}
                  width={900}
                  height={700}
                  className="dw-marketing-package__image"
                />
              </div>

              <div className="dw-marketing-package__content">
                <span className="dw-marketing-package__number">
                  {pkg.number}
                </span>

                <h3>{pkg.title}</h3>

                <p>{pkg.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div
        className="dw-marketing-packages__curve"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 420"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 95
              C150 35 285 60 410 135
              C545 215 640 300 790 310
              C955 322 1035 240 1170 205
              C1275 178 1365 195 1440 238
              L1440 420
              L0 420
              Z
            "
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}