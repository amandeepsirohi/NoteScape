import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NoteScape',
  description: 'Keep all your work , tasks on your rules',
  icons:{
    icon:[
      {
        media: "(prefers-color-scheme:light)",
        url:"/dark.svg",
        href:"/dark.svg"
      },
      {
        media: "(prefers-color-scheme:dark)",
        url:"/dark.svg",
        href:"/dark.svg"
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
