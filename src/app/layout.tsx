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
  title: "Tooth Story – Dental Clinic For All",
  description: "Dr. Nikunj Maniyar (Orthodontist & Pedodontist | Invisalign Specialist). Located at Sunrise Park, Ahmedabad. Gold medalist specialist for adult and kids orthodontic care.",
  keywords: "Dr. Nikunj Maniyar, Orthodontist, Pedodontist, Tooth Story, Invisalign Ahmedabad, Kids Braces, Junior Aligners",
  authors: [{ name: "Dr. Nikunj Maniyar" }],
  creator: "Tooth Story – Dental Clinic For All",
  publisher: "Tooth Story – Dental Clinic For All",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tooth-story.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tooth Story | Expert Invisalign & Kids Orthodontic Care",
    description: "Dr. Nikunj Maniyar - 6+ Years Experience. Sunrise Park, Ahmedabad.",
    url: 'https://tooth-story.vercel.app/',
    siteName: "Tooth Story – Dental Clinic For All",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Tooth Story – Dental Clinic For All",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tooth Story – Dental Clinic For All",
    description: "Expert Invisalign & Kids Orthodontic Care in Ahmedabad",
    images: ['/og-image.jpg'],
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
