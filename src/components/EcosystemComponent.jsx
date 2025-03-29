import React from "react";
import rock from '../assets/rock.png'

const EcosystemComponent = () => {
  return (
    <div className="text-white py-16 px-8 md:px-10 mx-auto flex flex-col md:flex-row items-center justify-between w-4/5">
      <div className="md:w-1/2">
        <p className="text-blue-400 uppercase text-sx">FUTURE OF DECENTRALIZED IDENTITY</p>
        <h1 className="text-4xl uppercase leading-14 md:text-5xl font-bold mt-2">
        Secure, and Private, <br /> <span className="text-blue-400">TruChain </span>
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">2M+</h2>
            <p className="text-gray-400 text-lg">Digital Identities Created</p>
            <p className="text-sx text-gray-500">Empowering users with verifiable, self-sovereign digital identities.</p>
          </div>
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">Trusted by</h2>
            <p className="text-gray-400 text-lg">Leading Organizations</p>
            <p className="text-sx text-gray-500">Universities, enterprises, and governments.</p>
          </div>
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">10x</h2>
            <p className="text-gray-400 text-lg">Faster Identity Verification</p>
            <p className="text-sx text-gray-500">Instant, privacy-preserving credential verification without intermediaries.</p>
          </div>
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">90%</h2>
            <p className="text-gray-400 text-lg">Cost Reduction</p>
            <p className="text-sx text-gray-500">Eliminate third-party verification fees with blockchain-powered authentication.</p>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end items-center mt-10 md:mt-0">
        <img src={rock} alt="Ecosystem Graphic" className="w-full max-w-md object-cover" />
      </div>
    </div>
  );
};

export default EcosystemComponent;
