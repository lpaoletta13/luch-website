import "./globals.css";
import Navbar from "@/components/Navbar";
import GlowBackground from "@/components/GlowBackground";

export const metadata = {
  title: "Luciano Paoletta",
  description: "Finance & Technology Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0f1c] text-white">
        <GlowBackground />
        <div className="relative z-10">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
