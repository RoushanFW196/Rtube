import React from "react";
import {ChatMessage} from './ChatMessage.js' ;

const LiveChat = () => {
  return (
    <div>
        <h1>this is the livechat</h1>
      <ChatMessage name="Roushan" message="hello world" />
    </div>
  );
};

export default LiveChat;
