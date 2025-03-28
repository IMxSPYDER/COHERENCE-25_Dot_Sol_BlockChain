import React, { useState } from "react";
import { Send } from "lucide-react";

export default function ChatbotHome({ setPage }) {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! 👋 How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");

    // Simulated bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I’m here to help! You can ask me anything." },
      ]);
    }, 1000);
  };

  return (
    <div className="w-[350px] mx-auto bg-white/30 backdrop-blur-lg overflow-hidden border h-[75vh] flex flex-col justify-between z-50 relative">
      {/* Header */}
      <div className="bg-gradient-to-b overflow-hidden rounded-t-lg from-[#191D37] to-[#3B3F5C] text-white p-5 flex items-center justify-between z-50 relative">
        <span className="text-lg font-bold">Truman</span>
      </div>

      {/* Messages Display */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 z-50 relative">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg w-fit ${
              msg.sender === "user"
                ? "bg-blue-600 text-white self-end ml-auto"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 border-t flex z-50 relative">
        <input
          type="text"
          className="w-full p-3 border-2 border-midnight-400  rounded-l-lg outline-none text-white"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-600 text-white px-4 rounded-r-lg flex items-center"
          onClick={sendMessage}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
