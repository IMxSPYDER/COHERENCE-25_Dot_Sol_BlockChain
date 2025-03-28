import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ethers } from "ethers";
import contractABI from "../web3/abi.json";

const RegisterPopup = ({ account, contractAddress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!role || !name || !email) {
      alert("Please fill all fields.");
      return;
    }
  
    // Map role strings to numerical values
    const roleMapping = {
      user: 0, // Assuming "user" corresponds to 0 in the smart contract
      university: 1, // Assuming "university" corresponds to 1 in the smart contract
    };
  
    if (!(role in roleMapping)) {
      alert("Invalid role selected.");
      return;
    }
  
    try {
      setLoading(true);
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
  
      // Pass the numerical role instead of the string
      const tx = await contract.registerUser(name, email, roleMapping[role], { from: account });
      await tx.wait();
  
      alert("Registration successful!");
      setIsOpen(false); // Close popup after successful registration

      // Redirect based on role
      if (role === "user") {
        navigate("/user-dashboard", { state: { account, contractAddress } });
      } else if (role === "university") {
        navigate("/university-dashboard");
      }

    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4 text-center">Register Your Account</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full bg-gray-600 p-2 border rounded"
              required
            >
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="university">University/Company</option>
            </select>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;
