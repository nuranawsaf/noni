import React from 'react';

const HomeFeedback = () => {
  return (
    <div className="container my-24">
      <div className="grid lg:grid-cols-2">
        <div className="">
          <h6 className="font-bold uppercase tracking-[3.5px] text-primary">
            testimonials
          </h6>
          <h2 className="mb-7 font-bold">What Our Customers</h2>
          <h2 className="font-bold">Say About Us</h2>

          <div className="mt-7  text-tertiary">
            <p className="text-[1.63rem] font-medium">
              “I had the pleasure of dining at Foodi last night, and
            </p>
            <p className="my-4 text-[1.63rem] font-medium">
              I'm still raving about the experience! The attention to
            </p>
            <p className="text-[1.63rem] font-medium">
              detail in presentation and service was impeccable”
            </p>
          </div>

          <div className="mt-16 items-center gap-12 lg:flex">
            <img src="/assets/images/avater.png" alt="" />
            <div>
              <h6 className="text-[1.63rem] font-semibold">
                Customer Feedback
              </h6>
              <div className="mt-2 flex items-center gap-4">
                <img src="/assets/images/star.png" alt="" />
                <h6 className=" font-medium">
                  <span className=" font-semibold text-tertiary">4.9</span>{' '}
                  (18.6k Reviews)
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-end">
          <img src="/assets/images/feedback.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeFeedback;
