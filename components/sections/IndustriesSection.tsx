"use client";

import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    number: "01",
    title: "Real Estate",
    description:
      "Build stronger visibility, sharper positioning and a digital presence that turns attention into qualified enquiries.",
    tags: ["Brand Strategy", "Lead Generation", "Performance"],
  },
  {
    number: "02",
    title: "E-commerce",
    description:
      "Create a connected growth system across brand, content, acquisition and conversion.",
    tags: ["Growth Strategy", "Paid Media", "Conversion"],
  },
  {
    number: "03",
    title: "Education",
    description:
      "Make your institution easier to discover, understand and choose with thoughtful digital marketing.",
    tags: ["SEO", "Content", "Digital Experience"],
  },
  {
    number: "04",
    title: "Healthcare",
    description:
      "Build trust-first digital experiences that communicate expertise while making discovery easier for patients and audiences.",
    tags: ["Branding", "Content", "SEO"],
  },
  {
    number: "05",
    title: "Professional Services",
    description:
      "Turn expertise into a differentiated digital brand that creates credibility and consistent business opportunities.",
    tags: ["Positioning", "Web", "Lead Generation"],
  },
  {
    number: "06",
    title: "Hospitality",
    description:
      "Craft memorable digital touchpoints that strengthen perception, discovery and direct demand.",
    tags: ["Creative", "Social", "Performance"],
  },
  {
    number: "07",
    title: "Technology & SaaS",
    description:
      "Translate complex products into clear positioning, compelling experiences and scalable acquisition systems.",
    tags: ["Strategy", "Product Marketing", "Growth"],
  },
  {
    number: "08",
    title: "Startups",
    description:
      "Build the foundation for a stronger brand and a marketing engine that can evolve with the business.",
    tags: ["Brand", "Go-to-Market", "Growth"],
  },
];

export default function IndustriesSection() {
  return (
    <section className="dw-industries" id="industries">
      <div className="dw-industries-inner">
        <div className="dw-industries-intro">
          <div className="dw-industries-eyebrow">INDUSTRIES</div>

          <h2>
            Different industries.
            <span> One approach to growth.</span>
          </h2>

          <p>
            Every industry has its own audience, buying journey and
            competitive landscape. We adapt the strategy, creative and
            technology around what your business actually needs.
          </p>
        </div>

        <div className="dw-industries-list">
          {industries.map((industry) => (
            <a
              href="#contact"
              className="dw-industry-row"
              key={industry.title}
              aria-label={`Explore DOWORK solutions for ${industry.title}`}
            >
              <div className="dw-industry-number">{industry.number}</div>

              <div className="dw-industry-main">
                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <div className="dw-industry-tags">
                  {industry.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="dw-industry-arrow">
                <ArrowUpRight size={23} strokeWidth={1.7} />
              </div>
            </a>
          ))}
        </div>

        <div className="dw-industries-bottom">
          <span>YOUR INDUSTRY</span>
          <p>
            Don't see your category? Tell us what you're building and we'll
            shape the right growth approach around it.
          </p>

          <a href="#contact" className="dw-industries-cta">
            Let's talk
            <ArrowUpRight size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}