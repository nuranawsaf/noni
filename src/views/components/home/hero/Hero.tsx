import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=" bg-style">
      <div className="container  items-start justify-between  lg:grid lg:grid-cols-2">
        <div className=" font-bold  text-tertiary">
          <h1 className="uppercase">
            <span className="text-primary">noni</span> full cream
          </h1>
          <h1 className="my-2 uppercase lg:my-0">sweets, a bite of</h1>
          <h1 className="uppercase">deliciousness</h1>

          <div className="hidden text-2xl font-normal lg:block">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <p>and typesetting industry. Lorem Ipsum has been</p>
          </div>
          <div className="mt-2 block lg:hidden">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been.
            </p>
          </div>

          <div className=" mt-4 lg:mt-16">
            <button className="flex items-center justify-between gap-4 rounded-full bg-primary py-1 pl-6 pr-1 text-white">
              Watch Video
              <img
                className="w-[2.5rem] lg:w-[4rem]"
                src="/assets/images/play.png"
                alt=""
              />
            </button>
          </div>
        </div>

        <div className=" mt-20 w-full lg:mt-0">
          <img src="/assets/images/hero-sweet.png" alt="Picture" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
