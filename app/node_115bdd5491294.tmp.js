import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import type React from "react"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata = {
  title: "Your Name - Personal Blog",
  description: "Personal blog, CV, and projects showcase",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <Script id="remove-darkreader" strategy="beforeInteractive">
        {`
          (function() {
            const darkReaderStyles = document.querySelectorAll('style.darkreader');
            darkReaderStyles.forEach(style => style.remove());
          })();
        `}
      </Script>
      <body className="bg-background text-primary min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <footer className="text-center py-4 text-sm">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  )
}



import './globals.css'