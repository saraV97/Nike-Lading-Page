import { motion } from "framer-motion";
import { navLinks } from "../../constants";
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  // const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div
      className="absolute w-full h-full flex flex-col items-center justify-center gap-5"
      variants={variants}
    >
      {navLinks.map((item) => (
        <motion.a
          href={item.href}
          key={item.label}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className=" font-montserrat text-black leading-normal text-3xl font-semibold mt-6 hover:text-white"
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
