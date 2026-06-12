import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { siteConfig } from "@/lib/site-data";
import React from "react";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Iconic Car care | Premium Car Detailing in Vadodara",
    template: "%s | Iconic Car care",
  },
  description: "Vadodara's premium destination for 10H graphene coating, ceramic coating...",
  verification: {
    google: "xoP4Zh3PLuEaL1TD_N5aLITw2HGyoqFxy3nAHaZlcuw",
  },
};

const jsonLd = {
  serviceType: [
    "10H Graphene Coating",
    "Ceramic Coating",
    "Paint Protection Film",
    "Car Detailing",
    "Paint Correction",
    "Interior Detailing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navigation />
        {children}
        <Footer />

        <WhatsAppCustomerBox />
      </body>
    </html>
  );
}

function WhatsAppCustomerBox() {
  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 99999 }}>
      <a 
        href="https://wa.me/919904484312?text=Hi%20Iconic%20Car%20Care%2C%20I%20want%20to%20inquire%20about%20car%20detailing%20services!%20%F0%9F%9A%97%E2%9C%A8"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          textDecoration: "none",
          boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)",
          cursor: "pointer"
        }}
      >
        💬
      </a>
    </div>
  );
}