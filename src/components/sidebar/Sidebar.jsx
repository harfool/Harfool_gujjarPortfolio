import React, { useState } from "react";
import "./Sidebar.css";
import ToggleButton from "./toggleButton/ToggleButton";
import Links from "./links/Links";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(800px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      initial="closed"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
