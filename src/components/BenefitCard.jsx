import img1 from '../assets/icon.png'
const benefits = [
  {
    icon: img1,
    title: " Self-Sovereign Identity (SSI)",
    description: "A user-friendly interface where individuals can manage their digital identity, view issued credentials, track verification requests, and control access to their personal data."
  },
  {
    icon: img1,
    title: "Zero-Knowledge Proofs (ZKP)",
    description: "Enable users to verify specific attributes (e.g., “I am over 18”) without revealing full details (e.g., birthdate). This enhances privacy while maintaining trust."
  },
  {
    icon: img1,
    title: "Interoperability with Other DID Standards",
    description: "Support for multiple decentralized identity protocols (e.g., W3C DID, Hyperledger Indy, Sovrin, etc.), ensuring seamless integration across various blockchain ecosystems."
  },
  {
    icon: img1,
    title: "Smart Contract-Based Identity Verification",
    description: "Use blockchain-powered smart contracts to automate and secure identity verification, reducing fraud and eliminating intermediaries."
  },
  {
    icon: img1,
    title: "Revocable & Expiring Credentials",
    description: "Allow issuers to revoke or set expiration dates for credentials, ensuring outdated or compromised credentials don’t remain in use."
  },
  {
    icon: img1,
    title: "Decentralized Login",
    description: "Users can log in without relying on traditional passwords, using decentralized authentication methods like Web3 wallets or cryptographic key pairs."
  }
];

export default function BenefitCard() {
  return (
    <div className="text-white py-16 px-6 text-center">
      <small className="uppercase text-lg">Benefits of TruChain</small>
      <h2 className="text-5xl font-bold my-4">Unlock Exclusive Opportunities</h2>
      <p className="text-gray-300 max-w-3xl text-lg mx-auto mb-10">
        As a member of the TruChain community, you gain access to a world of exclusive opportunities that empower you to thrive personally and professionally.
      </p>
    <div className="grid md:grid-cols-3 gap-6 p-10 px-20 text-white w-5/6 mx-auto">
      {benefits.map((benefit, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-3xl shadow-lg text-center ">
          <div className="flex justify-center mb-4 ">
            <img src={benefit.icon} alt={benefit.title} className="w-20 h-20 object-contain shadow-lg rounded-lg bg-gray-700 boxshadow" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
          <p className="text-gray-400 text-sx">{benefit.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
}