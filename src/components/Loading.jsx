import React from "react";

export default function Loading() {
  return (
    <div
      className="overflow-hidden min-h-screen w-full text-[#7342d6] flex justify-center items-center text-4xl"
      style={{ backgroundColor: "rgba(115, 66, 214, 0.1)" }}
    >
      <h1>Loading...</h1>
    </div>
  );
}
