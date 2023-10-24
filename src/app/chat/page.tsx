import React from "react";
import SuggestChat from "./suggest-chat";
import Image from "next/image";
const Chat = () => {
  return (
    <>
      <main className="w-full px-2 md:px-10 gap-5">
        <div className="">
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
          <SuggestChat />
          <div className="">
            <div className="w-full p-6 shadow-neutral shadow-lg p-6 rounded-lg">
              <h1 className="text-lg font-semibold">Chatme..</h1>
            </div>
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-secondary w-full max-w-full"
              />
              <button className="w-20 btn btn-secondary">send</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Chat;
