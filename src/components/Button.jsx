import React from "react";

const Button = () => {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center gap-2 shadow-md transition cursor-pointer">
        Get Connected
        <span className="text-lg">↗</span>
      </button>
    </div>
  );
};

export default Button;
