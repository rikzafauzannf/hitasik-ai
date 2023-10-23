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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            architecto incidunt mollitia nostrum illum! Voluptates sunt
            repellendus unde itaque tempore.
          </p>
          <div className="w-full h-screen border border-double border-2 my-5 p-6 rounded-lg items-baseline overflow-auto">
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hour ago</time>
              </div>
              <div className="chat-bubble">I loved you.</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hour ago</time>
              </div>
              <div className="chat-bubble">I loved you.</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hour ago</time>
              </div>
              <div className="chat-bubble">I loved you.</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hour ago</time>
              </div>
              <div className="chat-bubble">I loved you.</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hour ago</time>
              </div>
              <div className="chat-bubble">I loved you.</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
            <div className="chat chat-start">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
            <div className="chat chat-end">
              <div className="chat-header">
                Obi-Wan Kenobi
                <time className="text-xs opacity-50">2 hour ago</time>
              </div>
              <div className="chat-bubble">I loved you.</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
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
