import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { branches } from "@/config/branch-configs";
import BranchPageClient from "@/components/BranchPageClient";

type BranchParams = { branchSlug: string };

export function generateStaticParams() {
  return Object.keys(branches).map((slug) => ({ branchSlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<BranchParams>;
}): Promise<Metadata> {
  const { branchSlug } = await params;
  const branch = branches[branchSlug];

  if (!branch) {
    return {
      title: "Branch not found",
    };
  }

  const title = `${branch.heroTitle} | Impressionz Dental Care — ${branch.name}`;
  const description = `${branch.doctors.map(d => d.name).join(' & ')} at Impressionz Dental Care, ${branch.name}. Painless implants, Invisalign, braces and cosmetic dentistry. ${branch.contact.timings}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${branch.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/${branch.slug}`,
      siteName: "Impressionz Dental Care",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: `Impressionz Dental Care – ${branch.name}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo.png"],
    },
  };
}

export default async function BranchPage({
  params,
}: {
  params: Promise<BranchParams>;
}) {
  const { branchSlug } = await params;
  const branch = branches[branchSlug];

  if (!branch) {
    notFound();
  }

  // JSON-LD LocalBusiness (Dentist) structured data — important for Google local search.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: `Impressionz Dental Care – ${branch.name}`,
    image: "/images/logo.png",
    url: `https://impressionzdentalcare.com/${branch.slug}`,
    telephone: branch.contact.phones[0],
    email: branch.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.contact.address,
      addressLocality: branch.name,
      addressRegion: "MH",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    openingHours: branch.contact.timings,
    sameAs: [branch.contact.googleMapsLink],
    medicalSpecialty: [
      "Dentistry",
      "Orthodontics",
      "CosmeticDentistry",
      "DentalImplants",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BranchPageClient branch={branch} />
    </>
  );
}
