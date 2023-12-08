import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { useState } from "react";
import { animate, motion } from "framer-motion";
import {
  fadeInAnimationVariants,
  fadeInAnimationVariants1,
  fadeInAnimationVariants2,
  fadeInAnimationVariants3,
} from "../components/Animation";
const Hero = () => {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row  justify-center 
      min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.p
          className="text-xl font-montserrat text-coral-red"
          variants={fadeInAnimationVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Our Summer Collection
        </motion.p>
        <motion.h1
          className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
          variants={fadeInAnimationVariants1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </motion.h1>
        <motion.p
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
          variants={fadeInAnimationVariants2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          Discover stylish nike arrivals,iub had icb jbadj for your active life.
        </motion.p>
        <Button label="Show Now" iconURL={arrowRight}></Button>
        <motion.div
          className=" flex justify-start items-start flex-wrap w-full mt-20 gap-16"
          variants={fadeInAnimationVariants2}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {statistics.map((stats) => (
            <div key={stats.label}>
              <p className="text-4xl font-palanquin font-bold ">
                {stats.value}
              </p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stats.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      <motion.div
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
        variants={fadeInAnimationVariants1}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className=" flex sm:gap-5 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe, index) => (
            <motion.div
              key={shoe}
              variants={fadeInAnimationVariants3}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
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
