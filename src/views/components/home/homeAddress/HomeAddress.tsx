import React from 'react';
import { homeaddress_data } from './homeaddress-data';

const HomeAddress = () => {
  return (
    <div className="outlet-bg">
      <div className="container grid grid-cols-2 py-24 lg:gap-14">
        <div className="">
          <img src="/assets/images/outlets.png" alt="" />
        </div>

        <div className="">
          <h6 className="font-bold uppercase tracking-[3.5px] text-primary">
            outlets
          </h6>
          <h2 className="font-bold">Our Noni Branches</h2>

          <div>
            {homeaddress_data.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" mb-14 mt-14 flex items-center gap-8"
                >
                  <div>
                    <img src={item.icon} alt="" />
                  </div>
                  <div>
                    <h5 className="text-[1.63rem] font-semibold">
                      {item.branch}
                    </h5>
                    <p className="text-2xl text-tertiary">{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAddress;
