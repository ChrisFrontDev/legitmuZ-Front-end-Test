import Image from "next/image";
import React from "react";

interface MessageProps {
  message: string;
  received: boolean;
  clientName?: "Alice" | "Bob" | "Charlie";
}

const Message: React.FC<MessageProps> = ({ message, received, clientName }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case "Alice":
        return "/icons/alice.jpeg";
      case "Bob":
        return "/icons/bob.jpeg";
      case "Charlie":
        return "/icons/charlie.jpeg";
      default:
        return "/icons/default.png";
    }
  };

  return (
    <div
      className={`flex ${
        received ? "flex-row" : "flex-row-reverse"
      } items-center gap-4 my-2`}
    >
      {!received && (
        <Image
          className="rounded-full"
          src={getIcon(clientName!)}
          alt="Client Icon"
          width="30"
          height="30"
        />
      )}
      <div
        className={`rounded-lg p-4 text-sm break-words ${
          received ? "bg-gray-100" : "bg-primary text-white"
        } max-w-[85%]`}
      >
        {message}
      </div>
    </div>
  );
};

export default Message;
