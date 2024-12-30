import "./Hero.css";
import { motion } from "framer-motion";

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
  scrollButton :{
    opacity :0,
    y:10,
    transition:{
    duration: 2,
    repeat : Infinity
    }
  }
};
const SliderVariants = {
  initial: {
    x: 0,
    
  },
  animate: {
    x: "-360%",
   
    transition: {
      repeatType : "mirror",
      repeat : Infinity,
      duration : 20,
    },
  },
  
};


const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textItemVariants}>HARFOOL GUJJAR</motion.h2>
          <motion.h1 variants={textItemVariants}>Front End Developer</motion.h1>

          <motion.div className="buttons" variants={containerVariants}>
            <motion.button variants={textItemVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={textItemVariants}>Contact me</motion.button>
          </motion.div>

          <motion.img
            src="/scroll.png"
            alt="Scroll Icon"
            className="scroll-icon"
            variants={textItemVariants}
            animate ="scrollButton"
          />
        </motion.div>
      </div>

      <motion.div variants={SliderVariants} 
      initial="initial"
      animate ="animate"
      className="sliding-text">FRONT-END DEVELOPER HARFOOL GUJJAR</motion.div>

      <div className="img-container">
        <motion.img
          src="/public/Hero.png "
          alt="Hero"
          className="hero-image"
          
        />
      </div>
    </div>
  );
};

export default Hero;
