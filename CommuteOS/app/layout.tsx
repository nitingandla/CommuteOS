import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CommuteOS — AI-Powered Corporate Mobility",
  description:
    "Transform employee commutes into an intelligent shared mobility network. Smart carpooling, dynamic shuttle routing, and AI route optimization for enterprise teams.",
  keywords: "corporate mobility, employee commute, carpooling, shuttle routing, AI transport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
