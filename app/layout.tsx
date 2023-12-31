import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import "./globals.css";

import { EdgeStoreProvider } from "@/lib/edgestore";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteScape",
  description: "Keep all your work , tasks on your rules",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme:light)",
        url: "/dark.svg",
        href: "/dark.svg",
      },
      {
        media: "(prefers-color-scheme:dark)",
        url: "/dark.svg",
        href: "/dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="note-key">
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
