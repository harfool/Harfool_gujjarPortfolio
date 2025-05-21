import { motion } from "framer-motion";
import "./Navbar.css";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  const animation = {
    scale: 1.4,
    rotateZ: "360deg",
  };
  const sidebarMenu = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <div className="navbar">
      {/* <Sidebar /> */}
      <div className="wraper">
        <motion.img
          className="MyLogo"
          src="/public/my logo.png"
          alt=""
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, x: [10, 20, 30] }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="navLinks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: [null, 30] }}
          transition={{ duration: 3 }}
        >
          {sidebarMenu.map((items) => (
            <motion.a
              href={`#${items}`}
              key={items}
              // whileHover={{ scale: 1.2 }}
              whileTap={{ color: "red", scale: 1 }}
            >
              {" "}
              {items}{" "}
            </motion.a>
          ))}
        </motion.div>

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
            href="https://www.linkedin.com/in/harfool-gurjar-a65660253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <img src="/public/linkdin.png" alt="linkdin" />
          </motion.a>
          <motion.a
            whileHover={animation}
            transition={{
              duration: 3,
            }}
            href="https://x.com/harfool_gurjar0"
            target="_blank"
          >
            <img src="/public/twitter.png" alt="twitter" />
          </motion.a>

          <motion.a
            whileHover={animation}
            transition={{
              duration: 3,
            }}
            target="_blank"
            href="https://github.com/harfool"
          >
            <img src="/public/github.png" alt="" />
          </motion.a>

          <motion.a
            whileHover={animation}
            transition={{
              duration: 3,
            }}
            href="https://wa.me/+919610237965"
            target="_blank"
          >
            <img src="/public/whatsapp.png" alt="" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
