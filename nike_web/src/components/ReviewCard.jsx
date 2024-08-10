import { star } from "../assets/icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // Adjust visibility threshold as needed
  });

  return (
    <motion.div
      ref={ref}
      className='flex flex-col items-center bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px] border-4 border-gray-200'
        initial={{ scale: 0.8 }}
        animate={{ scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.4 }}
      />
      <motion.p
        className='mt-6 max-w-sm text-center text-gray-600'
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        {feedback}
      </motion.p>
      <motion.div
        className='mt-3 flex items-center gap-2.5'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
      >
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='text-yellow-500'
        />
        <p className='text-xl text-gray-700'>({rating})</p>
      </motion.div>
      <motion.h3
        className='mt-1 text-2xl font-bold text-center text-gray-800'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
      >
        {customerName}
      </motion.h3>
    </motion.div>
  );
};

export default ReviewCard;
