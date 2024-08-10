import { arrowRight } from '../assets/icons';
import { bigShoe4 } from '../assets/images';
import Button from '../components/Button';
import { statistics, shoes } from '../constants'; 
import { useState } from 'react';
import ShoeCard from '../components/ShoeCard';
import { motion } from 'framer-motion';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe4);

  // Animation variants for text and images
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  const cardVariant = {
    hover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-6 max-container'
    >
      <motion.div 
        className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:px-8 pt-8'
        initial="hidden"
        animate="visible"
        variants={textVariant}
      >
        <motion.p 
          className='text-2xl font-montserrat text-orange-300 font-bold'
          variants={textVariant}
        >
          Our Summer Collections
        </motion.p>

        <motion.h1 
          className='mt-2 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'
          variants={textVariant}
        >
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-orange-300 inline-block mt-3'>Nike</span> Shoes
        </motion.h1>
        <motion.p 
          className='font-montserrat text-gray-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'
          variants={textVariant}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>

        <motion.div variants={cardVariant} whileHover="hover">
          <Button label='Shop now' iconURL={arrowRight} className='transition-transform transform hover:scale-105' />
        </motion.div>

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-10'>
          {statistics.map((stat, index) => (
            <motion.div 
              key={index} 
              className='hover:scale-105 transition-transform' 
              variants={textVariant}
              whileHover={{ scale: 1.05 }}
            >
              <p className='text-3xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-gray-400'>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-32 bg-primary bg-hero bg-cover bg-center'
        initial="hidden"
        animate="visible"
        variants={imageVariant}
      >
        <motion.img
          src={bigShoeImg}
          alt='shoe collection'
          width={610}
          height={502}
          className='object-contain relative z-10 transition-transform transform hover:scale-110'
          whileHover={{ scale: 1.1 }}
        />

        <div className='flex sm:gap-6 gap-4 absolute mb-6 -bottom-[0%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <motion.div 
              key={index} 
              variants={cardVariant} 
              whileHover="hover"
            >
              <ShoeCard
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
