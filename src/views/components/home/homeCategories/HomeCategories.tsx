import React from 'react';
import { homecategories_data } from './homecategories-data';

const HomeCategories = () => {
  return (
    <div className="container ">
      <div className="my-10 text-center lg:my-20">
        <h6 className="font-bold uppercase tracking-[3.5px] text-primary">
          Customer Favorites
        </h6>
        <h2 className="font-bold">Popular Catagories</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-4">
        {homecategories_data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-color flex w-full justify-center py-10"
            >
              <div className="">
                <div className="flex  h-[9.45rem] w-[9.45rem] items-center justify-center rounded-full bg-white px-5">
                  <img src={item.img} alt="" />
                </div>
                <div className="mt-3 text-center lg:mt-7">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p>{item.des}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeCategories;
