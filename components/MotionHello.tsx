'use client'
import { motion } from "framer-motion";

const MotionHello: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      Hello, Framer Motion!
    </motion.div>
  );
};

export default MotionHello;
