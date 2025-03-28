import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <header className="bg-[#0a0a2e]">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <h2 className="text-3xl">TruChain</h2>
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="#" className="text-lg text-gray-300 hover:text-white transition-colors">About</Link>
          <Link to="#" className="text-lg text-gray-300 hover:text-white transition-colors">Membership</Link>
          <Link to="#" className="text-lg text-gray-300 hover:text-white transition-colors">Team</Link>
          <Link to="#" className="text-lg text-gray-300 hover:text-white transition-colors">Products</Link>
          <Link to="#" className="text-lg text-gray-300 hover:text-white transition-colors">Partners</Link>
        </nav>
        
        {/* Buttons */}
        <div className="flex items-center space-x-3">
          <button className="px-4 py-2 text-white bg-gray-700 rounded-lg hover:bg-gray-600 cursor-pointer">Sign Up</button>
          <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 cursor-pointer">Connect Wallet</button>
        </div>
      </div>
    </header>
  );
}
