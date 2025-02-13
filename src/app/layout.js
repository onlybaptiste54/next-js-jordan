import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-josefin",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-Josefin-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "NBN.com",
  description: "Evénements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
