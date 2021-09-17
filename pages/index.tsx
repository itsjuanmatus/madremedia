import { motion } from "framer-motion";
import type { NextPage } from "next";
import { useState } from "react";
import useMousePosition from "../hooks/useMousePosition";

const Home: NextPage = () => {
  const { x, y } = useMousePosition();

  const Cards = [
    {
      Title: "STUDY",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro voluptatum facere eum, quasi enim harum optio amet asperiores laudantium laboriosam dolores dolorem, praesentium doloremque libero rem nobis ullam debitis.",
    },
    {
      Title: "CREATE",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro voluptatum facere eum, quasi enim harum optio amet asperiores laudantium laboriosam dolores dolorem, praesentium doloremque libero rem nobis ullam debitis.",
    },
    {
      Title: "GROW",
      Description:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. In porro voluptatum facere eum, quasi enim harum optio amet asperiores laudantium laboriosam dolores dolorem, praesentium doloremque libero rem nobis ullam debitis.",
    },
  ];

  const [hoverState, setHoverState] = useState(false);

  return (
    <div className="mt-10 mx-20 flex flex-col">
      <div className="flex justify-between items-center mb-10 pr-36">
        <span className="mainText">Madre</span>
        <div className="w-60">
          <h3 className="font-semibold text-2xl">Who we are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            provident quod sint ratione aspernatur.
          </p>
        </div>
      </div>
      <div className="-mt-16 mb-10">
        <p className="marquee">
          <span className="mainText">
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media Media Media Media Media
            Media Media Media Media Media Media Media &nbsp;
          </span>
        </p>
        {/* <p className="marquee marquee2">
          <span className="mainText">Media Media Media Media&nbsp;</span>
        </p> */}
      </div>
      <div className="flex mt-44 ml-10 space-x-10 items-center cursor-pointer">
        <div className="font-semibold text-white rounded-full bg-black flex items-center justify-center w-36 h-36 text-xl">
          scroll down
        </div>
        <span className="mainText">Agency</span>
      </div>

      <div className="-mt-28 -z-1 imageBehind">
        <img
          src="/images/miami.webp"
          className="relative filter brightness-90 "
        />

        <div className="flex -mt-96 absolute w-full max-w-7xl">
          <h1 className="text-white text-8xl absolute  bg-black -mt-64 px-10 py-5 pl-36">
            {" "}
            WHAT WE DO
          </h1>
          <h1 className="absolute bg-black -mt-24 pr-5 py-5 pl-36 text-white text-2xl">
            {" "}
            BEST BRANDING FOR YOUR BUSINESS
          </h1>
          <div className="grid grid-cols-3 gap-10 w-full lg:ml-36 mt-14">
            {Cards.map((el) => {
              return (
                <div
                  className="bg-black p-10 w-full ml-0 max-w-2xl"
                  key={el.Title}
                >
                  <h3 className="text-white text-3xl font-semibold mb-5">
                    {el.Title}
                  </h3>
                  <p className="text-white">{el.Description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-pink w-full h-96 p-10">
        <h1 className="text-black font-bold text-8xl">OUR PROJECTS</h1>
        <div className="text-black font-bold text-3xl mt-20 relative">
          HOVER ON THIS
          <div className="absolute w-36 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
