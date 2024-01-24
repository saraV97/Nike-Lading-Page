import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeInAnimationVariants4 } from "../components/Animation";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center w-full max-container max-lg:flex-col gap-10"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg: max-w-lg">
          We Provide You
          <span className="text-coral-red "> Super </span>
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Specify the type of leather used (full-grain, top-grain, etc.).
          Emphasize the durability, softness, and natural beauty of the leather.
          Explain how the shoes are constructed for longevity. Mention
          reinforced stitching, durable soles, and quality hardware.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Include snippets of positive reviews. Showcase testimonials that
          specifically mention the quality and comfort.
        </p>
        <div className="mt-11 ">
          <Button label="View Details" />
        </div>
      </div>
      <motion.div
        className="flex-1 justify-center items-center"
        variants={fadeInAnimationVariants4}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};

export default SuperQuality;
