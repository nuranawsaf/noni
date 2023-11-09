import React from 'react';

const Footer = () => {
  return (
    <div className="container mt-28">
      <div className=" grid lg:grid-cols-4">
        <div className="">
          <img width={150} src="/assets/images/logo.png" alt="" />
          <p className="mt-10 text-2xl font-medium text-tertiary">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </div>
        <div className=" ">
          <h5 className="text-[1.63rem] font-semibold">Userful links</h5>
          <div className=" text-tertiary">
            <p className="my-4 text-2xl font-medium">About us</p>
            <p className="text-2xl font-medium">Events</p>
            <p className="my-4 text-2xl font-medium">Blogs</p>
            <p className="text-2xl font-medium">FAQ</p>
          </div>
        </div>
        <div className="">
          <h5 className="text-[1.63rem] font-semibold">Main Menu</h5>
          <div className=" text-tertiary">
            <p className="my-4 text-2xl font-medium">Home</p>
            <p className=" text-2xl font-medium">Offers</p>
            <p className="my-4 text-2xl font-medium">Menus</p>
            <p className="text-2xl font-medium">Reservation</p>
          </div>
        </div>
        <div className="">
          <h5 className="text-[1.63rem] font-semibold">Contact Us</h5>
          <div className="mt-4 text-tertiary">
            <p className="text-2xl font-medium">example@email.com</p>
            <p className="my-4 text-2xl font-medium">+64 958 248 966</p>
            <p className="text-2xl font-medium">Social media</p>
          </div>
        </div>
      </div>
      <p className="mt-24 py-6 text-center text-2xl text-tertiary">
        Copyright 2023 Noni | All rights reserved
      </p>
    </div>
  );
};

export default Footer;
