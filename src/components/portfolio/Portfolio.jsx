import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./Portfolio.css";
import { useRef } from "react";

const portfolioList = [
  {
    id: 1,
    title: "Go Online E-learning Education Website",
    img: "https://images.unsplash.com/photo-1719937050814-72892488f741?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
    desc: "Go Online E-learning Education website using React, Node, Express, MongoDB.",
  },
  {
    id: 3,
    title: "E-commerce Website",
    img: "https://images.unsplash.com/photo-1734942416345-ed84ae363c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfEZ6bzN6dU9ITjZ3fHxlbnwwfHx8fHw%3D",
    desc: "E-commerce website using React, Node, Express, MongoDB.",
  },
  {
    id: 2,
    title: "Food Ordering Website - Cafe",
    img: "https://images.unsplash.com/photo-1706545602642-fa0a6c3a540a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8RnpvM3p1T0hONnd8fGVufDB8fHx8fA%3D%3D",
    desc: "Food ordering website Cafe using React, Node, Express, MongoDB.",
  },
 
];

const PortfolioSection = ({ portfolio }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start ", "end start"],
  });

  const Y = useTransform(scrollYProgress, [0, 1], ["10%","-300%",]);

  return (
    <section ref={ref}>
      <div className="portfolioContainer">
        <div className="portfolioWrapper">
          <div className="portfolioImageContainer">
            <img src={portfolio.img} alt={portfolio.title}  />
          </div>
          <motion.div
            className="portfolioTextContainer"
            style={{ y: Y }}
          >
            <h2>{portfolio.title}</h2>
            <p>{portfolio.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Feature Work</h1>
        <motion.div
          className="progressBar"
          style={{ scaleX }}
        ></motion.div>
      </div>
      {portfolioList.map((item) => (
        <PortfolioSection portfolio={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
