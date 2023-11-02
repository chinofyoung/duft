"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { AuthContextProvider } from "./context/auth-context";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Duft</title>
        <meta name="description" content="The Duft App" />
      </head>
      <body className={`${inter.className} bg-slate-100`}>
        <Suspense fallback={<Loading />}>
          <main className="pb-16">
            <AuthContextProvider>
              <Navigation />
              {children}
              <Footer />
            </AuthContextProvider>
          </main>
        </Suspense>
      </body>
    </html>
  );
}
