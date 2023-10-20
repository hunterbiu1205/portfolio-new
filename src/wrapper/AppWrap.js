import React from 'react'
// import { NavigationDots, SocialMedia } from '../components'
import { NavigationDots } from '../components';
import { motion } from 'framer-motion';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} >

            <Component />


            {/* <NavigationDots active={idName} /> */}
        </div >
    );
};

export default AppWrap