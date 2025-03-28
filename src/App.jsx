import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from './web3/abi.json';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import BenefitsSection from './components/BenefitCard';
// import RegisterForm from "./components/RegisterForm"; // Import the new form component
import './app.css';
import RegisterPopup from "./components/RegisterPopup";

const App = () => {
  const [account, setAccount] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const contractAddress = '0x574a7d6492D7634b215aBAbD2Fd241DC9233CF3A'; // Replace with actual contract address

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }]
        }).then(() =>
          window.ethereum.request({ method: 'eth_accounts' })
        );
        setAccount(accounts[0]); 
        checkUserRegistration(accounts[0]); // Check if the user is already registered
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
        // Revoke permission to access wallet (forces user to reconnect)
        await window.ethereum.request({
          method: "wallet_revokePermissions",
          params: [{ eth_accounts: {} }]
        });
  
        setAccount(null);
        localStorage.removeItem("walletConnected"); // Remove stored wallet session
  
        alert("Wallet disconnected! You will need to reconnect manually.");
  
        window.location.reload(); // Refresh page to reset state
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

  return (
    <div>
      <Navbar account={account} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
      {account && !isRegistered ? (
        <RegisterPopup account={account} contractAddress={contractAddress} />
      ) : (
        <>
          <Landing />
          <BenefitsSection />
        </>
      )}
    </div>
  );
};

export default App;
