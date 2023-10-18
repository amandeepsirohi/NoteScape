import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>\
      <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
      storageKey='note-key'>
      {children}
      </ThemeProvider>
      </body>
    </html>
  )
}
