"use client";
import Chat from "./Chat";

const ChatContainer = () => {
  return (
    <div>
      <Chat
        name="Mateus Mendes"
        image="/logo.png"
        initialMessage="Esse aqui é um exemplo de Chatbot, aqui onde você inciará o seu teste."
        clientName="Alice"
      />
    </div>
  );
};

export default ChatContainer;
