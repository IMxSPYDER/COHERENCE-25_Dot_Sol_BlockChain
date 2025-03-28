import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { motion } from "framer-motion";
import { Eye, MoreHorizontal } from "lucide-react";
import ABI from "../web3/abi.json";
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

      const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
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
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🎓 Your Blockchain Credentials</h1>
      <p className="text-gray-600 mb-6">
        Wallet: <span className="font-mono">{wallet}</span>
      </p>

      <Button onClick={fetchCredentials} disabled={loading} className="mb-6">
        {loading ? "Loading..." : "🔄 Refresh Credentials"}
      </Button>

      {credentials.length === 0 && !loading && (
        <p className="text-gray-500">No credentials found.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse bg-gray-200 h-52 rounded-2xl"
              ></div>
            ))
          : credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col gap-3 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">
                      {cred.certificateName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Blockchain Credential Authority
                    </p>
                  </div>
                  <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    Verified
                  </span>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <p>Issued: 2024-01-01</p>
                  <p>Expires: 2030-12-31</p>
                </div>

                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Full Name</span>
                    <span className="font-medium">{cred.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date of Birth</span>
                    <span className="font-medium">{cred.dob}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Certificate ID</span>
                    <span className="font-medium">••••••••</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">IPFS Hash</span>
                    <span className="font-medium truncate max-w-[120px]">
                      {cred.documentIPFSHash}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2 cursor-pointer hover:text-gray-800">
                    <Eye className="w-4 h-4" />
                    <span>Show</span>
                  </div>
                  <MoreHorizontal className="w-5 h-5 cursor-pointer" />
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  );
}
