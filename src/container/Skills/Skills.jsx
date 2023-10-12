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
              <h3>2021-2021</h3>
            </div>

            <div className="app__skills-experiences-info">
              <h3>Kerry Logistics - Intern</h3>
              <p className="p-text">Designed user-interface content of the new website for the firm. Adapted to firm’s use of SQL Server Management Studio to organize and manage database. Created and executed test cases to troubleshoot as part of the software testing team. Work with warehouse management systems and participate with teamwork.</p>
            </div>
          </div>


          <div className="app__skills-experiences-inner">
            <div className="app__skills-experiences-year">
              <h3>2021-2021</h3>
            </div>

            <div className="app__skills-experiences-info">
              <h3>Kerry Logistics - Intern</h3>
              <p className="p-text">Designed user-interface content of the new website for the firm. Adapted to firm’s use of SQL Server Management Studio to organize and manage database. Created and executed test cases to troubleshoot as part of the software testing team. Work with warehouse management systems and participate with teamwork.</p>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
};

export default AppWrap(Skills, 'skills');