import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { links } from '../navdata';
import TopNav from './TopNav/TopNav';

const DasktopNavbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className=" hidden lg:block">
        <TopNav />
      </div>
      <nav className="container hidden py-2 lg:block">
        <div className="  flex items-center justify-between">
          <div>
            <Link href="/">
              <img width={150} src="/assets/images/logo.png" alt="Brand Logo" />
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
  );
};

export default DasktopNavbar;
