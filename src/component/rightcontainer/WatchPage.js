import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../store/menuslice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "../comment/CommentContainer";
import LiveChat from "../livechat/LiveChat";
import { addMessage } from "../../store/ChatSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [showChat, setShowChat] = useState(false);
  const [typedMessage, setTypedMessage] = useState("");
  const [searchparams] = useSearchParams();

  let videoid = searchparams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="flex flex-col">
      <div className="col-span-11 rounded-lg flex">
        <div className="">
          <iframe
            style={{
              paddingLeft: "100px",
              paddingTop: "10px",
              width: "825px",
              height: "407px",
            }}
            src={"https://www.youtube.com/embed/" + videoid}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        {!showChat ? (
          <div
            onClick={() => setShowChat(true)}
            className="w-[385px] bg-gray-200 h-[30px] text-center m-2 rounded-full cursor-pointer  font-bold hover:bg-gray-500 border-slate-400 ml-14"
          >
            Show Chat
          </div>
        ) : (
          <div className="flex flex-col">
            <div className="w-[385px] border border-gray-500  h-[400px] mt-2 ml-12 px-4 rounded-lg overflow-y-scroll overflow-x-hidden">
              <LiveChat />
            </div>

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Chat ..."
                className="w-[350px] border rounded-lg border-gray-300 p-1 mt-2 ml-12"
                value={typedMessage}
                onChange={(e) => setTypedMessage(e.target.value)}
              />
              <div
                style={{
                  width: "37px",
                  height: "37px",
                  fill: "currentcolor",
                  cursor: "pointer",
                }}
                onClick={() => {
                  dispatch(
                    addMessage({
                      name: "rousan",
                      message: typedMessage,
                    })
                  );

                  setTypedMessage("");
                }}
              >
                <svg
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <path
                    d="M5,12L3,3l19,9L3,21L5,12z M5.82,12.93L17,12L5.82,11.07l-1.4-6.29L19.66,12 L4.42,19.22L5.82,12.93z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>

            <div
              onClick={() => setShowChat(false)}
              className="w-[385px] bg-gray-200 h-[30px] text-center m-2 rounded-full cursor-pointer  font-bold hover:bg-gray-500 border-slate-400 ml-14" // margin-left: 52px;
            >
              Hide Chat
            </div>
          </div>
        )}
      </div>

      <CommentContainer />
    </div>
  );
};

export default WatchPage;
