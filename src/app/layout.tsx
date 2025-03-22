import type { Metadata } from "next";
import localFont from "next/font/local";
import ServersSidebar from "./components/ServerSidebar";
import "./globals.css";

const ginto = localFont({
  src: "../../public/ginto/ginto-semibold.woff",
  weight: "600",
  style: "normal",
  variable: "--font-ginto",
});

const whitney = localFont({
  src: [
    {
      path: "../../public/whitney/whitney-light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/whitney/whitney-book.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/whitney/whitney-medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/whitney/whitney-semibold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Discord UI Clone",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${whitney.className} ${ginto.variable}`}>
        <div className="flex h-screen text-gray-100">
          <ServersSidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
