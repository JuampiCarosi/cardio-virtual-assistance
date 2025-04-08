import "@/styles/globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "CVA",
  // icons: [{ rel: "icon", url: "/favicon.ico" }],
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
        <nav className="sticky top-0 z-30 w-full bg-white shadow-md print:hidden">
          <div className="flex w-full items-center justify-between px-8">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image width={72} height={79} src="/icon.png" alt="CVA logo" />
              </Link>
            </div>
            <div className="hidden items-center gap-6 text-lg font-medium text-rose-950 md:flex">
              <Link href="/#start">start</Link>
              <Link href="/#what-we-offer">what we offer</Link>
              <Link href="/#contact">contact</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
