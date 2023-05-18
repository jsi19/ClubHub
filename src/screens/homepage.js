import { motion } from "framer-motion";
import React from "react";

const Home = () => {
  const animationVariants = {
    initial: { opacity: 0, y: -400 },
    animate: {
      scale: 1.5,
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
      rotate: 360,
    },
  };

  return (
    <div className="flex h-screen">
      <motion.h1
        initial="initial"
        animate="animate"
        variants={animationVariants}
        className="m-auto text-3xl"
      >
        Welcome To ClubHub!
      </motion.h1>
    </div>
  );
};

export default Home;