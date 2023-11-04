import * as React from 'react';
import { RiMenu3Line } from 'react-icons/ri';

import { motion } from 'framer-motion';

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#CFCFCF"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }: { toggle: any }) => (
  <button
    className="btn-toggle absolute right-6 top-0 mt-6 text-3xl text-primary"
    onClick={toggle}
  >
    <RiMenu3Line />
  </button>
);

export default MenuToggle;
