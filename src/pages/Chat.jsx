import { useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { entrepreneurs, investors } from "../data/mockData";

const Chat = () => {
  const { userId } = useParams();
  const user = [...entrepreneurs, ...investors].find((u) => u.id === parseInt(userId));
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, interested in your startup!", sender: user.name, timestamp: new Date() },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: newMessage, sender: "Me", timestamp: new Date() },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl mb-4 text-blue-600">Chat with {user.name}</h2>
      <div className="bg-gray-100 p-4 rounded h-96 overflow-y-auto">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-2 ${msg.sender === "Me" ? "text-right" : "text-left"}`}
          >
            <div className="flex items-center space-x-2">
              {msg.sender !== "Me" && <div className="w-8 h-8 bg-gray-300 rounded-full" />}
              <span
                className={`inline-block p-2 rounded ${
                  msg.sender === "Me" ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                {msg.text}
              </span>
            </div>
            <p className="text-xs text-gray-500">{msg.timestamp.toLocaleTimeString()}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
};
export default Chat;