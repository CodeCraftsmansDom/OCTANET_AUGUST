import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row items-center justify-between max-container py-32 px-6 lg:px-32 bg-white shadow-lg rounded-lg"
    >
      {/* Text Content */}
      <div className="flex-1 flex flex-col lg:pr-12 lg:items-start text-center lg:text-left">
        <h2 className="text-3xl lg:text-5xl font-palanquin font-bold mb-4 leading-tight">
          We Provide You
          <span className="text-orange-300"> Super </span>
          <span className="text-orange-300">Quality </span> Shoes
        </h2>
        <p className="mt-4 text-base lg:text-lg text-gray-700 lg:max-w-lg mx-auto lg:mx-0">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-4 text-base lg:text-lg text-gray-700 lg:max-w-lg mx-auto lg:mx-0">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-8">
          <Button label="View Details" iconURL={arrowRight} className="transition-transform transform hover:scale-105" />
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
        <img
          src={shoe8}
          alt="product detail"
          className="object-contain max-w-full h-auto rounded-lg shadow-xl border border-gray-200"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
