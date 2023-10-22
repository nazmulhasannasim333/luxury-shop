import ServiceCard from '../components/ServiceCard';
import { services } from '../datas/index';

const Services = () => {
    return (
        <section className="max-container flex justify-center flex-wrap gap-9 padding-b padding-x">
    {services.map((service) => (
      <ServiceCard key={service.label} {...service} />
    ))}
  </section>
    );
};

export default Services;