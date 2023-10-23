import React from "react";
import CardSuggest from "@/components/cardsuggest";
const Chat = () => {
  const suggestData = [
    {
      title: "Testing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
    {
      title: "fitur 2",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
    {
      title: "fitur 3",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
    {
      title: "fitur 4",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
  ];
  return (
    <>
      <main className="w-full px-5 md:px-10 py-6 gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {suggestData.map((item) => (
            <CardSuggest
              key={item.title}
              title={item.title}
              description={item.description}
              listcontent={item.listContent.join("\n")}
            />
          ))}
        </div>
        <div>
          <div className="w-full h-screen border border-double border-2 my-5 p-6 rounded-lg">
            <div>s</div>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-secondary w-full max-w-full"
            />
            <button className="w-20 btn btn-secondary">send</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Chat;
