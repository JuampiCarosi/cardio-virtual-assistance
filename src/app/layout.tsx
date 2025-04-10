import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "CVA",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Cardio Virtual Assistance" />
        <meta
          name="keywords"
          content="cardio, virtual, assistance, CVA, cardiovascular, assistance, virtual assistant, virtual cardiology"
        />
        <meta name="author" content="Juan Pablo Carosi y Sol Carosi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.ico" /> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script async src="/scripts/pixel.js" />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <nav className="sticky top-0 z-30 h-[70px] w-full bg-white shadow-md print:hidden">
          <div className="flex h-full w-full items-center justify-between px-3 sm:px-8">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image width={72} height={79} src="/icon.png" alt="CVA logo" />
              </Link>
            </div>
            <div className="flex items-center gap-5 text-lg font-medium text-rose-950 sm:gap-6">
              <Link className="hover:underline" href="#start">
                start
              </Link>
              <Link className="hover:underline" href="#what-we-offer">
                what we offer
              </Link>
              <Link className="hover:underline" href="#contact">
                contact
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <Analytics />
        <footer className="z-40 flex items-center bg-white text-rose-900">
          <div className="h-full w-full bg-[#E5D5D5] px-7 py-3">
            <div className="flex items-center justify-between">
              <p className="text-sm">© 2025 CVA. All rights reserved.</p>
              <div className="flex flex-col items-start text-sm">
                <span>
                  Designed by{" "}
                  <Link
                    className="underline"
                    href="https://www.linkedin.com/in/sol-carosi-821989207"
                  >
                    Sol Carosi
                  </Link>
                </span>
                <span>
                  Created by{" "}
                  <Link
                    className="underline"
                    href="https://www.linkedin.com/in/juan-pablo-carosi-warburg-43667529b/"
                  >
                    Juan Pablo Carosi
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
