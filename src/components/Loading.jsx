import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);

  useEffect(() => {
     setTimeout(() => {
      setIsLoadingCompleted(true);
      
    }, 2000);
  }, []);


  return (
    <>
      <div className={`loading   ${isLoadingCompleted && "animate__loading"}`}>
        <FaSpinner className="animate__spin">Loading..</FaSpinner>
      </div>
    </>
  );
}
