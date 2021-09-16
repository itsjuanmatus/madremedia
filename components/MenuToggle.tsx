import * as React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    strokeWidth="7"
    stroke="#603913"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => (
  <button onClick={toggle}>
    <svg
      width="60"
      height="25"
      viewBox="0 0 60 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.line
        variants={{
          closed: { y1: "3.5", x2:"60", y2: "3.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        y1={"3.5"}
        x2="60"
        y2="3.5"
        stroke="#603913"
        strokeWidth="6"
      />

      <motion.line y1="21" x2="60" y2="21" stroke="#603913" strokeWidth="6" />
    </svg>
  </button>
);
