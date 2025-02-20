import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children} {/* Aquí se renderizan las diferentes páginas */}
      </body>
    </html>
  );
}
