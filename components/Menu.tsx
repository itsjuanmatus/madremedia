import Link from "next/link";
import Image from "next/image";
import austin from "../public/images/austin.webp";
import { useState, useRef, useEffect } from "react";

import { motion, AnimatePresence, animate } from "framer-motion";

// Data
import data from "../data/products";
import React from "react";

//Transitioning
const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

// Variants

const parent = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
};

const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
};

const maskAnimation = {
  initial: { width: " 100%" },
  animate: { width: 0 },
};

const Menu = ({ menuState, setMenuState, x, y, setCursorHovered }: any) => {
  return (
    <>
      <AnimatePresence>
        {menuState && (
          <>
            <motion.div exit={{ opacity: 0 }} className="products">
              <div className="menu-title">Products</div>
              <div className="menu">
                <div className="container">
                  <div className="menu-inner">
                    <motion.ul
                      /*                     variants={}
                       */ initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {data.map((list) => (
                        <List
                          key={list.id}
                          title={list.title}
                          src={list.src}
                          leftLineFlex={list.leftLineFlex}
                          rightLineFlex={list.rightLineFlex}
                          thumbnailPosition={list.thumbnailPosition}
                          x={x}
                          y={y}
                          offset={list.offset}
                          setCursorHovered={setCursorHovered}
                        />
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
            </motion.div>
            <Panels />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const List = ({
  title,
  src,
  leftLineFlex,
  rightLineFlex,
  thumbnailPosition,
  id,
  x,
  y,
  offset,
  setCursorHovered,
}: any) => {
  const list: any = useRef();
  const [hoverState, setHoverState] = useState(false);

  const [listPosition, setListPosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    setListPosition({
      top: list.current.getBoundingClientRect().top,
      left: list.current.getBoundingClientRect().left,
    });
  }, [hoverState]);

  return (
    <li ref={list}>
      <a href={`/opportunities/${id}`}>
        <div className="wrapper">
          <div className={`line left flex-${leftLineFlex}`}>
            <motion.div
              className="mask"
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
          <motion.div
            className="title"
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
            onMouseEnter={() => setCursorHovered(true)}
            onMouseLeave={() => setCursorHovered(false)}
          >
            <h2>
              <motion.div
                transition={transition}
                variants={titleSlideUp}
                className="text"
              >
                {title}
              </motion.div>
            </h2>
          </motion.div>
          <div className="thumbnail" style={{ left: thumbnailPosition }}>
            <Image src={src} />
            <motion.div
              className="mask"
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
          <motion.div
            className="floating-image"
            initial={{ opacity: 0 }}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - listPosition.left + offset,
              y: y - listPosition.top,
            }}
            transition={{ ease: "linear" }}
          >
            <Image src={src} />
          </motion.div>
          <div className={`line right flex-${rightLineFlex}`}>
            <motion.div
              className="mask right"
              variants={maskAnimation}
              transition={{ ...transition, duration: 1 }}
            ></motion.div>
          </div>
        </div>
      </a>
    </li>
  );
};

const Panels = () => {
  return (
    <>
      <div className="left-panel-background"></div>
      <div className="right-panel-background"></div>
    </>
  );
};

export default Menu;
