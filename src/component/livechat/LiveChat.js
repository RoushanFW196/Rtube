import React, { useEffect } from "react";
import { ChatMessage } from "./ChatMessage.js";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/ChatSlice.js";
import randomNameGenerator from "../../utils/helper.js";
import { randomMessageGenerator } from "../../utils/helper.js";

const LiveChat = () => {
  const AllChatMessages = useSelector((store) => store.chat.message);
 
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: randomNameGenerator(),
          message: randomMessageGenerator(),
        })
      );
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (AllChatMessages.length == 0) return;

  return (
    <>
      {AllChatMessages.map((message, index) => {
        return (
          <div className=" flex flex-col-reverse" key={index}>
            <ChatMessage name={message.name} message={message.message} />
          </div>
        );
      })}
    </>
  );
};

export default LiveChat;
