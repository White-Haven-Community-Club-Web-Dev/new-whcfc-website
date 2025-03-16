'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth } from "~/server/auth";

export function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about-us' },
    { name: 'Educational Sessions', path: '/educational-sessions' },
    { name: 'F4 Program', path: '/f4-program' },
    { name: 'Youth Program', path: '/youth-program' },
    { name: 'Indoor Soccer', path: '/indoor-soccer' },
    { name: 'Tournament', path: '/tournament' },
    { name: 'Sponsors', path: '/sponsors' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">WHCFC</div>
          
          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`${
                  pathname === item.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-600 hover:text-blue-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <Link
            href="/api/auth/signin"
            className="rounded-full bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}