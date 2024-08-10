import { motion } from 'framer-motion';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <motion.div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 transition-transform duration-300 ease-in-out ${
        bigShoeImg === imgURL.bigShoe
          ? "border-orange-300 scale-105"
          : "border-transparent"
      }`}
      onClick={handleClick}
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0.8, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={imgURL.bigShoe}
          alt='shoe collection'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </motion.div>
    </motion.div>
  );
};

export default ShoeCard;
