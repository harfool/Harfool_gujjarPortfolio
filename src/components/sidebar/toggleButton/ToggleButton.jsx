import React from "react";
import "./ToggleButton.css";
import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button
      className="toggle-button"
      onClick={() => setOpen((prev) => !prev)}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
      
       <motion.path
          variants={{
             closed: { d: "M 2 2.5 L 20 2.5"},
             open: { d: "M 3 16.5 L 17 2.5"}
          }}         
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
             closed: { opacity : 1},
             open: { opacity : 0}
          }}      
         d= "M 2 9.423 L 20 9.423"
          strokeWidth="3"
          stroke="black"
          strokeLinecap="round"
        />
        <motion.path
        variants={{
           closed: { d: "M 2 16.346 L 20 16.346"},
           open: { d: "M 3 2.5 L 17 16.346"}
        }}         
        strokeWidth="3"
        stroke="black"
        strokeLinecap="round"
      />
      </svg>
    </button>
  );
};

export default ToggleButton;
