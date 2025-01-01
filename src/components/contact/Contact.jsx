import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Contact.css";
import emailjs from '@emailjs/browser'
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
  const [error , setError ] = useState(false)
  const [success , setSuccess ] = useState(false)
 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmbpg3d",  // Replace with your EmailJS Service ID
        "template_hdrzjio", // Replace with your EmailJS Template ID
        FormRef.current,
        "aKwTwsM2jmkeSX-oj"   // Replace with your EmailJS Public Key
      )
     .then((result)=>{
        console.log(result.text)
        setSuccess(true)

     },(error)=>{
        setError(true)
        console.log(error.text)
     }
    )

    e.target.reset(); // Reset the form fields after submission
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
          <h2>Address</h2>
          <span>Bhilwara</span>
          <h2>Mail</h2>
          <span>Harfoolgujjar63@gmail.com</span>
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
            duration: .1,
            delay: 2,
          }}
          ref={FormRef}
        >
          <input type="text" required placeholder="Name" name="from_name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>
          {success && <p style={{color :"green"}}>Message send succussfully</p>}
          {error && <p style={{color :"red"}}>failed </p>}
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
