import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import BootstrapProvider from "./BootstrapProvider";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});


export const metadata = {
  title: "Shield Tech",
  description: "EMC Çözümleri",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <BootstrapProvider>{children}</BootstrapProvider>
      </body>
    </html>
  );
}