import React from 'react';

import { NextPage } from 'next';

import MainHome from '@/views/components/home/MainHome';
import MenuIteams from '@/views/components/menu/MenuIteams';

const Home: NextPage = () => {
  return (
    <div>
      <MainHome />
    </div>
  );
};

export default Home;
