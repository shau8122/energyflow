'use client'


import { useEffect, useRef } from "react";

import {useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumbersProps{
  value:number,
}

const AnimatedNumbers:React.FC<AnimatedNumbersProps> = ({
  value
}) => {
  const ref = useRef<HTMLSpanElement>(null); 

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0)<= value){
        ref.current.textContent = latest.toFixed(0)
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
export default AnimatedNumbers;