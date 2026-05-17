import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Code It",
  description: "AI Powered Code Editor",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* ✅ GLOBAL THEME WRAPPER (IMPORTANT FIX) */}
            <div className="flex min-h-screen flex-col bg-[#fffaf5] text-[#2d1606] dark:bg-[#1a120b] dark:text-[#f4e7dd] transition-colors duration-300">
              
              <Toaster />

              <main className="flex-1">
                {children}
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
