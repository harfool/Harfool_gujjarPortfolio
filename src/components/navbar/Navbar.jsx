import { motion } from "framer-motion";
import "./Navbar.CSS";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  const animation = {
    scale: 1.4,
    rotateZ: "360deg",
  };
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wraper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 , x :[10,20,30]}}
          transition={{ duration: 3 }}
        >
          harfool gujjar
        </motion.span>
        <motion.div
          className="socialLink"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            whileHover={animation}
            transition={{
              duration: 3,
            }}
            href=""
          >
            <img src="/public/linkdin.png" alt="" />
          </motion.a>
          <motion.a
            whileHover={animation}
            transition={{
              duration: 3,
            }}
            href=""
          >
            <img src="/public/twitter.png" alt="" />
          </motion.a>
          <motion.a
            whileHover={animation}
            transition={{
              duration: 3,
            }}
            href=""
          >
            <img src="/public/github.png" alt="" />
          </motion.a>
          <motion.a
            whileHover={animation}
            transition={{
              duration: 3,
            }}
            href=""
          >
            <img src="/public/whatsapp.png" alt="" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
