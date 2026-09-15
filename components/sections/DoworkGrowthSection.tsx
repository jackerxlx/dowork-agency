import Image from "next/image";

export default function DoworkGrowthSection() {
  return (
    <section
      className="dw-growth-section"
      id="growth"
      aria-labelledby="dw-growth-title"
    >
      <div className="dw-growth-section__inner">
        <div className="dw-growth-section__content">
          <h2 id="dw-growth-title">
            We make digital marketing
            <span>work for your business.</span>
          </h2>

          <div className="dw-growth-section__accent">
            Clear strategy. Better reach. Real growth.
          </div>

          <p>
            Every business is different. DOWORK brings SEO, social media,
            content and performance marketing together to help businesses
            reach the right people, build a stronger online presence and
            create better opportunities.
          </p>

          <a
            href="/services/"
            className="dw-growth-section__cta"
          >
            Explore Our Services
          </a>
        </div>

        <div className="dw-growth-section__visual">
          <div className="dw-growth-section__visual-glow" />

          <Image
            src="/images/dowork-growth-team.png"
            alt="DOWORK digital marketing team working on strategy, SEO, social media and performance marketing"
            width={1100}
            height={900}
            className="dw-growth-section__image"
          />
        </div>
      </div>
    </section>
  );
}