import React from "react";
import { motion } from 'framer-motion';
import "./About.scss";
import { AppWrap } from '../../wrapper';

const About = () => {
  return (
    <div className="app__about app__flex app__whitebg" id="About">
      <div className="app__about-inner app__container">
        <motion.div
          whileInView={{ y: [150, 0] }}
          transition={{ duration: 1 }}
        >
          <h2 className="head-text">About Me</h2>
          <p className="app__about-sum p-text">
            I'm currently a dedicated web developer who is passionate about continuous learning and growth, with a particular focus on front-end development. In today's fast-paced tech landscape, I thrive on staying up-to-date with emerging technologies while nurturing my enduring love for development. Despite not having a formal design background, I possess a deep appreciation for aesthetics and design. Looking ahead, I aspire to embark on a structured journey to master design, particularly in the realms of UI and UX.
          </p>
          <p className="app__about-sum p-text">
            Beyond my professional interests, I find immense joy in exploring the great outdoors. Hiking, traveling, and engaging in various outdoor activities allow me to connect with the world, offering a refreshing perspective that complements my enthusiasm for web development. It's during these adventures that I often take out my camera and immerse myself in the art of photography. Capturing the beauty of the natural world and the essence of travel experiences through the lens brings an additional layer of depth to my life. The interplay between technology and art, both in web development and photography, fuels my curiosity and drives me to create meaningful and visually captivating digital experiences.
          </p>
          <a
            href={require("../../assets/Hunter_Dong_Resume.pdf")}
            download="Huatao_Dong"
          >
            <button className="app-button" type="button">View Resume</button>
          </a>
        </motion.div>
      </div>

    </div >
  )
}

export default AppWrap(About, 'about');