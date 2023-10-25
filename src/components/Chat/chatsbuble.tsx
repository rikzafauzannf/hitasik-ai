import React, { FunctionComponent } from "react";
import Image from "next/image";
interface ChatBubleProps {
  chatsme: string;
}

const ChatBuble: FunctionComponent<ChatBubleProps> = (
  props: ChatBubleProps
) => {
  const { chatsme } = props;
  return (
    <>
      <div className="chat chat-start my-4 w-full">
        <div className="chat-image avatar">
          <div className="rounded-full">
            <Image src={"/profile.jpg"} width={40} height={40} alt="" />
          </div>
        </div>
        <div className="chat-bubble bg-slate-600 shadow-md text-ellipsis overflow-hidden">
          {chatsme}
        </div>
      </div>
    </>
  );
};

export default ChatBuble;
