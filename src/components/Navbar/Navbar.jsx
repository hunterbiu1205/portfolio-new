import "./Navbar.scss";
import { useState, useEffect } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import images from "../../constants/images";

export default function Navbar() {
  const items = ["Home", "About", "Work", "Skills", "Contact"];

  const [navSize, setnavSize] = useState("7rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navBorder, setnavBorder] = useState("none");

  const [toggle, setToggle] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavSize("5rem") : setnavSize("7rem");
    window.scrollY > 10 ? setnavColor("#005761") : setnavColor("transparent");
    window.scrollY > 10 ? setnavBorder("none") : setnavBorder("none");
  };

  useEffect(() => {
    //Add a custom event listener
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      // Remove the custom event listener when the component unmounts
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <nav
      className="app__navbar"
      style={{
        backgroundColor: navColor,
        height: navSize,
        border: navBorder,
        transition: "all 0.5s",
      }}
    >
      <div className="app__navbar-logo">
        <img src={images.HD1} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {items.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}> {item} </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {/* if toggle is true, then render mobile navigation */}
        {toggle && (
          <motion.div
            whileInView={{ x: [150, 0] }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {/* close menu once clicked */}
            <ul>
              {items.map((item) => (
                <li className="p-text" key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
