import React, { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { links } from '../navdata';

const DasktopNavbar = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="">
      <nav className="hidden px-[10rem] py-4 lg:block">
        <div className="  flex items-center justify-between">
          <div>
            <Link href="/">
              <img src="" alt="Brand Logo" />
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
