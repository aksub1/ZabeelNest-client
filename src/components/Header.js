import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Learn", to: "#" },
  { label: "Listings", to: "/listings" },
  { label: "Blog", to: "#" },
  { label: "FAQs", to: "#" },
  { label: "About Us", to: "#" },
  { label: "Hire Zayna", to: "#" },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="w-full bg-white/80 shadow-sm backdrop-blur sticky top-0 z-30">
      <div className="w-full flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo and Portal Name */}
        <Link to="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
          <img src="/logo192.png" alt="ZabeelNest Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-[#1a2254] tracking-tight">ZabeelNest</span>
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-auto text-[#1a2254] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <rect y="6" width="24" height="2" rx="1" fill="#1a2254" />
            <rect y="11" width="24" height="2" rx="1" fill="#1a2254" />
            <rect y="16" width="24" height="2" rx="1" fill="#1a2254" />
          </svg>
        </button>
        {/* Responsive Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-10 text-[#1a2254] font-normal text-lg">
            {navLinks.map(link => (
              <li key={link.to} className="relative">
                <Link
                  to={link.to}
                  className={`hover:text-[#1a2254] transition block py-2 px-1 ${location.pathname === link.to ? 'font-semibold border-b-2 border-[#1a2254]' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          to="/login"
          className="ml-4 md:ml-8 px-7 py-3 bg-[#1a2254] text-white rounded shadow font-normal text-base hover:bg-[#232b5c] transition hidden md:inline-block"
        >
          LOGIN / REGISTER
        </Link>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden w-full bg-white shadow-lg border-t border-gray-100 absolute left-0 top-full z-40 animate-fade-in">
          <ul className="flex flex-col gap-2 py-4 px-6 text-[#1a2254] font-normal text-lg">
            {navLinks.map(link => (
              <li key={link.to} className="relative">
                <Link
                  to={link.to}
                  className={`hover:text-[#1a2254] transition block py-2 px-1 ${location.pathname === link.to ? 'font-semibold border-b-2 border-[#1a2254]' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/login"
                className="block w-full mt-2 px-7 py-3 bg-[#1a2254] text-white rounded shadow font-normal text-base hover:bg-[#232b5c] transition"
                onClick={() => setMenuOpen(false)}
              >
                LOGIN / REGISTER
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
