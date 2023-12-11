'use client'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden"
    >
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-xl ${className}`}
        variants={quote}
        initial="initial"
        animate={controls}
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + '-' + index}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
