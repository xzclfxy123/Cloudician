import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cloudician",
  description: "A professional web3 infrastructure provider with extensive experience in staking and validator services, PRC & node API services, security, key custody, data indexing, tool development as well as offering high-performance databases, media streaming and high-speed private data storage networks solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-msyahei antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
