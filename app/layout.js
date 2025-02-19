import "./globals.css";
import Home from "./page";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Contenedor principal para toda la aplicación */}
        <Navbar />
        {children}
        <Home />
      </body>
    </html>
  );
}