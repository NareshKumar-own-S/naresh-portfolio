'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillProps {
  src: string;
  width: number;
  height: number;
  index: number;
}
const SkillDataProvider = ({ src, width, height, index }: SkillProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const animationDepay = 0.3;
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDepay }}
    >
      <Image src={src} height={height} width={width} alt="skill image" />
    </motion.div>
  );
};

export default SkillDataProvider;
