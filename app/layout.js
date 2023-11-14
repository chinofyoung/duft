"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./context/auth-context";
import { AuthContext } from "./context/auth-context";
import { Suspense } from "react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Loading from "./loading";
import Login from "./components/login";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Duft</title>
        <meta name="description" content="The Duft App" />
      </head>
      <body className={`${inter.className} bg-slate-100`}>
        <AuthContextProvider>
          <Suspense fallback={<Loading />}>
            <AuthContext.Consumer>
              {(context) => (
                <main className="pb-24 w-full max-w-[480px] mx-auto">
                  {context.user ? (
                    <>
                      <Navigation />
                      {children}
                      <Footer />
                    </>
                  ) : (
                    <Login />
                  )}
                </main>
              )}
            </AuthContext.Consumer>
          </Suspense>
        </AuthContextProvider>
      </body>
    </html>
  );
}
