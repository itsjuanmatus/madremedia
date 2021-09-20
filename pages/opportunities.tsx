import React, { useState } from "react";
import Menu from "../components/Menu";
import useMousePosition from "../hooks/useMousePosition";
import { motion } from "framer-motion";

export default function opportunities() {
  const [menuState, setMenuState] = useState(true);
  const [cursorHovered, setCursorHovered] = useState(false);

  const { x, y } = useMousePosition();

  return (
    <body>
      <motion.div
        animate={{
          x: x,
          y: y,
          scale: cursorHovered ? 1.2 : 1,
          opacity: cursorHovered ? 0.8 : 0,
        }}
        transition={{ ease: "linear", duration: 0.2 }}
        className="cursor"
      ></motion.div>
      <Menu
        x={x}
        y={y}
        menuState={menuState}
        setMenuState={setMenuState}
        setCursorHovered={setCursorHovered}
      />
    </body>
  );
}
