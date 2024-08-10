import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ label, iconURL, className }) => {
  // Ensure className is defined and treat it as a string
  const buttonClasses = `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${className ? className : ''} ${className && className.includes('bg-white') ? '' : 'bg-orange-400'}`;

  return (
    <motion.button
      className={buttonClasses}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }}
      whileTap={{
        scale: 0.95,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow Right" />}
    </motion.button>
  );
};

export default Button;
