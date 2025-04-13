import Link from "next/link"
import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Farmer's Market - From Farm to Table",
  description: "Connect with local farmers, buy fresh produce, and support sustainable agriculture.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <footer className="w-full py-6 bg-green-800 text-white">
            <div className="container px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">FarmersMarket</h3>
                  <p className="text-sm text-gray-300">Connecting farmers and consumers for a sustainable future.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/products">Products</Link>
                    </li>
                    <li>
                      <Link href="/farmers">Farmers</Link>
                    </li>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">For Farmers</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/farmers/register">Join as Farmer</Link>
                    </li>
                    <li>
                      <Link href="/farmers/dashboard">Farmer Dashboard</Link>
                    </li>
                    <li>
                      <Link href="/farmers/resources">Resources</Link>
                    </li>
                    <li>
                      <Link href="/farmers/faq">FAQ</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <address className="text-sm not-italic text-gray-300">
                    <p>123 Farm Road</p>
                    <p>Harvest Valley, CA 94123</p>
                    <p className="mt-2">info@farmersmarket.com</p>
                    <p>(555) 123-4567</p>
                  </address>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm text-gray-300">
                <p>© 2023 FarmersMarket. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'