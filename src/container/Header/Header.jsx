import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import "./Header.scss";
import { AppWrap } from '../../wrapper';

const Header = () => {
  return (
    <div className="app__header_intro">
      <motion.div
        whileInView={{ x: [-50, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className="app__header-info"
      >
        <div className="header__title">
          <span>Hey I'm</span>
          <h1>
            HUNTER
            <br />
            DONG
          </h1>
          <h5>Web Developer / UI / UX</h5>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <motion.img
          className="profile"
          src={images.profile1}
          alt="profile_bg"
          whileInView={{ x: [100, 0] }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');



