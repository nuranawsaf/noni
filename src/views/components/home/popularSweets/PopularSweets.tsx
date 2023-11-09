import React from 'react';
import { popularsweet_data } from './popularsweet-data';

const PopularSweets = () => {
  return (
    <div className="container ">
      <div className="mb-16 mt-16 text-center lg:mt-48">
        <h2 className="font-bold">Popular Sweets</h2>
        <div className="mt-2 font-normal  text-secondary lg:mt-7">
          <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </h6>
          <h6>been the industry's standard dummy text ever since the 1500s</h6>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {popularsweet_data.map((item, index) => {
          return (
            <div key={index} className="sweets-card w-full p-3">
              <div className="">
                <div>
                  <img
                    className="bg-style rounded-t-[2.5rem]"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className=" my-8 text-center">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-1 text-2xl text-tertiary">{item.des}</p>
                </div>

                <div className="flex items-center justify-between p-4 font-inter text-2xl">
                  <h6 className=" text-tertiary">{item.price}</h6>
                  <p className="h-max w-max rounded-xl bg-primary px-4 py-2 text-3xl text-white">
                    {item.cart}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20 mb-24 flex w-full justify-center">
        <button className="w-max  rounded-full bg-primary px-16 py-4 text-2xl text-white">
          See All Item
        </button>
      </div>
    </div>
  );
};

export default PopularSweets;
