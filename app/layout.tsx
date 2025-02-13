import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "Dobos Denis - Personal Blog",
  description: "Personal blog, CV, and projects showcase",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="bg-background text-foreground min-h-screen flex flex-col">
        <Script id="remove-darkreader" strategy="beforeInteractive">
          {`
            (function() {
              const darkReaderStyles = document.querySelectorAll('style.darkreader');
              darkReaderStyles.forEach(style => style.remove());
            })();
          `}
        </Script>
        <div className="bg-gradient-radial from-secondary to-background fixed inset-0 z-[-1]" />
        <div className="bg-grid fixed inset-0 z-[-1] opacity-20" />
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

