import { Link } from "react-router-dom";
import logo from "../assets/top.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = ({ account, connectWallet, disconnectWallet }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const formatAccount = (address) =>
    `${address.slice(0, 3)}...${address.slice(-4)}`;

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-cyan-950/20 backdrop-blur-3xl  border-b-1 border-b-gray-700  pb-5 z-50">
      {/* Logo Section */}
      <div className=" z-100 flex items-center gap-2 justify-between w-full md:w-auto ">
        <Link
          to="/"
          className="flex gap-2 items-center justify-between border bg-cyan-950/20 backdrop-blur-3xl border-gray-700 rounded-lg px-3 py-2.5  cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className="rounded-[50%] h-[20px] w-[19px]"
          />
          <span className="font-bold text-white">
            Tru<span className="text-blue-500">Chain</span>
          </span>
        </Link>

        {/* Desktop Navigation (Hidden on Small Screens) */}
        <div className="hidden md:flex space-x-4 ml-20  rounded-lg px-3 py-1 bg-transparent ">
          <a
            href="#home"
            className="text-gray-300 p-2 px-3 hover:text-blue-500 font-medium rounded-md"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-gray-300 p-2 px-3 hover:text-blue-500 font-medium rounded-md"
          >
            Features
          </a>
          <a
            href="#about-us"
            className="text-gray-300 p-2 px-3 hover:text-blue-500 font-medium rounded-md"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-300 p-2 px-3 hover:text-blue-500 font-medium rounded-md"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Right-Side Buttons (Hidden on Small Screens) */}
      <div className=" z-100 hidden md:flex items-center space-x-6">
        {account ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-300">{formatAccount(account)}</span>
            <Link
              to="/user-dashboard"
              className="px-4 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Dashboard
            </Link>
            <button
              onClick={disconnectWallet}
              className="px-4 cursor-pointer py-2 text-white bg-red-500 hover:bg-red-700 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <Button text={"Connect Wallet"} click={connectWallet}></Button>
        )}
      </div>

      {/* Mobile Menu (Visible only when menuOpen is true) */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-700 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link
              to="/campaign"
              className="text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              All Campaigns
            </Link>
            <Link
              to="/blogs"
              className="text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/about-us"
              className="text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to=""
              className="text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Settings
            </Link>

            {/* Wallet Buttons in Mobile Menu */}
            {account ? (
              <div className="flex flex-col space-y-3 mt-4">
                <span className="text-gray-300">{formatAccount(account)}</span>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 bg-red-500 text-white rounded-md"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="px-4 py-2 bg-purple-600 text-white rounded-md mt-4"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
