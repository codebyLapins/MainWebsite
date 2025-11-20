import type { Metadata } from "next";
import { Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mājaslapu izstrāde | Web Development | CodeByLapins",
  description: "Profesionāla mājaslapu izstrāde un dizains. Izveidoju kvalitatīvas, modernās digitālās lapas uzņēmumiem. Specializējos e-komercijas platformās, uzņēmumu vietnēs un pielāgotās digitālās risinājumos. Professional web development and design services.",
  keywords: ["mājaslapu izstrāde", "web development", "website design", "e-commerce", "Shopify", "WordPress", "Framer", "React", "Next.js", "Latvija", "Latvia", "CodeByLapins"],
  authors: [{ name: "CodeByLapins" }],
  creator: "CodeByLapins",
  publisher: "CodeByLapins",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'lv_LV',
    alternateLocale: ['en_US'],
    url: 'https://codebylapins.com',
    siteName: 'CodeByLapins',
    title: 'Mājaslapu izstrāde | Professional Web Development',
    description: 'Profesionāla mājaslapu izstrāde un dizains. Specializējos e-komercijas platformās, uzņēmumu vietnēs un pielāgotās digitālās risinājumos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CodeByLapins - Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mājaslapu izstrāde | CodeByLapins',
    description: 'Profesionāla mājaslapu izstrāde un dizains. Specializējos e-komercijas platformās un pielāgotās digitālās risinājumos.',
    images: ['/og-image.png'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv">
      <head>
        <link rel="canonical" href="https://codebylapins.com" />
        <meta name="google-site-verification" content="" />
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ibmPlexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
