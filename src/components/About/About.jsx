import React from "react";
import css from './About.module.css'

const About = () => {
  return (
    <>
      <div className="mt-8 mb-10 w-full pl-32 pt-20 pr-28">
        <div className="text-center uppercase">
          <h1 className={css.three} >About Us</h1>
        </div>
        <div className="w-full  flex mt-24 ">
          {/* left side */}
          <div className="w-1/2 ">
            <div className="mt-10 ">
              <h1 className="text-3xl font-semibold capitalize">
                Respect your body, it's the <br /> only one you get.
              </h1>
            </div>
            <div className="mt-10">
              <h6>
                our coaches support you ina way no one else can with the best
                fitness and <br /> holistic help inside the gym - and out.
              </h6>
            </div>

            <div>
              <div className="w-full h-48 mt-7  flex rounded-md bg-slate-100 p-10">
                <div className="w-3/5">
                  <div className="mb-5">
                    <h1 className="font-semibold text-2xl uppercase">
                      Motivation
                    </h1>
                  </div>
                  <div>
                    <h6>
                      Our Community of memebr are healthily waiting to meet you
                    </h6>
                  </div>
                </div>
                <div className="w-2/5  h-full rounded-md overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full h-48 mt-7  flex flex-row-reverse rounded-md bg-slate-100 p-10">
                <div className="w-3/5 ml-10">
                  <div className="mb-5">
                    <h1 className="font-semibold text-2xl uppercase">
                      Inspire
                    </h1>
                  </div>
                  <div>
                    <h6>
                      The greatest champions of our places are trained here.
                    </h6>
                  </div>
                </div>
                <div className="w-2/5  h-full rounded-md overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src="https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}

          <div className="flex   w-1/2 items-center justify-center">
            <div>
              <img src="/Group 1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
