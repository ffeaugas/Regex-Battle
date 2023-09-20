import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProviders from "@/components/Providers/SessionProviders";
import SocketProviders from "@/components/Providers/SocketProviders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regex Battle",
  description: "A website to improve your Regex skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProviders>
        <SocketProviders>
          <body className={inter.className}>{children}</body>
        </SocketProviders>
      </SessionProviders>
    </html>
  );
}
