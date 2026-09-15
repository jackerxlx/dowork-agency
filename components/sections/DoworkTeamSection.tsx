import Image from "next/image";

export default function DoworkTeamSection() {
  return (
    <section
      className="dw-team-section"
      id="team"
      aria-labelledby="dw-team-title"
    >
      <div className="dw-team-section__inner">
        {/* TEAM IMAGE */}
        <div className="dw-team-section__visual">
          <div className="dw-team-section__image-wrap">
            <Image
              src="/images/dowork-team-growth.png"
              alt="DOWORK digital marketing team working together on strategy, content and growth"
              width={1200}
              height={900}
              className="dw-team-section__image"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="dw-team-section__content">
          <h2 id="dw-team-title">
            A team that cares
            <span>about your growth.</span>
          </h2>

          <div className="dw-team-section__accent">
            GOOD WORK STARTS WITH GOOD PEOPLE
          </div>

          <p>
            Behind DOWORK is a team of strategists, creatives and digital
            marketers who work closely with you. We keep things simple,
            communicate clearly and stay focused on what can help your
            business grow.
          </p>

          <a
            href="/studio/"
            className="dw-team-section__cta"
          >
            Meet DOWORK
          </a>
        </div>
      </div>
    </section>
  );
}