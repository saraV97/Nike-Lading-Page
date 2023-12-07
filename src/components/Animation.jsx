// import { motion } from "framer-motion";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
const fadeInAnimationVariants1 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
    },
  },
};

const fadeInAnimationVariants2 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const fadeInAnimationVariants3 = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 * index,
    },
  }),
};

const fadeInAnimationVariants4 = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.7,
    },
  },
};

const fadeInAnimationVariants5 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

const fadeInAnimationVariants6 = {
  initial: (index) => ({
    opacity: 0,
    x: index == 1 ? 100 : -100,
  }),
  animate: () => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  }),
};
const fadeInAnimationVariants7 = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
const fadeInAnimationVariants8 = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export {
  fadeInAnimationVariants,
  fadeInAnimationVariants1,
  fadeInAnimationVariants2,
  fadeInAnimationVariants3,
  fadeInAnimationVariants4,
  fadeInAnimationVariants5,
  fadeInAnimationVariants6,
  fadeInAnimationVariants7,
  fadeInAnimationVariants8,
};
