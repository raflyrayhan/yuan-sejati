import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "PT Yuan Sejati – Energy Measurement & Construction Solution",
  description:
    "One-stop metering system & EPC provider for Oil & Gas, Power and Petrochemical industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar/>
      <body>{children}</body>
    </html>
  );
}