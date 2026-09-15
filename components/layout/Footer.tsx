import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const services = [
  { label: "SEO", href: "/services/seo/" },
  {
    label: "Social Media Marketing",
    href: "/services/social-media-marketing/",
  },
  {
    label: "Performance Marketing",
    href: "/services/performance-marketing/",
  },
  {
    label: "Content Marketing",
    href: "/services/content-marketing/",
  },
  {
    label: "Web Design & Development",
    href: "/services/web-design-development/",
  },
];

const company = [
  { label: "About DOWORK", href: "/about/" },
  { label: "Our Team", href: "/studio/" },
  { label: "Contact", href: "/contact/" },
  { label: "Start a Project", href: "/start-a-project/" },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="dw-footer__social-svg"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.4" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="dw-footer__social-svg dw-footer__social-svg--facebook"
      aria-hidden="true"
    >
      <path
        d="M14.2 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.6 1.7-1.6h1.7V4.1c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8v3h3.2v8h3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="dw-footer__social-svg"
      aria-hidden="true"
    >
      <path
        d="M6.2 8.3a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM4.7 9.8h3v9.7h-3V9.8Zm4.9 0h2.9v1.3h.1c.4-.8 1.4-1.7 3.1-1.7 3.1 0 3.7 2.1 3.7 4.8v5.3h-3v-4.7c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7v4.8h-3V9.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="dw-footer__social-svg"
      aria-hidden="true"
    >
      <path
        d="M21.1 7.2a2.5 2.5 0 0 0-1.8-1.8C17.7 5 12 5 12 5s-5.7 0-7.3.4a2.5 2.5 0 0 0-1.8 1.8A26 26 0 0 0 2.5 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C6.3 19 12 19 12 19s5.7 0 7.3-.4a2.5 2.5 0 0 0 1.8-1.8 26 26 0 0 0 .4-4.8 26 26 0 0 0-.4-4.8Z"
        fill="currentColor"
      />
      <path
        d="m10.2 15.1 4.8-3.1-4.8-3.1v6.2Z"
        fill="#f3bccb"
      />
    </svg>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="dw-footer__column-title">
      <span>{children}</span>
    </h3>
  );
}

export default function Footer() {
  return (
    <footer className="dw-footer">
      {/* TOP CURVE */}
      <div className="dw-footer__top-shape" aria-hidden="true">
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="dw-footer__top-shape-svg"
        >
          <path
            d="
              M0 72
              C150 53 285 42 425 55
              C575 69 700 108 830 116
              C975 125 1095 110 1205 80
              C1305 53 1375 30 1440 20
              L1440 0
              L0 0
              Z
            "
            fill="#ffffff"
          />

          <path
            d="
              M0 84
              C180 64 325 59 475 78
              C645 100 795 150 960 143
              C1135 136 1300 74 1440 43
              L1440 220
              L0 220
              Z
            "
            fill="#f3bccb"
          />
        </svg>
      </div>

      <div className="dw-footer__inner">
        {/* BRAND */}
        <div className="dw-footer__brand">
          <Image
            src="/images/dowork-logo.png"
            alt="DOWORK"
            width={320}
            height={110}
            priority
            className="dw-footer__logo"
          />

          <p className="dw-footer__tagline">
            Strategy, marketing and growth.
          </p>

          <p className="dw-footer__intro">
            We help businesses find clear direction, reach the right people
            and grow with marketing that makes sense.
          </p>
        </div>

        {/* COLUMNS */}
        <div className="dw-footer__grid">
          <div className="dw-footer__column">
            <FooterHeading>SERVICES</FooterHeading>

            <nav aria-label="Footer services">
              {services.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="dw-footer__column">
            <FooterHeading>DOWORK</FooterHeading>

            <nav aria-label="DOWORK links">
              {company.map((item) => (
                <a href={item.href} key={item.label}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="dw-footer__column">
            <FooterHeading>GET IN TOUCH</FooterHeading>

            <div className="dw-footer__contact">
              <a href="tel:+917004380277">
                <Phone size={16} strokeWidth={2.1} />
                <span>+91 70043 80277</span>
              </a>

              <a href="mailto:knoida09@gmail.com">
                <Mail size={16} strokeWidth={2.1} />
                <span>knoida09@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="dw-footer__column">
            <FooterHeading>CONNECT</FooterHeading>

            <div className="dw-footer__socials">
              <span
                className="dw-footer__social"
                aria-label="Instagram"
                title="Instagram"
              >
                <InstagramIcon />
              </span>

              <span
                className="dw-footer__social"
                aria-label="Facebook"
                title="Facebook"
              >
                <FacebookIcon />
              </span>

              <span
                className="dw-footer__social"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </span>

              <span
                className="dw-footer__social"
                aria-label="YouTube"
                title="YouTube"
              >
                <YoutubeIcon />
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="dw-footer__bottom">
          <p>© {new Date().getFullYear()} DOWORK. All rights reserved.</p>

          <div className="dw-footer__legal">
            <a href="/privacy-policy/">Privacy Policy</a>
            <a href="/terms/">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}