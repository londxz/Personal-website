import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://londxz.dev"),
  title: "Родион Холодов — iOS-разработчик",
  description:
    "Портфолио Родиона Холодова — iOS-разработчика с сильной мобильной экспертизой и интересом к AI и backend-разработке на Go.",
  keywords: ["Родион Холодов", "londxz", "iOS-разработчик", "Swift", "SwiftUI", "UIKit", "Go", "AI"],
  authors: [{ name: "Rodion Kholodov", url: "https://londxz.dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Родион Холодов — iOS-разработчик",
    description: "Сильная iOS-разработка на Swift, UIKit и SwiftUI. Интерес к AI и backend на Go.",
    url: "https://londxz.dev",
    siteName: "londxz",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/og.png",
        width: 1728,
        height: 910,
        alt: "Родион Холодов — iOS-разработчик",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Родион Холодов — iOS-разработчик",
    description: "Сильная iOS-разработка на Swift, UIKit и SwiftUI. Интерес к AI и backend на Go.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#ecece8" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="light" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
