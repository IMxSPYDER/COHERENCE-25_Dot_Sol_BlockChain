import React from 'react'
import { useEffect, useState } from "react";

import { ethers } from "ethers";
import contractABI from './web3/abi.json'
import Home from './Home'
import BenefitCard from './components/BenefitCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import BenefitsSection from './components/BenefitCard'
import './app.css'
const App = () => {
  const [account, setAccount] = useState(null);

  const contractAddress = '0x1ccc2d028308C3178EC0ddA9c670fc4804f47e1c'; // Replace with your contract address
  

  // Function to connect wallet and prompt account selection
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account permissions to force MetaMask to show account selection
        const accounts = await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }]
        }).then(() =>
          window.ethereum.request({ method: 'eth_accounts' })
        );
        setAccount(accounts[0]); // Set to the first selected account
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      alert('MetaMask not detected. Please install it.');
    }
  };

  // Check if a wallet is already connected on load
  useEffect(() => {
    const checkIfWalletIsConnected = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      }
    };
    checkIfWalletIsConnected();
  }, []);

  const getContract = () => {
    if (!window.ethereum) {
      alert("MetaMask not detected");
      return;
    }
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
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
  
  return (
    <div>
      {/* <Home/> */}
      {/* <BenefitCard/> */}
      {/* <Footer/> */}
      <Navbar account={account} connectWallet={connectWallet} disconnectWallet={disconnectWallet} />
      <Landing/>
      <BenefitsSection/>
      <Footer/>
      {/* <Card/> */}
    </div>
  )
}

export default App