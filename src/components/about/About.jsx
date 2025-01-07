import React, { useRef } from "react";
import "./About.css";
import { motion, useInView } from "framer-motion";

const About = () => {

    const ref = useRef();
  const isInView = useInView(ref , { margin: "-200px" }); 


  const containerVariants = {
    initial: { opacity: 0 ,},
    animate: {
      opacity: 1,

      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
    exit: { x: 500, opacity: 0, transition: { duration: 0.5 } }, 

  };

  const textItemVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const mySkills = [
    "javascript",
    "react.js",
    "redux",
    "node.js",
    "express.js",
    "mongoDB",
    "mongoose",
    "cloudinary",
    "html",
    "css",
    "sass",
    "bootstrap",
    "tailwind",
    "github",
  ];

  return (
    <motion.div
      className="about-container"
    //   variants={containerVariants}
      initial="initial"
      animate={isInView ? "animate": "exit"}
      ref={ref}
     >
       <motion.div className="wrapper" variants={textItemVariants} >
      <motion.div variants={textItemVariants} className="about-content">
        <motion.h1 variants={textItemVariants}>About Me</motion.h1>
        <motion.p variants={textItemVariants}>
          I help business owners and busy web developers to design & develop
          creative websites that fit their vision and attract visitors to stay
          forever. Technologies and tools that I use to create such awesome
          websites.
        </motion.p>
        <div className="hire-me">
        <motion.a href="https://www.linkedin.com/in/harfool-gurjar-a65660253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" variants={textItemVariants} target="_blank" whileHover={{transition : {scaleX : 1.2}}} >hire me</motion.a>

        </div>
        <motion.div className="tags-container" variants={textItemVariants}>
          {mySkills.map((tag) => (
            <motion.span key={tag} className="tag" variants={textItemVariants}>
              #{tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="mern-stack">
        <motion.h2 variants={textItemVariants}>MERN Stack</motion.h2>
        <motion.div className="stack-icons" variants={textItemVariants}>
          <motion.img
            variants={textItemVariants}
            src="https://img.icons8.com/color/48/000000/mongodb.png"
            alt="MongoDB"
          />
          <motion.img
            variants={textItemVariants}
            src="https://img.icons8.com/color/48/000000/express.png"
            alt="Express.js"
          />
          <motion.img
            variants={textItemVariants}
            src="https://img.icons8.com/color/48/000000/react-native.png"
            alt="React.js"
          />
          <motion.img
            variants={textItemVariants}
            src="https://img.icons8.com/color/48/000000/nodejs.png"
            alt="Node.js"
          />
        </motion.div>
      </motion.div>
    
    </motion.div>
    <motion.div className="about-img" variants={textItemVariants} >
        <motion.img src="/public/about.jpg" alt="" />
    </motion.div>



    </motion.div>
  );
};

export default About;
