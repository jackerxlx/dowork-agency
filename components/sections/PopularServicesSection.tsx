import Image from "next/image";

const services = [
  {
    title: "SEO",
    description: (
      <>
        Get found by people who are already{" "}
        <strong>looking for what you offer.</strong>
      </>
    ),
    image: "/images/dowork-seo.png",
    alt: "SEO and search engine optimization workspace",
    href: "/services/seo/",
  },
  {
    title: "Social Media",
    description: (
      <>
        Stay visible, stay relevant and give people a reason to{" "}
        <strong>remember your brand.</strong>
      </>
    ),
    image: "/images/dowork-social-media.png",
    alt: "Social media marketing workspace",
    href: "/services/social-media-marketing/",
  },
  {
    title: "Performance Marketing",
    description: (
      <>
        Put your budget where it can bring the right{" "}
        <strong>clicks, leads and customers.</strong>
      </>
    ),
    image: "/images/dowork-performance.png",
    alt: "Performance marketing and advertising analytics workspace",
    href: "/services/performance-marketing/",
  },
  {
    title: "Content & Creative",
    description: (
      <>
        Turn your ideas into content people{" "}
        <strong>notice, understand and share.</strong>
      </>
    ),
    image: "/images/dowork-content-creative.png",
    alt: "Content marketing and creative production workspace",
    href: "/services/content-marketing/",
  },
  {
    title: "Web Design & CRO",
    description: (
      <>
        Give visitors a better experience and make it easier for them to{" "}
        <strong>take action.</strong>
      </>
    ),
    image: "/images/dowork-web-cro.png",
    alt: "Web design and conversion optimization workspace",
    href: "/services/web-design-development/",
  },
];

export default function PopularServicesSection() {
  return (
    <section
      className="dw-popular-services"
      id="popular-services"
      aria-labelledby="dw-popular-services-title"
    >
      <div className="dw-popular-services__inner">
        <div className="dw-popular-services__header">
          <div className="dw-popular-services__heading-wrap">
            <h2 id="dw-popular-services-title">
              POPULAR SERVICES
            </h2>

            <div
              className="dw-popular-services__scribble"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 280 30"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 14C55 8 105 12 145 10C190 8 232 12 274 9"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                <path
                  d="M87 23C120 19 157 20 194 21"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="dw-popular-services__grid">
          {services.map((service) => (
            <a
              href={service.href}
              className="dw-popular-service-card"
              key={service.title}
            >
              <div className="dw-popular-service-card__image-wrap">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={900}
                  height={700}
                  className="dw-popular-service-card__image"
                />
              </div>

              <div className="dw-popular-service-card__body">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span
                  className="dw-popular-service-card__line"
                  aria-hidden="true"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}