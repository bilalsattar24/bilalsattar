import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rayan's Birthday Trivia",
  description:
    "Test your knowledge about the birthday star! Answer questions quickly to score more points and compete on the leaderboard.",
  openGraph: {
    title: "🎉 Rayan's Birthday Trivia Game",
    description:
      "Test your knowledge about the birthday star! Answer questions quickly to score more points and compete on the leaderboard. 🏆",
    type: "website",
    url: "/rayan",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Rayan's Birthday Trivia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "🎉 Rayan's Birthday Trivia Game",
    description:
      "Test your knowledge about the birthday star! Answer questions quickly to score more points and compete on the leaderboard. 🏆",
    images: ["/og-image.svg"],
  },
};

export default function RayanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
