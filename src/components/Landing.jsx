import React from 'react';
import img1 from '../assets/landing.png';
import Button from './Button';

const Landing = ({ theme }) => {
  return (
    <div className={`flex justify-center items-center mt-10 min-h-screen ${theme === "dark" ? "text-white" : "text-black"}`}>
      <div className="flex flex-col md:flex-row items-center justify-center md:w-10/12 w-full">
        <div className="md:w-1/2 md:gap-5 h-full w-full px-20 flex flex-col gap-10 justify-center">
          <small className="text-lg">{theme === "dark" ? "" : ""}</small>
          <h1 className={`text-6xl font-bold ${theme === "dark" ? "text-white" : "text-black"}`}>OxETHDao Members' Club</h1>
          <p className="text-sx w-11/12">{theme === "dark" ? "" : ""}</p>
          <div className="text-sx flex flex-row gap-10">
            <div>
              <p className="mb-4"><span className="text-green-500">✔</span> Exclusive Community</p>
              <p className="mb-4"><span className="text-green-500">✔</span> Recognition and Visibility</p>
            </div>
            <div>
              <p className="mb-4"><span className="text-green-500">✔</span> Collaborative Projects</p>
              <p className="mb-4"><span className="text-green-500">✔</span> Empowerment and Impact</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full md:m-0 mt-10 flex items-center justify-center">
          <img src={img1} alt="Landing" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
