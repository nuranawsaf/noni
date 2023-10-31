import React from 'react';

import { NextPage } from 'next';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MainHome from '@/views/components/home/MainHome';

const images = [
  { id: 1, src: '/assets/images/next-js.svg' },
  { id: 2, src: '/assets/images/tailwindcss.svg' },
  { id: 3, src: '/assets/images/typescript.svg' },
  { id: 4, src: '/assets/images/framer-motion.svg' },
  { id: 5, src: '/assets/images/redux.svg' },
  { id: 6, src: '/assets/images/dark.svg' },
];

const Home: NextPage = () => {
  return (
    <div>
      <MainHome />
    </div>
  );
};

export default Home;
