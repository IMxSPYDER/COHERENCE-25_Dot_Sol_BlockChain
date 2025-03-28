import React, { useEffect, useState } from "react";
import { ethers, Interface } from "ethers";
import DecentralizedIdentity from "../web3/abi.json";

const contractAddress = "0xBdF2492d91bf0A83f1a10311d8000Eda2032cBde";

const InstitutionDashboard = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [requested, setRequested] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsersFromContract();
  }, []);

  const fetchUsersFromContract = async () => {
    try {
      if (!window.ethereum) return alert("Please connect wallet");
  
      setLoading(true);
      setError("");
  
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        DecentralizedIdentity,
        signer
      );
  
      const blockNumber = await provider.getBlockNumber();
  
      const eventTopic = contract.interface.getEvent("UserRegistered").topicHash;
  
      const logs = await provider.getLogs({
        address: contractAddress,
        fromBlock: 0,
        toBlock: blockNumber,
        topics: [eventTopic],
      });
  
      const allUsers = [];
  
      for (const log of logs) {
        const parsed = contract.interface.parseLog(log);
        const userAddress = parsed.args[0];
  
        try {
          const userData = await contract.getUserDetails(userAddress);
  
          allUsers.push({
            address: userAddress,
            name: userData[0],
            email: userData[1],
            credentials: [], // You can populate this if needed
          });
        } catch (e) {
          console.warn(`Skipping user ${userAddress}:`, e.message);
        }
      }
  
      setUsers(allUsers);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const requestDocument = async (userAddress, hash) => {
    try {
      if (!window.ethereum) return alert("Please connect wallet");

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        contractAddress,
        DecentralizedIdentity.abi,
        signer
      );

      const tx = await contract.requestCredential(userAddress, hash);
      await tx.wait();

      setRequested((prev) => ({
        ...prev,
        [`${userAddress}_${hash}`]: true,
      }));

      alert("Access request sent.");
    } catch (err) {
      console.error("Error requesting document:", err);
      alert("Failed to request document");
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  return (
    <div className="p-8 grid gap-6">
      <h1 className="text-3xl font-bold mb-4">Institution Dashboard</h1>

      <input
        type="text"
        placeholder="Search User by Name or Email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-md p-2 border border-gray-300 rounded-lg"
      />

      {loading && <p>Loading users...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto mt-6">
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(
                (u) =>
                  u.name.toLowerCase().includes(search.toLowerCase()) ||
                  u.email.toLowerCase().includes(search.toLowerCase())
              )
              .map((user, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => openModal(user)}
                >
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <h2 className="text-xl font-semibold mb-4">
              {selectedUser.name}'s Credentials
            </h2>
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={closeModal}
            >
              ✕
            </button>
            <ul className="space-y-3">
              {selectedUser.credentials.length === 0 && (
                <p>No credentials found</p>
              )}
              {selectedUser.credentials.map((cred, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
                >
                  <div>
                    <p className="font-medium">{cred.name}</p>
                    {cred.isVerified && (
                      <p className="text-green-600 text-xs">Verified</p>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      className="px-2 py-1 text-gray-700 hover:bg-gray-300 rounded"
                      onClick={() =>
                        requestDocument(selectedUser.address, cred.hash)
                      }
                    >
                      Request
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstitutionDashboard;
