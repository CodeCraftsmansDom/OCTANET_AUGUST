import { star } from '../assets/icons';
import { motion } from 'framer-motion';

const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <motion.div
      className="flex flex-1 flex-col w-full max-sm:w-full bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={imgURL}
        alt={name}
        className="w-full h-[280px] object-cover"
        whileHover={{ scale: 1.1 }} // Scale effect on hover
        transition={{ duration: 0.3 }}
      />
      <div className="p-6 flex flex-col justify-start gap-4">
        <div className="flex items-center gap-2.5">
          <img
            src={star}
            alt='rating'
            width={24}
            height={24}
            className="text-yellow-500"
          />
          <p className='font-montserrat text-xl text-gray-600'>({rating})</p>
        </div>
        <h3 className='text-xl text-orange-500 leading-normal font-semibold font-palanquin'>
          {name}
        </h3>
        <p className='text-gray-700 mt-2 font-semibold font-montserrat'>
          {price}
        </p>
      </div>
    </motion.div>
  );
};

export default PopularProductCard;
