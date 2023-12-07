import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariants3,
  fadeInAnimationVariants1,
} from "../components/Animation";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-bold font-palanquin">
          Our<span className="text-coral-red"> Popular</span> Products
        </h2>
        <motion.p
          className="lg:max-w-lg font-montserrat mt-2 text-slate-gray"
          variants={fadeInAnimationVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </motion.p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grif-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product, index) => (
          <motion.div
            variants={fadeInAnimationVariants3}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <PopularProductCard key={product.name} {...product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
