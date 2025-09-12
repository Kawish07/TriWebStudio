import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TriWeb Studio – Design. Develop. Rank.",
  description: "TriWeb Studio is a full-service web agency offering Full-Stack Development, SEO, and Front-End Design. Modern, responsive, and SEO-friendly websites for your business.",
  openGraph: {
    title: "TriWeb Studio – Design. Develop. Rank.",
    description: "TriWeb Studio is a full-service web agency offering Full-Stack Development, SEO, and Front-End Design. Modern, responsive, and SEO-friendly websites for your business.",
    url: "https://triwebstudio.com/",
    siteName: "TriWeb Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TriWeb Studio – Design. Develop. Rank.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
