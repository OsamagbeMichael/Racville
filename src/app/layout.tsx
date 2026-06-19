import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Racville Education Foundation",
  description:
    "Building Better Men for Tomorrow — empowering boys through mentorship, education, and character development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  );
}
