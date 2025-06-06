import React from "react";

export default function page() {
  return (
    <div className="container relative flex justify-center  align-center items-center h-[100vh] bg-black">
      <div className="w-8/12">
        <div className="block">
          <div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl text-white leading-tight">
              <strong className="font-bold">Designning</strong>{" "}
              <span className="font-thin">a Better </span>
              <br />
              <span className="font-thin">
                <strong className="font-bold">World</strong> Today
              </span>
            </h1>
          </div>
          <div className="w-96 text-white mt-4 opacity-60">
            <p>
              Welcome to our world of endless imagination and boundless
              creativity. Together, let's embark on a remarkable journey where
              dreams become tangible realities.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
