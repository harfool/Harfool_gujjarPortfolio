import './Links.css'
import { motion } from 'framer-motion';

const variants={
  open:{
   transition : {
    staggerChildren : 0.2
   }
  },
  closed:{
    transition : {
      staggerChildren : 0.05,
      staggerDirection : -1,
     }
  }
}

const itemsVariants={
  open:{
  
   y : 0 ,
   opacity :1
  
  },
  closed:{
    
      y : 50 ,
   opacity :0 ,
     
  }
}


const Links = () => {
  
  const sidebarMenu = [
    "Homepage",
    "Services",
    "Portfolio",
    "Contact",
    "About"
  ]

  return (
    <motion.div className='links' variants={variants}>
    {
    sidebarMenu.map((items)=>(
  <motion.a 
   href={`#${items}`}
   key={items} 
   variants={itemsVariants}
   whileHover={{scale : 1.2}}
   whileTap={{color: "red" ,scale : 1}}
   
  > {items} </motion.a>
))
    }
  
      </motion.div>
  )
}

export default Links