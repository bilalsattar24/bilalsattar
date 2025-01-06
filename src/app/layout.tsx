"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme"; // Import your theme file
import { metadata } from "./metadata";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bilalsattar.com" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Bilal Sattar - Freelance Software Developer",
              description: metadata.description,
              url: "https://bilalsattar.com",
              sameAs: [
                "https://github.com/bilalsattar",
                "https://linkedin.com/in/bilalsattar",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 37.7749,
                longitude: -122.4194,
              },
              priceRange: "$$$$",
              knowsAbout: [
                "Software Development",
                "Web Development",
                "React",
                "Node.js",
                "Cloud Architecture",
                "API Development",
                "Full Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
