import { motion } from "framer-motion";

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <motion.div
      className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] bg-white shadow-lg px-8 py-12 transition-transform hover:scale-105 hover:shadow-2xl'
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
    >
      <div className='w-14 h-14 flex justify-center items-center bg-orange-500 rounded-full shadow-md mb-4 transition-transform hover:rotate-12'>
        <img src={imgURL} alt={label} width={32} height={32} />
      </div>
      <h3 className='text-2xl font-bold text-gray-800 mb-2'>
        {label}
      </h3>
      <p className='text-lg text-gray-600'>
        {subtext}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
