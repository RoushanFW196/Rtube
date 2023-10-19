import React, { useEffect, useState } from "react";
import {
  MenuOutlined,
  YoutubeOutlined,
  BellOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {cachedSearch} from '../../store/searchSlice';

import { useDispatch,useSelector } from "react-redux";
import { toggleMenu } from "../../store/menuslice";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestiondata, setSuggestionData] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const cachedSearchdata = useSelector((store) => store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    if (cachedSearchdata[searchQuery]) {
      setSuggestionData(cachedSearchdata[searchQuery]);
    } else {
      const timer = setTimeout(() => {
        getSearchSugestions();
      }, 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchQuery]);

  const getSearchSugestions = async () => {
    const data = await fetch(
      `http://suggestqueries.google.com/complete/search?q=${searchQuery}&hl=en&ds=yt&&regionCode=IN&client=youtube&hjson=t&cp=1w`
    );
    const jsdata = await data.json();

    let respdata = jsdata[1].map((el) => el[0]);
    setSuggestionData(respdata);
    dispatch(cachedSearch({[searchQuery]:respdata}));
  };

  return (
    <div className="grid grid-flow-col p-4  shadow-md bg-cyan-300 items-center">
      <div className="flex col-span-1 cursor-pointer">
        <div
          style={{ width: "37px", height: "37px", fill: "currentcolor" }}
          onClick={toggleMenuHandler}
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
            <path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
          </svg>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          alt="noimg"
          style={{ width: "37px", height: "37px" }}
          className="mx-2"
        />

        <img
          src="/logo.png"
          alt="noimg"
          style={{ width: "120px", height: "37px" }}
        />
      </div>

      <div className="flex col-span-10">
        <input
          type="text"
          placeholder="search"
          className="w-1/2 border border-gray-500 rounded-l-full pl-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
        />
        <div
          style={{ width: "37px", height: "37px", fill: "currentcolor" }}
          className="border border-gray-500 rounded-r-full p-2 bg-gray-300"
        >
          <svg
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            focusable="false"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
          </svg>
        </div>
        <div style={{ width: "37px", height: "37px", fill: "currentcolor" }}>
          <svg
            viewBox="0 0 24 24"
            focusable="false"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
            }}
          >
            <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
          </svg>
        </div>
      </div>

      {showSuggestion && (
        <div className="w-4/12 bg-gray-100 h-[300] z-40 rounded-lg  shadow-lg fixed top-14 ml-72 content-center">
          <ul className="divide-y divide-slate-200">
            {suggestiondata.length > 0 &&
              suggestiondata.map((el, ind) => (
                <li
                  className="px-2 m-2 hover:bg-gray-300 hover:rounded-lg "
                  key={ind}
                >
                  {el}
                </li>
              ))}
          </ul>
        </div>
      )}

      <div className="flex flex-row-reverse col-span-1">
        <img
          draggable="false"
          alt="Avatar image"
          style={{ width: "37px", height: "37px" }}
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        />

        <div style={{ width: "37px", height: "37px", fill: "currentcolor" }}>
          <svg
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            focusable="false"
            style={{
              pointerEvents: "none",
              display: "block",
              width: "37px",
              height: "37px",
            }}
          >
            <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
          </svg>
        </div>

        <div style={{ width: "37px", height: "37px", fill: "currentcolor" }}>
          <svg
            style={{
              pointerEvents: "none",
              display: "block",
              width: "100%",
              height: "100%",
            }}
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2zm3-7H3v12h14v-6.39l4 1.83V8.56l-4 1.83V6m1-1v3.83L22 7v8l-4-1.83V19H2V5h16z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
