import React from 'react';
import { sweetsitem_data } from './menuiteams-data';
import Link from 'next/link';

const MenuIteams = () => {
  return (
    <div className="container my-10 grid gap-8 lg:grid-cols-5">
      {sweetsitem_data.map((item) => {
        return (
          <Link href={item.href}>
            <div className="cursor-pointer rounded-xl border bg-green-100 py-6">
              <div className="grid justify-center">
                <img
                  className="h-44 w-44 rounded-full object-cover p-2"
                  src={item.img}
                  alt=""
                />
              </div>

              <h5 className="mt-1 grid justify-center text-xl font-semibold">
                {item.title}
              </h5>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuIteams;
