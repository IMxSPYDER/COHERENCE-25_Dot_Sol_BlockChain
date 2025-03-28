import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-[#0a0a2e]">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            {/* <img sr" alt="0xETHDao Logo" width={120} height={30} /> */}
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Membership
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Team
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Partners
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link
              to="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </Link>
            <Link
              to="#"
              className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-8">© 2023 0xETHDao All Rights Reserved.</div>
      </div>
    </footer>
  );
}
