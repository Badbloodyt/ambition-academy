import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Ambition Academy",
  description: "Coaching Institute Website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="brand">Ambition Academy</div>

          <div className="navLinks">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/admission">Admission</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>

        <main className="pageContent">{children}</main>
      </body>
    </html>
  );
}
