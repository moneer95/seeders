import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// import { LenisWrapper } from "@/components";

// all maintine ui imports
import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Head from "next/head";

const satoshiBold = localFont({
  src: "./fonts/Satoshi-Bold.woff2",
  variable: "--font-satoshi-bold",
  weight: "700",
});
const satoshiRegular = localFont({
  src: "./fonts/Satoshi-Regular.woff2",
  variable: "--font-satoshi-regular",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Seeders",
  description: "Website for Students",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <ColorSchemeScript />
      </Head>
      <body className={`${satoshiBold.variable} ${satoshiRegular.variable} `}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
