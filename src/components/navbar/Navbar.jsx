import { motion } from 'framer-motion'
import './Navbar.CSS'
import Sidebar from '../sidebar/Sidebar'
 const Navbar= ()=>  {
  return (
    <div className='navbar'>
      <Sidebar/>
        <div className="wraper">
            <motion.span
             initial={{opacity :0 , scale :0.5}}
             animate={{opacity :1 , scale :1}}
             transition={{duration: 0.5}}
             >harfool gujjar
             </motion.span>
            <motion.div className="socialLink"
            initial={{opacity:0 , scale:0.5}}
            animate={{opacity:1 , scale :1}}
            transition={{duration : 0.5}}
            >
               <a href=""><img src="/public/linkdin.png" alt="" /></a>
               <a href=""><img src="/public/twitter.png" alt="" /></a>
               <a href=""><img src="/public/github.png" alt="" /></a>
               <a href=""><img src="/public/whatsapp.png" alt="" /></a>
            </motion.div>
        </div>
    </div>
  )
}

export default Navbar