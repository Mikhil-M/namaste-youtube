import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParams] = useSearchParams();
  return (
    <div className="flex flex-col w-full">
      <div className="px-4 py-2 flex w-full">
        <div>
          <iframe
            width="1500"
            height="700"
            src={ "https://www.youtube.com/embed/" + searchParams.get("v") }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="w-full">
          <LiveChat />
        </div>        
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
