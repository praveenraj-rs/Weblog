import "./globals.css";
import Navbar from "./components/Navbar";
import { icons } from "react-icons";

export const metadata = {
  title: "Weblog",
  description:
    "A log of technical insights, ideas, and solutions of Praveenraj R S.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
