import React, { useState } from "react";
import Message from "./Message";
import Image from "next/image";
import { SendIcon } from "lucide-react";
import Input from "./ui/Input";
import { Button } from "./ui/Button";

interface ChatProps {
  name: string;
  image: string;
  initialMessage: string;
  clientName: "Alice" | "Bob" | "Charlie";
}

const Chat: React.FC<ChatProps> = ({
  name,
  image,
  initialMessage,
  clientName,
}) => {
  const [messages, setMessages] = useState([
    { message: initialMessage, received: true },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newMessage.trim()) return;
    setMessages([
      ...messages,
      { message: newMessage, received: false },
      { message: "Lorem, Impsun", received: true },
    ]);

    setNewMessage("");
  };

  return (
    <div className="flex h-96 w-full max-w-full flex-col overflow-hidden rounded-lg border border-gray-200">
      <header className="flex items-center border-b p-4">
        <div className="flex items-center space-x-4">
          <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Image alt="Logo" src={image} width="40" height="40" />
          </span>
          <h1 className="text-xl font-bold">{name}</h1>
        </div>
      </header>
      <div className="flex flex-1 flex-col-reverse overflow-y-auto overflow-x-hidden p-4">
        <div>
          {messages.map((msg, index) => (
            <Message
              key={index}
              message={msg.message}
              received={msg.received}
              clientName={clientName}
            />
          ))}
        </div>
      </div>
      <form
        className="flex items-center gap-4 border-t p-4"
        onSubmit={sendMessage}
      >
        <Input
          type="text"
          placeholder="Digite sua mensagem aqui..."
          value={newMessage}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewMessage(e.target.value)
          }
        />
        <Button type="submit">
          <SendIcon />
        </Button>
      </form>
    </div>
  );
};

export default Chat;
