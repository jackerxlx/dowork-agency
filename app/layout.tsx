import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "DOWORK — Digital Growth Agency",
    template: "%s — DOWORK",
  },
  description:
    "DOWORK is a digital growth agency building brands, experiences and performance systems for ambitious companies.",
  keywords: [
    "digital marketing agency",
    "digital growth agency",
    "SEO agency",
    "performance marketing",
    "branding agency",
    "web development",
    "DOWORK",
  ],
  metadataBase: new URL("https://dowork.agency"),
  openGraph: {
    title: "DOWORK — Digital Growth Agency",
    description:
      "Strategy, brand, creative, media, technology and growth.",
    type: "website",
    siteName: "DOWORK",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}