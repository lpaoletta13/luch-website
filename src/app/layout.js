import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Luciano Paoletta",
  description: "Finance & Technology Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
