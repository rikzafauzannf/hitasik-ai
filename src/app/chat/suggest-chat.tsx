import React from "react";
import CardSuggest from "@/components/cardsuggest";

const SuggestChat = () => {
  const suggestData = [
    {
      title: "Pelayanan",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
    {
      title: "Kesehatan",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
    {
      title: "Pemerintahan",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
    {
      title: "Lainnya",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: ["test1", "test2", "test3"],
    },
  ];
  return (
    <>
      <div className="my-6">
        <h1 className="text-2xl font-bold mb-3">Top Suggest by Category</h1>
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
      </div>
    </>
  );
};

export default SuggestChat;
