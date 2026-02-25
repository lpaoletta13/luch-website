import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Luciano Paoletta",
  description: "Finance & Technology Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        
      <nav className="flex justify-between items-center px-12 py-6 bg-black border-b border-white/10">
  <Link
    href="/"
    className="text-xl font-semibold tracking-tight text-white"
  >
    Luciano Paoletta
  </Link>

  <div className="flex space-x-10 text-sm font-medium">
    <Link href="/projects" className="text-gray-400 hover:text-white transition">
      Projects
    </Link>
    <Link href="/resume" className="text-gray-400 hover:text-white transition">
      Resume
    </Link>
    <Link href="/contact" className="text-gray-400 hover:text-white transition">
      Contact
    </Link>
  </div>
</nav>

        {children}

      </body>
    </html>
  );
}