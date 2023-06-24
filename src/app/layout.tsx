import "./globals.css";
import { Fira_Sans } from "next/font/google";

const fira = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Raven Digital",
  description: "This is Raven Digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={fira.className}>{children}</body>
    </html>
  );
}
