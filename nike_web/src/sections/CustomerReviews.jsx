import React from 'react';
import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';
import { motion } from 'framer-motion';

const CustomerReviews = () => {
  return (
    <section className="max-container py-12">
      <div className="text-center mb-12">
        <h3 className="font-palanquin text-4xl font-bold mb-4">
          What Our <span className="text-primary">Customers</span> Say
        </h3>
        <p className="font-montserrat text-gray-500 text-lg mb-2">
          Hear genuine stories from our satisfied customers about
        </p>
        <p className="font-montserrat text-gray-500 text-lg">
          their exceptional experiences with us.
        </p>
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {reviews && reviews.length > 0 ? (
          reviews.map((review, index) => (
            <motion.div
              key={review.id || index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ReviewCard
                imgURL={review.imgURL}
                customerName={review.customerName}
                rating={review.rating}
                feedback={review.feedback}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews available at the moment.</p>
        )}
      </motion.div>
    </section>
  );
};

export default React.memo(CustomerReviews);
