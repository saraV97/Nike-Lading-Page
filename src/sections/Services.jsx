import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInAnimationVariants3 } from "../components/Animation";
const Services = () => {
  return (
    <section className="max-container flex flex-wrap gap-9 justify-center">
      {services.map((service, index) => (
        <motion.div
          variants={fadeInAnimationVariants3}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          <ServiceCard key={service.label} {...service} />
        </motion.div>
      ))}
    </section>
  );
};

export default Services;
