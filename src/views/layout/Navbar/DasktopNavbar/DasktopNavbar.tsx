import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { links } from '../navdata';
import TopNav from './TopNav/TopNav';

const DasktopNavbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="hidden lg:block">
        <TopNav />
      </div>

      <div className="border-b-2">
        <nav className="container my-2 hidden lg:block">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/">
                <img
                  width={90}
                  src="https://res.cloudinary.com/ddtyi1hm8/image/upload/v1728903751/noni-menu/Untitled-1_qyqagw.png"
                  alt="Brand Logo"
                />
              </Link>
            </div>

            <div className="flex items-center gap-10  ">
              {links.map((link) => {
                return (
                  <Link key={link.id} href={link.href}>
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DasktopNavbar;
