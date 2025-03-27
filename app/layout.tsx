import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"


import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Devansh Vishwa ',
  description: 'Devansh Vishwa Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100`}>
        
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-full min-h-screen">{children}<Analytics/></div>
        </ThemeProvider>
        
        </body>
    </html>
  )
}
