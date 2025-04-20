import React, { useRef } from "react";
import "./Services.css";
import { AnimatePresence, motion, useInView } from "framer-motion";

const Services = () => {
  const variants = {
    initial: { x: -500, y: 100, opacity: 0 }, // Entry animation starts here
    animate: { x: 0, y: 0, opacity: 1, transition: { duration: 1 } }, // In-view animation
    exit: { x: 500, opacity: 0, transition: { duration: 0.5 } }, // Exit animation
  };

  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" }); // Detect in/out of view

  const myServices = [
    {
      title: "Custom Web Application Development",
      description1: "I create unique and specialized websites or apps based on your business needs.",
      description2: "If you're running a shop, I can build an online store where your customers can browse and buy your products.",
    },
    {
      title: "Advertising And Promotion Services",
      description1: "Create and manage ad campaigns on platforms like Facebook, Instagram, LinkedIn, or Twitter.",
      description2: "Helps businesses reach their target audience, generate leads, and boost sales.",
    },
    {
      title: "Full-Stack Maintenance & Optimization Services",
      description1: "I keep your website or app running smoothly by fixing problems, speeding it up.",
      description2: "If your website becomes slow or has bugs, I’ll fix it. If you need to update products.",
    },
  ];

  return (
    <AnimatePresence>
    <motion.div
      className="Services"
      ref={ref}
      // variants={variants}
      initial="initial" 
      animate={isInView ? "animate" : "exit"} 
    >
      <motion.div className="text-container-Service" variants={variants}>
        <motion.p>
          I focus on helping your brand grow <br /> and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="title-container" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange " , transition : {duration : 3}}} >Unique</motion.b> Ideas
          </h1>
          <h1>
            <motion.b whileHover={{color:"orange ", transition : {duration : 3}}} >For Your</motion.b> Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="list-container" variants={variants}>
        {myServices.map((service, index) => (
          <motion.div key={index} className="box" whileHover={{ scale: 1.1, y: -10 }}>
            <motion.h2>{service.title}</motion.h2>
            <motion.p>{service.description1}</motion.p>
            <motion.p>{service.description2}</motion.p>
            <motion.button>
               <a href="https://www.linkedin.com/in/harfool-gurjar-a65660253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"> go </a> </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Services;
