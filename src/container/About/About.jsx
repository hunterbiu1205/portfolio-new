import React from "react";
import { motion } from 'framer-motion';
import "./About.scss";

export const About = () => {
  return (
    <div className="app__flex app__whitebg ">
      <div className="app__about-inner">
        <motion.div
        // whileInView={{ y: [200, 0], opacity: [0, 1] }}
        // transition={{ duration: 1 }}
        >
          <h2 className="head-text">About Me</h2>
          <p className="app__about-sum p-text">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p className="app__about-sum p-text">
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
          <a
            href={require("../../assets/Huatao_Dong.pdf")}
            download="Huatao_Dong"
          >
            <button className="app-button" type="button">View Resume</button>
          </a>
        </motion.div>
      </div>

    </div >
  );
};
