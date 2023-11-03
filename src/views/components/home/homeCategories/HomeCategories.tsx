import React from 'react';
import { homecategories_data } from './homecategories-data';

const HomeCategories = () => {
  return (
    <div className="container ">
      <div className="my-20 text-center">
        <h6 className="font-bold uppercase tracking-[3.5px] text-primary">
          Customer Favorites
        </h6>
        <h2 className="font-bold">Popular Catagories</h2>
      </div>

      <div className="grid grid-cols-4 gap-10">
        {homecategories_data.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-color flex w-full justify-center py-10"
            >
              <div className="">
                <div className="flex items-center justify-center rounded-full bg-white px-5 lg:h-[9.45rem] lg:w-[9.45rem]">
                  <img src={item.img} alt="" />
                </div>
                <div className=" mt-7 text-center">
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
