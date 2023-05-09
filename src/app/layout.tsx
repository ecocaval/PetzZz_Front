import './globals.css'

import { Inter } from 'next/font/google'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PetzZz - Home'
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} h-screen flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
