import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const FormRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmbpg3d",
        "template_hdrzjio",
        FormRef.current,
        "aKwTwsM2jmkeSX-oj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          setError(true);
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <motion.div
      className="Contact-container"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="contact-text-container">
        <motion.h1 variants={variants}>
          Let's develop your next big thing Together?{" "}
        </motion.h1>
        <motion.div className="container-items" variants={variants}>
          <motion.div className="icons-for-contact" variants={variants}>
            <motion.img src="/public/google-maps.png" alt="" />
          </motion.div>
          <h2>Address</h2>
          <span>Bhilwara</span> <br />
          <motion.div className="icons-for-contact" variants={variants}>
            <motion.img src="/public/email.png" alt="" />
          </motion.div>
          <h2>Mail</h2>
          <span>Harfoolgujjar63@gmail.com</span> <br />
          <motion.div className="icons-for-contact" variants={variants}>
            <motion.img src="/public/telephone.png" alt="" />
          </motion.div>
          <h2>Phone</h2>
          <span>9610237965</span> <br />
        </motion.div>
        <motion.div className="follow-me" variants={variants}>
          <motion.h2 variants={variants}>Follow me</motion.h2>

          <motion.div
            className="socialLink"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a
              // whileHover={animation}
              transition={{
                duration: 3,
              }}
              href="https://www.linkedin.com/in/harfool-gurjar-a65660253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <img src="/public/linkdin.png" alt="linkdin" />
            </motion.a>
            <motion.a
              // whileHover={animation}
              transition={{
                duration: 3,
              }}
              href="https://x.com/harfool_gurjar0"
              target="_blank"
            >
              <img src="/public/twitter.png" alt="twitter" />
            </motion.a>

            <motion.a
              // whileHover={animation}
              transition={{
                duration: 3,
              }}
              target="_blank"
              href="https://github.com/harfool"
            >
              <img src="/public/github.png" alt="" />
            </motion.a>

            <motion.a
              // whileHover={animation}
              transition={{
                duration: 3,
              }}
              href="https://wa.me/+919610237965"
              target="_blank"
            >
              <img src="/public/whatsapp.png" alt="" />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className="contact-form-container">
        <motion.div
          className="svg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
        >
          <img src="/public/ContactUs.gif" alt="" />
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.1,
            delay: 2,
          }}
          ref={FormRef}
        >
          <input type="text" required placeholder="Name" name="from_name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {success && (
            <p style={{ color: "green" }}>Message send succussfully</p>
          )}
          {error && <p style={{ color: "red" }}>failed </p>}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
