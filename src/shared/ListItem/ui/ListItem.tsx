import React from 'react';
import { motion } from 'framer-motion';

const ListItem: React.FC<{ randomColor: string }> = ({ randomColor }) => {
  return (
    <motion.li
      className="w-[20vw] aspect-square"
      style={{ backgroundColor: randomColor }}
      layout
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '100vw' }}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
    >
      {randomColor}
    </motion.li>
  );
};

export default React.memo(ListItem);
