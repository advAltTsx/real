import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import localFont from '@next/font/local'

const nothing = localFont({
  src: [
    {
      path: './nothing.ttf',
      weight: '800'
    },
  ],
  variable: '--font-nothing'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abhyudaya",
  description: "Portfolio",
  icons: {
    icon: '/logo.jpg'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div  vaul-drawer-wrapper="">
          <Navbar/>
          {children}
          <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
