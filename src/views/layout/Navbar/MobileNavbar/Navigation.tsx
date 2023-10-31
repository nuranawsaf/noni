import * as React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { links } from '../navdata';
import MenuItem from './MenuItem';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ toggle }: { toggle: any }) => {
  return (
    <motion.ul
      className="absolute top-0 right-0 z-30 h-full w-screen bg-gray-400 px-8 md:w-full"
      variants={variants}
    >
      <Link href="/">
        <div className="flex cursor-pointer items-center gap-x-2 py-4">
          <img src="" alt="innerlogo-navigation" />
        </div>
      </Link>

      <div className=" mt-12">
        {links.map((link) => (
          <MenuItem toggle={toggle} link={link} key={link.id} />
        ))}
      </div>
    </motion.ul>
  );
};

export default Navigation;
