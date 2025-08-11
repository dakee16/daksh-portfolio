import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daksh Mainee – Portfolio",
  description: "CS undergrad building practical software (Java, Python, MERN).",
  icons: { icon: "/dm-favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/** Plausible (enable when you have a domain)
        <script defer data-domain="dakshmainee.com" src="https://plausible.io/js/script.js"></script>
        */}
      </head>
      <body>{children}</body>
    </html>
  );
}
