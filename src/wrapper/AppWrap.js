import React from 'react'
// import { NavigationDots, SocialMedia } from '../components'
import { NavigationDots } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
    return (
        <div id={idName} >
            <Component />
            {/* <NavigationDots active={idName} /> */}
        </div >
    );
};

export default AppWrap