import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TriWeb Studio Blog",
  description: "SEO articles and case studies from TriWeb Studio.",
  openGraph: {
    title: "TriWeb Studio Blog",
    description: "SEO articles and case studies from TriWeb Studio.",
    url: "https://triwebstudio.com/blog",
    siteName: "TriWeb Studio Blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TriWeb Studio Blog",
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
