import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Component, classNames) => function HOC() {
    return (
        <motion.div
            whileInView={{ y: [200, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className={`${classNames}`}
        >
            <Component />
        </motion.div>
    );
};

export default MotionWrap;