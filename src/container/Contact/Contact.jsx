import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import './Contact.scss'

export const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_al2k44m",
        "template_x4fqirc",
        form.current,
        "160RHBtUKzAbCkCeO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true); // Set the state to true after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="app__contact app__flex">
      <motion.div
        whileInView={{ y: [200, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >

        {isSubmitted ? (
          <div className="thank-you-message">Thank you for your contact!</div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="app___contact-form">
            <div className="head-text2 app__contact-heading">Contact Me</div>
            <div className="app__contact-input">
              <input type="text" placeholder="Your Name" name="user_name" required />
            </div>
            <div className="app__contact-input">
              <input type="email" placeholder="Your Email" name="user_email" required />
            </div>
            <div className="app__contact-input">
              <textarea placeholder="Your Message" rows="8" name="message" required />
            </div>
            <div className="app__contact-input">
              <input className="app__contact-submit" type="submit" value="Send" />
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
