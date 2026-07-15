import { motion } from "framer-motion";

const HeroAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.2,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      
    >
      {children}
    </motion.div>
  );
};

export default HeroAnimation;