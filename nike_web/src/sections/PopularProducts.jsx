import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container py-12'>
      <div className='flex flex-col items-center gap-5'>
        <h2 className='text-4xl font-palanquin font-bold text-gray-800'>
          Our <span className='text-orange-300 font-semibold'>Popular</span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-gray-500 text-center'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-10'>
        {products.map((product) => (
          <div className='transition-transform transform hover:scale-105' key={product.name}>
            <PopularProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
