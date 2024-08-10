import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="max-container py-36 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-palanquin font-bold text-gray-800">
          Our <span className="text-orange-300 font-semibold">Services</span>
        </h2>
        <p className="font-montserrat text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover the range of services we offer to enhance your shopping experience with us.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div className="transition-transform transform hover:scale-105" key={index}>
            <ServiceCard {...service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
