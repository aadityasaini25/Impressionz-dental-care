import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Impressionz Dental Care – Painless, Premium Dentistry in Mumbai",
    template: "%s | Impressionz Dental Care",
  },
  description:
    "Impressionz Dental Care: affordable, tech-driven and painless dentistry in Mumbai. Two branches — Borivali West & Andheri West. Implants, braces, Invisalign, cosmetic dentistry and more, under one roof.",
  keywords:
    "Impressionz Dental Care, dentist Mumbai, dentist Borivali, dentist Andheri, dental implants Mumbai, Invisalign Mumbai, painless dentistry, cosmetic dentistry, Dr. Sandeep Singh, Dr. Priya Singh",
  authors: [{ name: "Impressionz Dental Care" }],
  creator: "Impressionz Dental Care",
  publisher: "Impressionz Dental Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://impressionzdentalcare.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Impressionz Dental Care – Painless Dentistry in Mumbai",
    description:
      "Premium, painless dental care in Borivali West and Andheri West. Implants, Invisalign, braces, cosmetic dentistry and more — all under one roof.",
    url: 'https://impressionzdentalcare.com/',
    siteName: "Impressionz Dental Care",
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: "Impressionz Dental Care",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Impressionz Dental Care – Painless Dentistry in Mumbai",
    description:
      "Borivali West & Andheri West. Implants, Invisalign, braces, cosmetic dentistry and more.",
    images: ['/images/logo.png'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#485b51" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
