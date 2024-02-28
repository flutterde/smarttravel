"use client"

import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ClerkProvider } from "@clerk/nextjs"
import { usePathname } from "next/navigation"


const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  const path = usePathname()

  return (
      <ClerkProvider>
        <html lang="en">
            <body className="overflow-x-hidden">            
              {path == "/" && <Navbar />}
              <main className="relative overflow-hidden">{children}</main>
              {path == "/" && <Footer />}
            </body>
          </html>
      </ClerkProvider>
  )
}
