import React from 'react';

import dynamic from 'next/dynamic';

<<<<<<< HEAD
=======
import Navbar from './Navbar/Navbar';

>>>>>>> origin/master
const ToggleButton = dynamic(
  () => import('../shared/ToggleButton/ToggleButton'),
  {
    ssr: false,
  }
);

<<<<<<< HEAD
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="  absolute  top-6 right-8">
=======
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <div className=" absolute top-6  right-8">
>>>>>>> origin/master
        {/*
          The following props can be passed: light, dark, size, tooltip, darkIcon & lightIcon 
          Note: For customizing darkIcons and lightIcons, you should use react-icons
          */}
<<<<<<< HEAD
        <ToggleButton tooltip />
      </div>

=======
        {/* <ToggleButton tooltip /> */}
      </div>
      <Navbar />
>>>>>>> origin/master
      {children}
    </div>
  );
};

export default Layout;
