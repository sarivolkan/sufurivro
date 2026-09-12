import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sufurivro.com"),

  title: {
    default: "SUFURIVRO | ITSM Analytics & Service Intelligence Platform",
    template: "%s | SUFURIVRO",
  },

  description:
    "SUFURIVRO connects ServiceNow and other ITSM platforms, centralizes data in Microsoft Fabric, and delivers self-service reporting, SLA analytics, MTTR insights and Power BI dashboards.",

  keywords: [
    "ITSM analytics",
    "ITSM reporting",
    "ServiceNow Power BI",
    "ServiceNow reporting",
    "ServiceNow analytics",
    "ITSM dashboard",
    "Microsoft Fabric ITSM",
    "Power BI ITSM",
    "SLA dashboard",
    "MTTR dashboard",
    "incident management analytics",
    "service management analytics",
    "self-service reporting",
    "IT service management reporting",
    "SUFURIVRO",
  ],

  authors: [
    {
      name: "Datamart Information Technologies",
    },
  ],

  creator: "Datamart Information Technologies",
  publisher: "Datamart Information Technologies",

  alternates: {
    canonical: "https://sufurivro.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sufurivro.com",
    siteName: "SUFURIVRO",
    title: "SUFURIVRO | ITSM Analytics & Service Intelligence Platform",
    description:
      "Connect ITSM platforms, centralize data in Microsoft Fabric, and deliver self-service reporting and Power BI analytics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SUFURIVRO Service Intelligence Platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SUFURIVRO | ITSM Analytics & Service Intelligence Platform",
    description:
      "ITSM integration, Microsoft Fabric data platform and Power BI self-service analytics.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white font-sans text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}