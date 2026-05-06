import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoFocus",
  description: "Focus & productivity app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mobile-wrapper">
          <div className="mobile-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
