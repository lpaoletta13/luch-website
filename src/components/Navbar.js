'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/', label: 'Home', exact: true },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/80 border-b border-white/10 backdrop-blur-sm">
      <div className="flex justify-between items-center px-8 py-6">
        <Link href="/" className="text-xl font-semibold tracking-tight text-white">
          Luciano Paoletta
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-10 text-sm font-medium">
          {links.map(({ href, label, exact }) => {
            const isActive = exact ? pathname === href : (pathname === href || pathname.startsWith(href + '/'));
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

        {/* Hamburger button — mobile only */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 text-gray-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-8 py-4 flex flex-col gap-4 text-sm font-medium">
          {links.map(({ href, label, exact }) => {
            const isActive = exact ? pathname === href : (pathname === href || pathname.startsWith(href + '/'));
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`transition ${
                  isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
