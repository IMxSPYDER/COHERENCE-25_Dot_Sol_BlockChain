import React from "react";
import rock from '../assets/rock.png'

const EcosystemComponent = () => {
  return (
    <div className="text-white py-16 px-8 md:px-10 mx-auto flex flex-col md:flex-row items-center justify-between w-4/5">
      <div className="md:w-1/2">
        <p className="text-blue-400 uppercase text-sx">Accelerate Your Journey</p>
        <h1 className="text-4xl uppercase leading-14 md:text-5xl font-bold mt-2">
          Join the fastest <br /> <span className="text-blue-400">growing ecosystem</span>
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">2M+</h2>
            <p className="text-gray-400 text-lg">Player wallets created</p>
            <p className="text-sx text-gray-500">Gaining access to OxHash ecosystem of games and digital assets</p>
          </div>
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">Thousands</h2>
            <p className="text-gray-400 text-lg">Developers</p>
            <p className="text-sx text-gray-500">Gets your games to market faster without the need for teams of blockchain engineers</p>
          </div>
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">10x</h2>
            <p className="text-gray-400 text-lg">Speed to Launch</p>
            <p className="text-sx text-gray-500">High transaction per second gasless mint, burn and transfer to launch your NFT collections & tokens</p>
          </div>
          <div className="border-l-2 border-gray-400 pl-4">
            <h2 className="text-5xl font-bold">96%</h2>
            <p className="text-gray-400 text-lg">Development Cost</p>
            <p className="text-sx text-gray-500">Save time and money with OxHash developer-first suite of SDKs and UI tools</p>
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
