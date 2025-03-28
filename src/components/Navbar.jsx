import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from "lucide-react";
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons for light and dark mode
import Button from './Button';

const Navbar = ({ account, connectWallet, disconnectWallet, theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const formatAccount = (address) => `${address.slice(0, 3)}...${address.slice(-4)}`;

  return (
    <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 shadow-lg pb-5 z-50 transition-all ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      <div className="flex items-center gap-2 justify-between w-full md:w-auto">
        <Link to="/" className={`flex gap-2 items-center px-3 py-2.5 rounded-lg cursor-pointer ${theme === "dark" ? " text-white" : " text-black"}`}>
          <span className="font-bold">Tru<span className="text-blue-500">Chain</span></span>
        </Link>

        <div className={`hidden md:flex space-x-4 rounded-lg px-3 py-1 ${theme === "dark" ? " text-white" : " text-black"}`}>
          <Link to="/campaign" className="p-2 px-3 hover:text-blue-500">All Campaigns</Link>
          <Link to="/blogs" className="p-2 px-3 hover:text-blue-500">Blogs</Link>
          <Link to="/about-us" className="p-2 px-3 hover:text-blue-500">About Us</Link>
          <Link to="" className="p-2 px-3 hover:text-blue-500">Settings</Link>
        </div>

        <button className="md:hidden ml-auto" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className="hidden md:flex items-center space-x-6">
        {account ? (
          <div className="flex items-center gap-4">
            <span>{formatAccount(account)}</span>
            <Link to="/dashboard" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md">Dashboard</Link>
            <button onClick={disconnectWallet} className="px-4 py-2 bg-red-500 hover:bg-red-700 rounded-md">Logout</button>
          </div>
        ) : (
          <Button text="Connect Wallet" onClick={connectWallet} />
        )}

        {/* Theme Toggle Button (Icon-based) */}
        <button onClick={toggleTheme} className="ml-4 p-2 rounded-full">
          {theme === "dark" ? (
            <FaSun className="text-white-500" size={24} />
          ) : (
            <FaMoon className="text-blue-500" size={24} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full border-t border-gray-700 py-4 px-6 transition-all" style={{ backgroundColor: theme === "dark" ? "black" : "white" }}>
          <div className="flex flex-col space-y-4">
            <Link to="/campaign" onClick={() => setMenuOpen(false)}>All Campaigns</Link>
            <Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link>
            <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="" onClick={() => setMenuOpen(false)}>Settings</Link>

            {account ? (
              <div className="flex flex-col space-y-3 mt-4">
                <span>{formatAccount(account)}</span>
                <Link to="/dashboard" className="px-4 py-2 bg-purple-600 text-white rounded-md text-center" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                <button onClick={disconnectWallet} className="px-4 py-2 bg-red-500 text-white rounded-md">Logout</button>
              </div>
            ) : (
              <button onClick={connectWallet} className="px-4 py-2 bg-purple-600 text-white rounded-md mt-4">Connect Wallet</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
