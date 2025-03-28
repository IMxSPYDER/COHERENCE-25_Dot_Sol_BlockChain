import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ABI from "../web3/abi.json"
import Button from "./Button";

const CONTRACT_ADDRESS = "0xF02dC6769176f9737022142b81E058fF1CA0F502";


export default function UserCredentialsPage() {
  const [credentials, setCredentials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState("");

  const fetchCredentials = async () => {
    try {
      if (!window.ethereum) return alert("Please install MetaMask");
  
      setLoading(true);
  
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = signer.address;
      setWallet(address);
  
      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer); // Signer is required here!
      const data = await contract.getUserCredentials();
      setCredentials(data);
    } catch (error) {
      console.error("Error fetching credentials:", error);
    } finally {
      setLoading(false);
    }
  };
  
  

  useEffect(() => {
    fetchCredentials();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Blockchain Credentials</h1>
      <Button onClick={fetchCredentials} disabled={loading} className="mb-4">
        {loading ? "Loading..." : "Refresh Credentials"}
      </Button>

      {credentials.length === 0 && !loading && (
        <p className="text-gray-500">No credentials found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {credentials.map((cred, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="rounded-2xl shadow-md">
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{cred.certificateName}</h2>
                <p><strong>Name:</strong> {cred.name}</p>
                <p><strong>Certificate ID:</strong> {cred.certificateId}</p>
                <p><strong>Date of Birth:</strong> {cred.dob}</p>
                <p><strong>Age:</strong> {cred.age.toString()}</p>
                <p><strong>IPFS Hash:</strong> {cred.documentIPFSHash}</p>
                <p>
                  <strong>Status:</strong>{" "}
                  {cred.isVerified
                    ? "✅ Verified"
                    : cred.isRevoked
                    ? "❌ Revoked"
                    : "⏳ Pending"}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
