import React from "react";
import rock from '../assets/rock.png';

const EcosystemComponent = ({ theme }) => {
  return (
    <div className={`py-16 px-8 md:px-10 mx-auto flex flex-col md:flex-row items-center justify-between w-4/5`}>
      <div className="md:w-1/2">
        <p className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"} uppercase text-xs`}>
          Accelerate Your Journey
        </p>
        <h1 className={`text-4xl uppercase leading-14 md:text-5xl font-bold mt-2 ${theme === "dark" ? "text-white" : "text-black"}`}>
          Join the fastest <br /> 
          <span className={`${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>growing ecosystem</span>
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "2M+", desc1: "Player wallets created", desc2: "Gaining access to OxHash ecosystem of games and digital assets" },
            { title: "Thousands", desc1: "Developers", desc2: "Gets your games to market faster without the need for teams of blockchain engineers" },
            { title: "10x", desc1: "Speed to Launch", desc2: "High transaction per second gasless mint, burn and transfer to launch your NFT collections & tokens" },
            { title: "96%", desc1: "Development Cost", desc2: "Save time and money with OxHash developer-first suite of SDKs and UI tools" }
          ].map((item, index) => (
            <div key={index} className={`border-l-2 pl-4 ${theme === "dark" ? "border-gray-400" : "border-gray-700"}`}>
              <h2 className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>{item.title}</h2>
              <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{item.desc1}</p>
              <p className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-400"}`}>{item.desc2}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-1/2 flex justify-end items-center mt-10 md:mt-0">
        <img src={rock} alt="Ecosystem Graphic" className="w-full max-w-md object-cover" />
      </div>
    </div>
  );
};

export default EcosystemComponent;
