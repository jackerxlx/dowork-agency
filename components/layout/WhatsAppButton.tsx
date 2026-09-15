"use client";

function WhatsAppLogo() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="dw-whatsapp__logo"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="16" fill="#25D366" />

      <path
        d="M9.1 22.8 10.3 19a8.4 8.4 0 1 1 3.1 2.9l-4.3.9Z"
        fill="#ffffff"
      />

      <path
        d="M13.2 11.9c.2-.3.4-.3.7-.3h.6c.2 0 .4.1.5.4l.9 2c.1.3.1.5-.1.7l-.7.8c-.1.2-.1.3 0 .5.5.9 1.2 1.6 2.1 2.1.2.1.3.1.5-.1l.7-.8c.2-.2.4-.2.7-.1l1.9.9c.3.1.4.3.4.6v.6c0 .3-.1.5-.3.7-.4.4-1 .7-1.7.7-1.5-.1-3.3-.9-4.7-2.2-1.4-1.3-2.3-2.9-2.7-4.3-.2-.8-.2-1.5.2-2Z"
        fill="#25D366"
      />
    </svg>
  );
}

export default function WhatsAppButton() {
  const phoneNumber = "917004380277";

  const message = encodeURIComponent(
    "Hi DOWORK, I need help with digital marketing."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="dw-whatsapp"
      aria-label="Need help? Chat with us on WhatsApp"
    >
      <span className="dw-whatsapp__label">
        Need help? Chat with us
      </span>

      <span className="dw-whatsapp__icon">
        <WhatsAppLogo />
      </span>
    </a>
  );
}