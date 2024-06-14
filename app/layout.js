import { Space_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/utils/providers";
const spaceMono = Space_Mono({ weight:['400', '700'], subsets: ["latin"] });

export const metadata = {
  title: "Roshith Krishna P",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={spaceMono.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
  );
}
