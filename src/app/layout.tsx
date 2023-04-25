import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "Swaron.io",
  description:
    "Welcome to Swaron.io! We offer a variety of online courses taught by experts in various fields. Learn at your own pace, from anywhere in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Social Media Preview</title>
        <meta property="og:url" content="https://swaron.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="swaron.io" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="SwaronIO is a platform to learn computer science for free. Join our waitlist to get early access."
        />
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1088918960533164106/1100446169542434961/3b2c3981-1dad-4bb2-8413-2850921432f7.png"
        />
      </Head>
      <body className="bg-app_bg">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
