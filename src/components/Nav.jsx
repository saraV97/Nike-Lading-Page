import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariants7,
  fadeInAnimationVariants4,
} from "./Animation";
const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-20 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
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
          {navLinks.map((item) => (
            <motion.li
              key={item.label}
              variants={fadeInAnimationVariants4}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <a
                href={item.href}
                className=" font-montserrat text-slate-gray leading-normal taxt-lg"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
