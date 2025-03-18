import { siteConfig } from "@/config/siteconfig";
import ClientLayout from "./ClientLayout";
import Script from "next/script";

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
  },
  ownername: siteConfig.ownername,
  companyname: siteConfig.companyname,
  url: siteConfig.link,
  referrer: "origin-when-cross-origin",
  keywords: siteConfig.keywords,
  formatDetection: {
    email: siteConfig.email,
    address: siteConfig.address,
    telephone: siteConfig.telephone,
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.link,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.favicon }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.favicon],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      {/* <body className="custom-scrollbarr"> */}
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
