import React from "react";
import SuggestChat from "./suggest-chat";
const Chat = () => {
  return (
    <>
      <main className="w-full px-5 md:px-10 py-6 gap-5">
        <div>
          <h1 className="text-2xl font-extrabold">
            <span className="text-primary">Chat.Ai</span> Informasi Kota
            Tasikmalaya
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            illum dignissimos deserunt. Iste repudiandae quam voluptates cum
            soluta doloribus debitis blanditiis ullam quibusdam esse non unde,
            earum maiores rerum laudantium.
          </p>
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
        {/* suggest */}
        <SuggestChat />
      </main>
    </>
  );
};

export default Chat;
