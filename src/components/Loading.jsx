import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import LibraryLogo from "../assets/Library.svg";
import ProgressBar from "@ramonak/react-progress-bar";
import { GiBlackBook } from "react-icons/gi";
export default function Loading() {
  const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingCompleted(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className={`loading ${isLoadingCompleted && "animate__loading"}`}>
        {/* <img src={LibraryLogo} loading="lazy" className="img__loading" alt="" /> */}
        <GiBlackBook className="img__loading" />
        <p className="h1__Loading">
          Library <br /> <span >Founded 1995</span>{" "}
        </p>
        <div className="progress__loading">
          <ProgressBar
            customLabelStyles={{ fontSize: 0 }}
            completed={100}
            baseBgColor="#F4AFA1 "
            transitionDuration="1.5s"
            borderRadius="0"
            animateOnRender={true}
            bgColor="black"
          />
        </div>
      </div>
    </>
  );
}
