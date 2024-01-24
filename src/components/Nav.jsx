import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { useState } from "react";
import Links from "./Sidebar/Links.jsx";
import ToggleButton from "./Sidebar/toggleButton";

import {
  fadeInAnimationVariants7,
  fadeInAnimationVariants8,
} from "./Animation";

const variants = {
  open: {
    clipPath: "circle(1200px at 330px 1px)",
    opacity: 1,
    transition: {
      type: "linear",
      stiffness: 200,
    },
  },
  closed: {
    clipPath: "circle(30px at 330px 1px)",
    // opacity: 0,
    transition: {
      delay: 0.3,
      type: "linear",
      stiffness: 800,
      damping: 20,
    },
  },
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="padding-x py-8 fixed z-20 w-full bg-white">
      <nav className="flex justify-between items-center">
        <motion.a
          href="/"
          variants={fadeInAnimationVariants7}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </motion.a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item, index) => (
            <motion.li
              key={item.label}
              variants={fadeInAnimationVariants8}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <a
                href={item.href}
                className=" font-montserrat text-slate-gray leading-normal taxt-lg hover:text-coral-red"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        {/* <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div> */}
        <div className=" hidden max-lg:block">
          <motion.div
            className="flex flex-col items-center justify-center bg-white relative z-20 "
            animate={open ? "open" : "closed"}
          >
            <motion.div
              className="bg-coral-red fixed top-0 right-0 bottom-0 w-[300px] z-[-1] "
              variants={variants}
              initial={{ opacity: 0 }}
            >
              <Links />
            </motion.div>
            <ToggleButton
              setOpen={setOpen}
              className="z-999 w-12 h-12 border-r-[50%] top-7 right-7 fixed bg-transparent border-none cursor-pointer"
            />
          </motion.div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
