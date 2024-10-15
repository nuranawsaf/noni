import React from 'react';
import { haritems_data } from './haritems_data';

const HariTems = () => {
  return (
    <div className="container mt-10 grid grid-cols-1 lg:grid-cols-2">
      {haritems_data.map((item, index) => {
        return (
          <div className="mb-14 grid rounded-2xl border lg:h-max lg:w-max">
            <div className="h-full w-full lg:h-64 lg:w-[28rem]">
              <img
                className="h-full w-full rounded-2xl object-cover"
                src={item.img}
                alt=""
              />
            </div>

            <div className="text-center">
              <h3 className="my-5  font-semibold text-secondary">
                {item.name}
              </h3>
              <h3 className="mb-8 font-bold text-primary">{item.price}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HariTems;
