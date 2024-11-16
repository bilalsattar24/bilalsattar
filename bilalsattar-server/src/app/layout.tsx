import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio",
  description:
    "Professional portfolio of a full stack developer with 10 years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
