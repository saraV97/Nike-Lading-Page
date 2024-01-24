import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { fadeInAnimationVariants5 } from "../components/Animation";
const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center gap-10 max-container max-xl:flex-col-reverse">
      <motion.div
        className="flex-1"
        variants={fadeInAnimationVariants5}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={offer}
          width={773}
          height={687}
          className="object=contain w-full"
        />
      </motion.div>
      <div className="flex flex-2 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg: max-w-lg">
          <span className="text-coral-red "> Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text ">
          Welcome to a world of savings and style! Unleash the thrill of
          shopping with our extraordinary special offers, curated just for you.
          At [Your Brand Name], we believe in making every step of your shopping
          journey extraordinary, and our Special Offer Section is your passport
          to unparalleled value.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Embark on a shopping spree with our limited-time discounts on selected
          styles. From timeless classics to the latest trends, elevate your
          wardrobe without breaking the bank.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="View Details"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
