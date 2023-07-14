import "./globals.css";
import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multor | Cometlabs",
  description: "Cometlabs frontend assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.className}>
      <head>
        <title>Multor</title>
        <meta name="description" content="Cometlabs frontend assessment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <div id="modal-root" />
      </body>
    </html>
  );
}
