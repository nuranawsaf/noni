import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="hero-bg bg-style">
      <div className="container flex items-center justify-between py-10">
        <div className=" font-bold  text-tertiary">
          <h1 className="uppercase">
            <span className="text-primary">noni</span> full cream
          </h1>
          <h1 className="uppercase">sweets, a bite of</h1>
          <h1 className="uppercase">deliciousness</h1>

          <div className="text-2xl font-normal">
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <p>and typesetting industry. Lorem Ipsum has been</p>
          </div>

          <div className="mt-16">
            <button className="flex items-center gap-4 rounded-full bg-primary px-6 py-1 text-white">
              Watch Video
              <img width={64} src="/assets/images/play.png" alt="" />
            </button>
          </div>
        </div>

        <div>
          <Image
            src="/assets/images/hero-sweet.png"
            width={400}
            height={400}
            alt="Picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
