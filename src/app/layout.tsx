import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ResumeModalProvider } from "@/context/ResumeModalContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arnab Saha | Java Backend Engineer",
  description:
    "Portfolio of Arnab Saha, a Java Backend Engineer specializing in Spring Boot, REST APIs, microservices, database optimization and cloud-native applications.",
  keywords: [
    "Arnab Saha",
    "Java Backend Engineer",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "JPA",
    "Hibernate",
    "Cloud Architecture",
    "Docker",
    "Azure",
    "MySQL",
    "Kolkata",
  ],
  authors: [{ name: "Arnab Saha" }],
  creator: "Arnab Saha",
  openGraph: {
    title: "Arnab Saha | Java Backend Engineer",
    description:
      "Building scalable backend systems, reliable APIs and cloud-native services.",
    type: "website",
    locale: "en_US",
    siteName: "Arnab Saha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnab Saha | Java Backend Engineer",
    description:
      "Building scalable backend systems, reliable APIs and cloud-native services.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080b11] text-[#e6edf3] font-sans antialiased selection:bg-emerald-500/20 selection:text-emerald-400">
        <ResumeModalProvider>{children}</ResumeModalProvider>
      </body>
    </html>
  );
}
