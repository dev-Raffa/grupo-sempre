import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grupo Sempre - Portal de Redirecionamento",
  description: "Acesse as clínicas Sempre Sorrindo e Sempre Visão do Grupo Sempre",
  keywords: "Grupo Sempre, Sempre Sorrindo, Sempre Visão, clínica odontológica, clínica oftalmológica",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
