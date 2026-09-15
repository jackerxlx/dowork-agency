"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "#home",
    dropdown: false,
  },
  {
    label: "Studio",
    href: "#about",
    dropdown: true,
  },
  {
    label: "Services",
    href: "#services",
    dropdown: true,
  },
  {
    label: "Work",
    href: "#work",
    dropdown: true,
  },
  {
    label: "Contact",
    href: "#contact",
    dropdown: false,
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="dw-bee-header">

      {/* =====================================================
          TOP ANNOUNCEMENT BAR
          ===================================================== */}

      <div className="dw-bee-header__top">
        <div className="dw-container dw-bee-header__top-inner">

          <div className="dw-bee-header__top-message">
            CALL US ON +91 70043 80277 OR WHATSAPP US
            TO DISCUSS YOUR REQUIREMENTS
          </div>

        </div>
      </div>


      {/* =====================================================
          BRAND ROW
          ===================================================== */}

      <div className="dw-bee-header__brand-row">
        <div className="dw-container dw-bee-header__brand-inner">

          {/* SOCIAL ICONS */}

          <div className="dw-bee-header__socials">

            {/* FACEBOOK */}

            <a
              href="#"
              aria-label="Facebook"
              className="dw-bee-header__social"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z"
                />
              </svg>
            </a>


            {/* INSTAGRAM */}

            <a
              href="#"
              aria-label="Instagram"
              className="dw-bee-header__social"
            >
              <svg
                viewBox="0 0 24 24"
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
                  strokeWidth="1.8"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />

                <circle
                  cx="17.4"
                  cy="6.7"
                  r="1"
                  fill="currentColor"
                />
              </svg>
            </a>


            {/* YOUTUBE */}

            <a
              href="#"
              aria-label="YouTube"
              className="dw-bee-header__social"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5a2.7 2.7 0 0 0-1.9 1.9C2 8.9 2 12 2 12s0 3.1.4 4.8a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
                />
              </svg>
            </a>


            {/* LINKEDIN */}

            <a
              href="#"
              aria-label="LinkedIn"
              className="dw-bee-header__social"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M6.2 8.3A2.1 2.1 0 1 0 6.2 4a2.1 2.1 0 0 0 0 4.3ZM4.4 9.8h3.6V20H4.4V9.8Zm5.7 0h3.5v1.4h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V20h-3.6v-4.4c0-1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.3V20h-3.6V9.8Z"
                />
              </svg>
            </a>

          </div>


          {/* CENTER LOGO */}

          <Link
            href="/"
            className="dw-bee-header__logo"
            aria-label="DOWORK home"
            onClick={closeMenu}
          >
            <Image
              src="/images/dowork-logo.png"
              alt="DOWORK"
              width={390}
              height={163}
              priority
              className="dw-bee-header__logo-image"
            />
          </Link>


          {/* CTA */}

          <Link
            href="#contact"
            className="dw-bee-header__cta"
          >
            <span>
              Book a FREE Consultation
            </span>

            <span className="dw-bee-header__cta-arrow">
              ↗
            </span>
          </Link>


          {/* MOBILE MENU */}

          <button
            type="button"
            className="dw-bee-header__menu"
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            {menuOpen ? (
              <X size={22} strokeWidth={1.8} />
            ) : (
              <Menu size={22} strokeWidth={1.8} />
            )}
          </button>

        </div>
      </div>


      {/* =====================================================
          DESKTOP NAVIGATION
          ===================================================== */}

      <div className="dw-bee-header__nav-row">
        <div className="dw-container">

          <nav
            className="dw-bee-header__nav"
            aria-label="Main navigation"
          >

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="dw-bee-header__nav-link"
                onClick={closeMenu}
              >
                <span>{item.label}</span>

                {item.dropdown && (
                  <ChevronDown
                    size={13}
                    strokeWidth={1.8}
                  />
                )}
              </Link>
            ))}

          </nav>

        </div>
      </div>


      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}

      <div
        className={`dw-bee-header__mobile ${
          menuOpen
            ? "dw-bee-header__mobile--open"
            : ""
        }`}
      >
        <div className="dw-container">

          <nav
            className="dw-bee-header__mobile-nav"
            aria-label="Mobile navigation"
          >

            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="dw-bee-header__mobile-link"
                onClick={closeMenu}
              >
                <span>
                  0{index + 1}
                </span>

                <strong>
                  {item.label}
                </strong>

                {item.dropdown && (
                  <ChevronDown
                    size={18}
                    strokeWidth={1.7}
                  />
                )}
              </Link>
            ))}

          </nav>


          <Link
            href="#contact"
            className="dw-bee-header__mobile-cta"
            onClick={closeMenu}
          >
            <span>
              Book a FREE Consultation
            </span>

            <span>
              ↗
            </span>
          </Link>

        </div>
      </div>

    </header>
  );
}