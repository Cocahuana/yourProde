import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your prode",
  description: "Jugá y gana dinero adivinando resultados!",
};
// The authentication state exposed by UserProvider can be accessed in any Client Component using the useUser() hook.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <UserProvider>
        <ChakraProvider>
          <body>{children}</body>
        </ChakraProvider>
      </UserProvider>
    </html>
  );
}
