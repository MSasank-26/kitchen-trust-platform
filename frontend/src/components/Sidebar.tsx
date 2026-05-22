'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },

  {
    name: 'Restaurants',
    href: '/dashboard/restaurants',
  },

  {
    name: 'Kitchens',
    href: '/dashboard/kitchens',
  },

  {
    name: 'Audits',
    href: '/dashboard/audits',
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">
        Kitchen Trust
      </h1>

      <nav className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-3 rounded-lg transition ${
              pathname === link.href
                ? 'bg-white text-black'
                : 'hover:bg-gray-800'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}