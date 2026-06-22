import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lucenexcorp.com/#organization",
      name: "Lucenex Corp",
      url: "https://lucenexcorp.com",
      logo: {
        "@type": "ImageObject",
        url: "https://lucenexcorp.com/icon.png",
        width: 63,
        height: 64,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "admin@lucenexcorp.com",
        contactType: "customer support",
      },
      description:
        "Lucenex Corp delivers data engineering, analytics, AI automation, and cloud architecture solutions.",
      knowsAbout: [
        "Data Engineering",
        "Machine Learning",
        "AI Automation",
        "Cloud Architecture",
        "Business Intelligence",
        "Data Strategy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://lucenexcorp.com/#website",
      url: "https://lucenexcorp.com",
      name: "Lucenex Corp",
      description:
        "Data engineering, analytics, AI automation, and cloud architecture solutions.",
      publisher: { "@id": "https://lucenexcorp.com/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": "https://lucenexcorp.com/#webpage",
      url: "https://lucenexcorp.com",
      name: "Lucenex Corp — Data Engineering, Analytics & AI",
      isPartOf: { "@id": "https://lucenexcorp.com/#website" },
      about: { "@id": "https://lucenexcorp.com/#organization" },
      description:
        "Lucenex Corp helps businesses move faster with advanced data engineering, analytics, AI automation, and cloud architecture.",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
