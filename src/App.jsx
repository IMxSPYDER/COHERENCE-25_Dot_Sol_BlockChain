import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons for light and dark mode
import RegisterPopup from "./components/RegisterPopup";
import contractABI from './web3/abi.json';
import Home from './Home';
import BenefitCard from './components/BenefitCard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import BenefitsSection from './components/BenefitCard';
import './app.css';
import Contact from './components/Contact';
import ChatbotHome from './components/chatbot/ChatbotHome';
import ChatbotMessages from './components/chatbot/ChatbotMessages';
import Chatbot from './components/chatbot/Chatbot';
import GlowingBackground from "./components/GlowingBackground";
import EcosystemComponent from "./components/EcosystemComponent";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  const [account, setAccount] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [page, setPage] = useState("home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); // Default theme is light
  const contractAddress = '0x574a7d6492D7634b215aBAbD2Fd241DC9233CF3A';

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }]
        }).then(() => window.ethereum.request({ method: 'eth_accounts' }));
        setAccount(accounts[0]);
        checkUserRegistration(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert('MetaMask not detected. Please install it.');
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [{ eth_accounts: {} }]
        });
        setAccount(null);
        localStorage.removeItem("walletConnected");
        alert("Wallet disconnected!");
        window.location.reload();
      } else {
        alert("MetaMask not detected.");
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error);
    }
  };

  const checkUserRegistration = async (walletAddress) => {
    try {
      if (!window.ethereum) return;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const registered = await contract.isUserRegistered(walletAddress);
      setIsRegistered(registered);
    } catch (error) {
      console.error("Error checking user registration:", error);
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme in localStorage
  };

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Glowing background effect */}
      <GlowingBackground />
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className={theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <GlowingBackground />
      <Navbar account={account} connectWallet={connectWallet} disconnectWallet={disconnectWallet} theme={theme} toggleTheme={toggleTheme} />

      {account && !isRegistered ? (
        <RegisterPopup account={account} contractAddress={contractAddress} />
      ) : (
        <>
          <Landing theme={theme} />
          <BenefitsSection theme={theme} />
          <EcosystemComponent theme={theme} />
          {/* <Contact theme={theme} /> */}
          <Chatbot theme={theme} />
          <Footer theme={theme} />
        </>
      )}
    </div>
    </ThemeContext.Provider>
    </div>
  );
};

export default App;
