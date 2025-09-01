import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/star-background'
import Navbar from '@/components/main/navbar'
import Footer from '@/components/main/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sudarshan Karn - Business Analyst & Data Scientist',
  description: 'Data-driven Business Analyst with expertise in process optimization, predictive modeling, and stakeholder engagement.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}