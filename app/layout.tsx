import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lavandería Lavapresto - Tu lavandería de confianza en San Miguel",
  description:
    "Servicio premium de lavandería, tintorería y atención a empresas. Lavado profesional con retiro y entrega a domicilio.",
  generator: "v0.app",
  icons: {
    icon: "/icon-white.png",
    apple: "/icon-white.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
