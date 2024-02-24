import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenu from "@/component/UI/NavigationMenu";
import {ContextWrapper} from '@/store/favorite-context'
import CartContextWrapper from "@/store/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextWrapper>
          <CartContextWrapper>
        <header>
          <NavigationMenu/>
        </header>
        {children}
        </CartContextWrapper>
        </ContextWrapper>
      </body>
    </html>
  );
}
