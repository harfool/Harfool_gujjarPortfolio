import { useRef } from 'react';
import './Parelex.css'
import { motion, useScroll, useTransform } from 'framer-motion';

const Parellex =({type})=>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target : ref,
        offset : ["start start" , 'end start']
    })
 
     const yBackground = useTransform(scrollYProgress ,[0 ,1] , ["0%" , "100%"])
     const ytext = useTransform(scrollYProgress ,[0 ,1] , ["0%" , "250%"])

    return(
        
        <div 
        ref={ref}
        className="parellex" style={{background : type=== "Services" ? "linear-gradient(180deg,rgb(12, 12, 54),rgb(39, 39, 77))" : "linear-gradient(180deg, #02021c,rgb(16, 16, 58))"}}>
      
      <motion.h1 style={{y :ytext}} >{type=== "Services" ? "What we do" : "What we did" }</motion.h1>
      
      <motion.div className="moutains"></motion.div>
      <motion.div style={{y : yBackground , backgroundImage :  `url(${type=== "Services" ? "/public//sun.png": "/public//planets.png"})`}}  className="planets"  ></motion.div>
      <motion.div style={{x : yBackground}} className="stars"></motion.div>
        
        </div>
    )
}
export default Parellex