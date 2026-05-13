import "./globals.css";

const siteUrl = "https://somybhattarai.com.np";
const title = "Somy Bhattarai | Water, Climate & Disaster Resilience";
const description =
  "Somy Bhattarai is an aspiring researcher in water, climate, and disaster resilience, working across environmental science, field research, writing, and impact-focused solutions.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Somy Bhattarai Portfolio",
  title: {
    default: title,
    template: "%s | Somy Bhattarai"
  },
  description,
  keywords: [
    "Somy Bhattarai",
    "Environmental Science",
    "Water Research",
    "Climate Resilience",
    "Disaster Risk Reduction",
    "Nepal Researcher"
  ],
  authors: [{ name: "Somy Bhattarai", url: siteUrl }],
  creator: "Somy Bhattarai",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/profile.webp",
    shortcut: "/profile.webp",
    apple: "/profile.webp"
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    siteName: "Somy Bhattarai",
    title,
    description,
    images: [
      {
        url: "/profile.webp",
        width: 1070,
        height: 803,
        alt: "Somy Bhattarai near a bridge at sunset"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.webp"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#81c784",
  colorScheme: "light"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
