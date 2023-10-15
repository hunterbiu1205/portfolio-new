import React from "react";
import "./Skills.scss";
import images from "../../constants/images";
import { AppWrap } from '../../wrapper';

const Skills = () => {
  return (
    <div className="app__skills">
      <h1 className="head-text2">Skills & Experiences</h1>

      <div className="app__flex app__skills-inner">

        <div className="app__skills-logos">

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.javascript} alt="skills-icon" />
            <h4 className="head-text3">JavaScript</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.html} alt="skills-icon" />
            <h4 className="head-text3">HTML</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.css} alt="skills-icon" />
            <h4 className="head-text3">CSS</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.react} alt="skills-icon" />
            <h4 className="head-text3">React</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.redux} alt="skills-icon" />
            <h4 className="head-text3">Redux</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.node} alt="skills-icon" />
            <h4 className="head-text3">NodeJS</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.typescript} alt="skills-icon" />
            <h4 className="head-text3">TypeScript</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.restapi} alt="skills-icon" />
            <h4 className="head-text3">RestAPI</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.git} alt="skills-icon" />
            <h4 className="head-text3">Git/Version</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.shopify} alt="skills-icon" />
            <h4 className="head-text3">Shopify</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.uiux} alt="skills-icon" />
            <h4 className="head-text3">UI/UX</h4>
          </div>

          <div className="app__skills-item app__whitebg">
            <img className="app__skills-icon" src={images.seo} alt="skills-icon" />
            <h4 className="head-text3">SEO</h4>
          </div>

        </div>

        <div className="app__skills-experiences">
          <div className="app__skills-experiences-inner">
            <div className="app__skills-experiences-year">
              <h3>2022 - Present</h3>
            </div>

            <div className="app__skills-experiences-info">
              <h3>Bickford's Group - Web developer</h3>
              <p className="p-text">As a web developer, I specialized in creating responsive website solutions, transforming stakeholder briefs and artwork into aesthetically pleasing and highly functional websites. Additionally, I played a crucial role in maintaining and enhancing various group e-commerce websites, including Sippify, Wheel & Barrow, and Karma Living. Furthermore, I actively contributed to design and content updates, ensuring both aesthetic and functional improvements. I conducted user testing and research to optimize website performance and enhance the overall user experience.</p>

            </div>
          </div>


          <div className="app__skills-experiences-inner">
            <div className="app__skills-experiences-year">
              <h3>2012-2017</h3>
            </div>

            <div className="app__skills-experiences-info">
              <h3>China Coast Guard - Corporal</h3>
              <p className="p-text">I operated and managed the navigational steering of Coast Guard vessels ranging from 600 to 3000 tons. I was responsible for operating on-ship radios to facilitate communication with other seafaring vessels. Notably, I achieved a remarkable record by successfully executing more than 100 critical missions, including search and rescue operations, smuggler interception, and fisheries law enforcement tasks.  </p>

            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default AppWrap(Skills, 'skills');