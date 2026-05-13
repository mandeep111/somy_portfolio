import Portfolio from "./portfolio";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Somy Bhattarai",
  url: "https://somybhattarai.com.np",
  image: "https://somybhattarai.com.np/profile.webp",
  email: "mailto:somybhattarai650@gmail.com",
  jobTitle: "Aspiring Researcher in Water, Climate & Disaster Resilience",
  sameAs: ["https://www.linkedin.com/in/somy-bhattarai-6313b01ab/"],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Tribhuvan University"
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Mechi Multiple Campus"
    }
  ],
  knowsAbout: [
    "Environmental Science",
    "Water Quality",
    "Climate Resilience",
    "Disaster Risk Reduction",
    "Geospatial Analysis",
    "Scientific Writing"
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Portfolio />
    </>
  );
}
