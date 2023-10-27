import React from "react";
import style from './Membership.module.css'

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import Button from "@mui/material/Button";

const Membership = () => {
  return (
    <>
      <div className="mt-8  mb-10 w-full pl-32 pt-20 pr-28">
        <div className="text-center uppercase">
          <h1 className={style.three}>Gym membership</h1>
        </div>
        {/* All cards */}
        <div className=" w-full flex justify-between px-9  mt-24 py-9">
          {/* card */}
          <div className=" h-96 hover:scale-105 hover:rotate-3 hover:bg-black hover:text-white transition-transform duration-300 w-72 drop-shadow-2xl bg-white overflow-hidden relative rounded-lg ">
            {/* top  */}
            <div className="w-full h-36  text-center ">
              <div className="mt-5 text-3xl font-semibold">
                <h1>Pass 'Trail'</h1>
              </div>
              <div className="mt-5 mb-2 text-3xl font-semibold">
                <h1>$0</h1>
              </div>
            </div>
            {/* bottom */}
            <div className="w-full h-full   pl-7">
              <div className="flex items-center w-full  gap-3 mt-0">
                <CheckCircleRoundedIcon />
                <h1>
                  Access to gym from <br /> 8:00 to 14:00
                </h1>
              </div>
              <div className="flex w-full items-center  gap-3 mt-4">
                <CheckCircleRoundedIcon />
                <h1>
                  The trainer on duty will <br /> introduce you to the gym
                </h1>
              </div>
              {/* Button  */}
              <div className="mt-7 items-end">
                <Button variant="contained" color="success">
                  Buy
                </Button>
              </div>
            </div>
          </div>

          {/* card2 */}

          <div className=" h-96 w-72 hover:scale-105 hover:rotate-3 hover:bg-black hover:text-white transition-transform duration-300 drop-shadow-2xl bg-white overflow-hidden relative rounded-lg ">
            {/* top  */}
            <div className="w-full h-36  text-center ">
              <div className="mt-5 text-3xl font-semibold">
                <h1>Pass 'Trail'</h1>
              </div>
              <div className="mt-5 mb-2 text-3xl font-semibold">
                <h1>$119</h1>
              </div>
            </div>
            {/* bottom */}
            <div className="w-full h-full   pl-7">
              <div className="flex items-center w-full  gap-3 mt-0">
                <CheckCircleRoundedIcon />
                <h1>
                  Access to gym from <br /> 8:00 to 14:00
                </h1>
              </div>
              <div className="flex w-full items-center  gap-3 mt-4">
                <CheckCircleRoundedIcon />
                <h1>
                  The trainer on duty will <br /> introduce you to the gym
                </h1>
              </div>
              {/* Button  */}
              <div className="mt-7 items-end">
                <Button variant="contained" color="success">
                  Buy
                </Button>
              </div>
            </div>
          </div>

          {/* card2 */}

          <div className=" h-96 w-72 hover:scale-105 hover:rotate-3 hover:bg-black hover:text-white transition-transform duration-300 drop-shadow-2xl bg-white overflow-hidden relative rounded-lg ">
            {/* top  */}
            <div className="w-full h-36  text-center ">
              <div className="mt-5 text-3xl font-semibold">
                <h1>Pass 'Trail'</h1>
              </div>
              <div className="mt-5 mb-2 text-3xl font-semibold">
                <h1>$49</h1>
              </div>
            </div>
            {/* bottom */}
            <div className="w-full h-full   pl-7">
              <div className="flex items-center w-full  gap-3 mt-0">
                <CheckCircleRoundedIcon />
                <h1>
                  Access to gym from <br /> 8:00 to 14:00
                </h1>
              </div>
              <div className="flex w-full items-center  gap-3 mt-4">
                <CheckCircleRoundedIcon />
                <h1>
                  The trainer on duty will <br /> introduce you to the gym
                </h1>
              </div>
              {/* Button  */}
              <div className="mt-7 items-end">
                <Button variant="contained" color="success">
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* All cards */}
        <div className=" w-full flex justify-between px-9  mt-12 py-9">
          {/* card */}
          <div className=" h-96 w-72 hover:scale-105 hover:rotate-3 hover:bg-black hover:text-white transition-transform duration-300 drop-shadow-2xl bg-white overflow-hidden relative rounded-lg ">
            {/* top  */}
            <div className="w-full h-36  text-center ">
              <div className="mt-5 text-3xl font-semibold">
                <h1>Pass 'Trail'</h1>
              </div>
              <div className="mt-5 mb-2 text-3xl font-semibold">
                <h1>$85</h1>
              </div>
            </div>
            {/* bottom */}
            <div className="w-full h-full   pl-7">
              <div className="flex items-center w-full  gap-3 mt-0">
                <CheckCircleRoundedIcon />
                <h1>
                  Access to gym from <br /> 8:00 to 14:00
                </h1>
              </div>
              <div className="flex w-full items-center  gap-3 mt-4">
                <CheckCircleRoundedIcon />
                <h1>
                  The trainer on duty will <br /> introduce you to the gym
                </h1>
              </div>
              {/* Button  */}
              <div className="mt-7 items-end">
                <Button variant="contained" color="success">
                  Buy
                </Button>
              </div>
            </div>
          </div>

          {/* card2 */}

          <div className=" h-96 w-72 drop-shadow-2xl hover:scale-105 hover:rotate-3 hover:bg-black hover:text-white transition-transform duration-300 bg-white overflow-hidden relative rounded-lg ">
            {/* top  */}
            <div className="w-full h-36  text-center ">
              <div className="mt-5 text-3xl font-semibold">
                <h1>Pass 'Trail'</h1>
              </div>
              <div className="mt-5 mb-2 text-3xl font-semibold">
                <h1>$165</h1>
              </div>
            </div>
            {/* bottom */}
            <div className="w-full h-full   pl-7">
              <div className="flex items-center w-full  gap-3 mt-0">
                <CheckCircleRoundedIcon />
                <h1>
                  Access to gym from <br /> 8:00 to 14:00
                </h1>
              </div>
              <div className="flex w-full items-center  gap-3 mt-4">
                <CheckCircleRoundedIcon />
                <h1>
                  The trainer on duty will <br /> introduce you to the gym
                </h1>
              </div>
              {/* Button  */}
              <div className="mt-7 items-end">
                <Button variant="contained" color="success">
                  Buy
                </Button>
              </div>
            </div>
          </div>

          {/* card2 */}

          <div className=" h-96 w-72 drop-shadow-2xl hover:scale-105 hover:rotate-3 hover:bg-black hover:text-white transition-transform duration-300 bg-white overflow-hidden relative rounded-lg ">
            {/* top  */}
            <div className="w-full h-36  text-center ">
              <div className="mt-5 text-3xl font-semibold">
                <h1>Pass 'Trail'</h1>
              </div>
              <div className="mt-5 mb-2 text-3xl font-semibold">
                <h1>$195</h1>
              </div>
            </div>
            {/* bottom */}
            <div className="w-full h-full   pl-7">
              <div className="flex items-center w-full  gap-3 mt-0">
                <CheckCircleRoundedIcon />
                <h1>
                  Access to gym from <br /> 8:00 to 14:00
                </h1>
              </div>
              <div className="flex w-full items-center  gap-3 mt-4">
                <CheckCircleRoundedIcon />
                <h1>
                  The trainer on duty will <br /> introduce you to the gym
                </h1>
              </div>
              {/* Button  */}
              <div className="mt-7 items-end">
                <Button variant="contained" color="success">
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
