import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CursPlus - Cursuri pentru viața cotidiană și tehnologie",
  description:
    "Descoperă cursuri practice pentru a te adapta la viața cotidiană și să înțelegi tehnologia din jurul tău. CursPlus - cunoștințe pentru viitorul tău.",
  keywords: [
    "cursuri online",
    "tehnologie",
    "educație digitală",
    "cursuri practice",
    "învățare continuă",
    "dezvoltare personală",
    "cursuri romania",
    "educație modernă",
    "curs plus",
    "curs plus online",
    "curs plus romania",
    "curs plus online romania",
    "curs plus online romania",
    "adaptare la tehnologie",
    "adaptare la viața cotidiană",
    "adaptare",
  ],
  authors: [{ name: "CursPlus" }],
  creator: "CursPlus",
  publisher: "CursPlus",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://cursplus.ro",
    siteName: "CursPlus",
    title: "CursPlus - Cursuri pentru viața cotidiană și tehnologie",
    description:
      "Descoperă cursuri practice pentru a te adapta la viața cotidiană și să înțelegi tehnologia din jurul tău. CursPlus - cunoștințe pentru viitorul tău.",
    images: [
      {
        url: "/logo-rosu.png",
        width: 800,
        height: 600,
        alt: "CursPlus Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CursPlus - Cursuri pentru viața cotidiană și tehnologie",
    description:
      "Descoperă cursuri practice pentru a te adapta la viața cotidiană și să înțelegi tehnologia din jurul tău.",
    images: ["/logo-rosu.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "verificare-google", // Înlocuiește cu codul real de verificare Google
  },
  alternates: {
    canonical: "https://cursplus.ro",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
