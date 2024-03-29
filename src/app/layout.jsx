import { Providers } from "@/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Les Differences",
  description: "by ahmed mbarek et aymen mani",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Providers
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
            {children}
        </Providers>
      </body>
    </html>
  );
}
