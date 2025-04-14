import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout/Layout";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosy Photo Booth",
  description: "Next powered photo booth app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${nunito.variable} ${nunitoSans.variable} mx-32 antialiased min-h-full flex flex-col`}
      >
        <Layout>
          <main className="flex-1 flex justify-center items-center">
            {children}
          </main>
        </Layout>
      </body>
    </html>
  );
}
