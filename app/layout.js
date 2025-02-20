import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundEffect from "@/components/BackgroundEffect"; // Import the background effect

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BackgroundEffect /> {/* Add the background effect here */}
        {children} {/* Render child pages */}
      </body>
    </html>
  );
}
