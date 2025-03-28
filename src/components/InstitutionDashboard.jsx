import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { Button } from '@/components/ui/button';

const InstitutionDashboard = ({ contract }) => {
  const [users, setUsers] = useState([]);
  const [credentials, setCredentials] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch all users and their credentials
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const userList = await contract.getAllUsers();
        setUsers(userList);

        const creds = {};
        for (const user of userList) {
          const userCreds = await contract.getUserCredentials(user);
          creds[user] = userCreds;
        }

        setCredentials(creds);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (contract) loadData();
  }, [contract]);

  const requestCredential = async (user, credentialHash) => {
    try {
      const tx = await contract.requestCredential(user, credentialHash);
      await tx.wait();
      alert('Request sent successfully!');
    } catch (err) {
      console.error(err);
      alert('Error sending request.');
    }
  };

  const verifyZKP = async (user, credentialHash) => {
    try {
      const result = await contract.verifyCredentialZKP(user, credentialHash);
      if (result) {
        alert('✅ Credential verified using ZKP');
      } else {
        alert('❌ ZKP verification failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error verifying credential');
    }
  };

  const checkAccess = async (user, credentialHash) => {
    return await contract.checkCredentialAccess(user, credentialHash);
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Institution Dashboard</h1>
      {loading ? (
        <p>Loading users and credentials...</p>
      ) : (
        users.map((user) => (
          <div key={user} className="border rounded-2xl p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">User: {user}</h2>
            {credentials[user]?.length > 0 ? (
              <div className="space-y-2">
                {credentials[user].map((cred, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-gray-50 flex justify-between items-center">
                    <span className="text-sm font-mono truncate max-w-xs">{cred}</span>
                    <div className="flex gap-2">
                      <Button onClick={() => requestCredential(user, cred)}>Request</Button>
                      <Button
                        variant="secondary"
                        onClick={async () => {
                          const access = await checkAccess(user, cred);
                          if (access) {
                            verifyZKP(user, cred);
                          } else {
                            alert('Access not granted yet.');
                          }
                        }}
                      >
                        Verify (ZKP)
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No credentials found.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default InstitutionDashboard;
