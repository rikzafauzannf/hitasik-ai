import React from "react";
import HistoryChat from "./historyCard";
const Asside = () => {
  const History = [
    {
      title: "Testing1",
      record: "22-sep-2023",
    },
    {
      title: "Testing2",
      record: "24-sep-2023",
    },
    {
      title: "Testing3",
      record: "26-sep-2023",
    },
    {
      title: "Testing3",
      record: "26-sep-2023",
    },
  ];
  const LastHistory = [
    {
      title: "Testing1",
      record: "22-sep-2023",
    },
  ];
  return (
    <>
      <div className="w-full border-gray-500 p-6 shadow-lg ">
        <button className="btn btn-primary btn-outline w-full">New Chat</button>
        <hr className="my-2" />
        <p className="text-sm text-gray-400">Now..</p>
        {History.map((item) => (
          <HistoryChat
            key={item.title}
            title={item.title}
            record={item.record}
          />
        ))}
        <p className="text-sm text-gray-400">Last History..</p>
        {LastHistory.map((item) => (
          <HistoryChat
            key={item.title}
            title={item.title}
            record={item.record}
          />
        ))}
      </div>
    </>
  );
};

export default Asside;
