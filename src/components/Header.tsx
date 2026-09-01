import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { LOGO_URL } from "../data/mockData";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "services", label: "Services", href: "/services" },
    { id: "solutions", label: "Solutions", href: "/solutions" },
    { id: "pricing", label: "Pricing", href: "/pricing" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "resources", label: "Resources", href: "/resources" },
  ];

  const getIsActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-[#dfbfc3]/40 shadow-xs transition-all duration-300">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 md:px-12 py-3.5 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-left cursor-pointer focus:outline-hidden"
          aria-label="24MAGIC Home"
        >
          <Image
            src={LOGO_URL}
            alt="24MAGIC Logo"
            width={819}
            height={335}
            priority
            className="h-12 md:h-14 w-auto object-contain transition-transform hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => {
            const isActive = getIsActive(item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`text-xs lg:text-sm font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer py-1 ${
                  isActive
                    ? "text-[#830036] border-b-2 border-[#830036]"
                    : "text-[#584145] hover:text-[#830036]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden md:flex items-center gap-3.5">
          <Link
            href="/contact"
            className="text-xs lg:text-sm font-semibold uppercase tracking-wider text-white btn-gradient px-5 py-2 rounded-full cursor-pointer hover:shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#584145] p-2 rounded-lg hover:bg-[#fbf1f2] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fff8f8] border-b border-[#dfbfc3]/40 px-6 py-6 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-2 px-3 text-sm font-semibold uppercase tracking-wider rounded-lg transition-colors ${
                  getIsActive(item.href)
                    ? "bg-[#a61d4c]/10 text-[#830036] font-bold"
                    : "text-[#584145] hover:bg-[#f5eced]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-[#dfbfc3]/40 flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-sm font-semibold uppercase tracking-wider text-white btn-gradient py-3 rounded-full"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
