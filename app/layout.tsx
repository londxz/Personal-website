import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://londxz.dev"),
  title: "Rodion Kholodov — iOS Developer",
  description:
    "Portfolio of Rodion Kholodov, an iOS developer building reliable products with Swift, UIKit and SwiftUI.",
  keywords: ["Rodion Kholodov", "londxz", "iOS developer", "Swift", "SwiftUI", "UIKit"],
  authors: [{ name: "Rodion Kholodov", url: "https://londxz.dev" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rodion Kholodov — iOS Developer",
    description: "Swift, UIKit and SwiftUI. Thoughtful interfaces, architecture, testing and CI.",
    url: "https://londxz.dev",
    siteName: "londxz.dev",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1729,
        height: 910,
        alt: "Rodion Kholodov — iOS Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rodion Kholodov — iOS Developer",
    description: "Swift, UIKit and SwiftUI. Thoughtful interfaces, architecture, testing and CI.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
