import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";

/**
 * App - SEO-friendly wrapper using react-helmet-async
 * Ensure HelmetProvider wraps this component in index.js
 */
export default function App() {
  const siteUrl =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : "https://sohamdang.vercel.app";

  const ogImage = `${siteUrl}/og-main.jpg`; // 1200x630 OG image
  const profileImage = `${siteUrl}/ss3.jpg`;
  const logo192 = `${siteUrl}/logo192.png`;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jay Patel",
    alternateName: ["SD", "Soham Dng"],
    url: siteUrl,
    image: profileImage,
    jobTitle: "Full Stack MERN Developer & Team Lead",
    description:
      "Full Stack MERN Developer (React, Node.js, Express, MongoDB). Building high-performance web apps, 3D interactive experiences (Three.js) and SEO-first portfolios.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rohtak",
      addressRegion: "Haryana",
      addressCountry: "IN"
    },
    sameAs: [
      "https://www.linkedin.com/in/soham-dang-9ba897215/",
      "https://github.com/Soham3131",
      "https://www.instagram.com/soham_.31/"
    ]
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Jay Patel — Portfolio",
    url: siteUrl,
    description:
      "Jay Patel (SD) portfolio — Full Stack MERN Developer, 3D Web & Team Lead. Visit for projects, resume and contact.",
    publisher: {
      "@type": "Organization",
      name: "Jay Patel",
      logo: {
        "@type": "ImageObject",
        url: logo192
      }
    },
    sameAs: personJsonLd.sameAs
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Helmet>
        {/* Primary SEO */}
        <title>Jay Patel | Full Stack MERN Developer & Team Lead | 3D Portfolio</title>

        <meta
          name="description"
          content="Jay Patel (SD) — Full Stack MERN Developer & Team Lead from Rohtak. I build high-performance React apps, 3D interactive experiences (Three.js), admin dashboards and SEO-optimized portfolio websites."
        />

        <meta
          name="keywords"
          content={
            "Jay Patel, Soham, SD, sohamdang.vercel.app, Full Stack Developer, MERN Developer, React Developer, Node.js, MongoDB, Three.js, 3D portfolio, best portfolio website, portfolio developer, UI/UX, Team Lead, Avani Enterprises, Rohtak, Haryana, SEO portfolio, animated portfolio"
          }
        />

        <meta name="author" content="Jay Patel" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Jay Patel Portfolio" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="Jay Patel | Full Stack MERN Developer & Team Lead" />
        <meta property="og:description" content="Explore the professional MERN portfolio of Jay Patel — 3D demos, admin dashboards, AI workflows and premium UI." />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content="Jay Patel — Full Stack Developer portfolio preview" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jay Patel | Full Stack MERN Developer" />
        <meta name="twitter:description" content="Full Stack MERN Developer & Team Lead — React, Node, 3D Web, SEO-focused portfolios." />
        <meta name="twitter:image" content={ogImage} />

        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Favicons & app icons */}
        <link rel="icon" href={`${siteUrl}/favicon.ico`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${siteUrl}/favicon-32.png`} />
        <link rel="apple-touch-icon" href={logo192} />

        {/* Structured data */}
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
      </Helmet>

      {/* If CustomCursor causes issues, comment it out */}
      <CustomCursor />

      <Navbar />
      <Home />
    </div>
  );
}
