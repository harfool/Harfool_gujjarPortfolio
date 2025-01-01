import { useEffect, useRef } from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import Typed from "typed.js";
const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const SliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-560%",

    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 20,
    },
  },
};


const Hero = () => {

  const typedElement = useRef(null); // To reference the element where the text appears
  const typedInstance = useRef(null); // To store the Typed.js instance
  
  useEffect(() => {
    // Initialize Typed.js
    typedInstance.current = new Typed(typedElement.current, {
      strings: ["Web Developer", "Web design", "Front-end developer" ,"React Develpoer "], // Texts to display
      typeSpeed: 50, // Speed of typing
      backSpeed: 30, // Speed of erasing
      backDelay: 1500, // Delay before erasing
      loop: true, // Looping animation
    });
  
    // Cleanup to destroy the Typed.js instance on unmount
    return () => {
      typedInstance.current.destroy();
    };
  }, []);
  

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textItemVariants}> I'm a  <span ref={typedElement} ></span></motion.h2>
          <motion.h3 variants={textItemVariants}> Welcome to my  portfolio! I'm Harfool Gujjar, a passionate and dedicated MERN Stack Developer focused on building efficient, scalable, and user-friendly web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I bring ideas to life with clean code and modern design principles..</motion.h3>
          {/* <motion.div
            variants={SliderVariants}
            initial="initial"
            animate="animate"
            className="sliding-text"
          >
            FRONT-END DEVELOPER HARFOOL GUJJAR
          </motion.div> */}
          {/* <motion.div className="buttons" variants={containerVariants}>
            <motion.button variants={textItemVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textItemVariants}>
              Contact me
            </motion.button>
          </motion.div> */}

          <motion.img
            src="/scroll.png"
            alt="Scroll Icon"
            className="scroll-icon"
            variants={textItemVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>

      <motion.div
        variants={SliderVariants}
        initial="initial"
        animate="animate"
        className="sliding-text"
      >
        FRONT-END DEVELOPER HARFOOL GUJJAR
      </motion.div>

      <div className="img-container">
        <motion.img
          // drag
          // dragElastic={.6}
          src="/public/Hero.png"
          alt="Hero"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
