import React from "react";

const Footer = () => (
  <footer className="w-full bg-[#120f4c] pt-8 pb-4 px-0 mt-0">
    <div className="w-full px-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          {/* Replace with your logo SVG or image */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="8" width="32" height="20" rx="4" stroke="#fff" strokeWidth="2" fill="none" />
            <path d="M8 18h20M8 24h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="text-xl font-semibold text-white tracking-tight">ZabeelNest</span>
        </div>
        {/* Nav Links */}
        <nav className="flex flex-wrap gap-8 text-white font-medium text-sm">
          <a href="#learn" className="hover:underline">Learn</a>
          <a href="#listings" className="hover:underline">Listing</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#terms" className="hover:underline">Terms of use</a>
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
        </nav>
      </div>
      <hr className="border-t border-white/20 mb-4" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-white text-sm">
          <span>Follow us:</span>
          <a href="#" className="hover:text-blue-300" aria-label="Facebook">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17 2.1h-3.2C9.6 2.1 8 3.7 8 6.2v2.1H5.5c-.3 0-.5.2-.5.5v3.1c0 .3.2.5.5.5H8v8.1c0 .3.2.5.5.5h3.2c.3 0 .5-.2.5-.5v-8.1h2.2c.3 0 .5-.2.5-.5l.1-3.1c0-.3-.2-.5-.5-.5h-2.3V6.2c0-.5.1-.7.7-.7H17c.3 0 .5-.2.5-.5V2.6c0-.3-.2-.5-.5-.5z"/></svg>
          </a>
          <a href="#" className="hover:text-blue-300" aria-label="Instagram">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5.25 2.25a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5z"/></svg>
          </a>
          <a href="#" className="hover:text-blue-300" aria-label="LinkedIn">
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v4.75z"/></svg>
          </a>
        </div>
        <div className="text-white text-xs ml-auto md:ml-0">© 2025 ZabeelNest. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
