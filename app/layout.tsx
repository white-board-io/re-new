import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const scaleInitializer = `
  (() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const scale = width > 1180 && width < 1920 ? width / 1920 : 1;
      document.documentElement.style.setProperty("--renew-desktop-scale", String(scale));
    };
    updateScale();
    window.addEventListener("resize", updateScale, { passive: true });
  })();
`;

export const metadata: Metadata = {
  title: "ReNew Solar Panels | Reliable Solar Solutions",
  description:
    "Explore ReNew's reliable solar panels for homes, businesses and utility-scale projects, backed by world-class manufacturing in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scaleInitializer }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
