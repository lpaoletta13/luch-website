'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-12 py-6 bg-black/80 border-b border-white/10 backdrop-blur-sm">
      <Link href="/" className="text-xl font-semibold tracking-tight text-white">
        Luciano Paoletta
      </Link>
      <div className="flex space-x-10 text-sm font-medium">
        {links.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/');
          return (
            <Link
              key={href}
              href={href}
              className={`pb-0.5 border-b transition ${
                isActive
                  ? 'text-white border-white/40'
                  : 'text-gray-400 hover:text-white border-transparent'
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
