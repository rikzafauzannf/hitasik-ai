"use client";
import React from "react";
import SuggestChat from "./suggest-chat";
import Image from "next/image";
import AddForm from "@/components/Chat/form";
import ChatBuble from "@/components/Chat/chatsbuble";
import { useState } from "react";

interface ChatProps {
  onAddItem: (item: string) => void;
}

const Chat: React.FC<ChatProps> = ({ onAddItem }) => {
  const [items, setItems] = useState<string[]>([]);
  const [showSuggestChat, setShowSuggestChat] = useState(true);

  const addItem = (item: string) => {
    setItems([...items, item]);
    setShowSuggestChat(false);
  };
  return (
    <>
      <main className="w-full px-2 md:px-10 gap-5">
        <div className="flex justify-center items-center my-4 h-1/2 w-full gap-4">
          <div className="bg-neutral p-4 rounded-lg shadow">
            <Image src={"/kota.png"} alt="" width={50} height={50} />
          </div>
          <h1 className="text-4xl font-semibold">HAITASIK</h1>
          <h1 className="text-2xl font-light px-4  border-primary border rounded-lg">
            Beta
          </h1>
        </div>
        {/* suggest */}
        {showSuggestChat && <SuggestChat />}
        <div className="w-full p-6 shadow-neutral shadow-lg rounded-lg bg-neutral">
          <h1 className="text-lg font-semibold">Chatme..</h1>
          {items.map((item, index) => (
            <ChatBuble key={index} chatsme={item} />
          ))}
        </div>
        <AddForm onAddItem={addItem} />
      </main>
    </>
  );
};

export default Chat;
