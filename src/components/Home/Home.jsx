import React from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Home = () => {
  return (
    <>
      {/* Page 1 */}
      <div className="h-screen  w-full flex pl-6 ">
        <div className="h-screen w-1/2">
          <div className="flex pt-36 pl-24  justify-center  h-fit w-fit">
            <h1 className="text-7xl font-medium">
              It's Not Just <FitnessCenterIcon /> <br /> A workout. It's <br />{" "}
              fitness
            </h1>
          </div>
          <div className="flex pt-8 capitalize pl-24  justify-center  h-fit w-fit">
            <h6>
              a gymnasium also know as a gym, is a covered <br /> location for
              athletics. The word is derived from the <br /> ancient greek term
              "gymnasium".
            </h6>
          </div>
          <div className="pt-8 pr-52 flex items-center justify-end gap-3 ">
            <div>
              <ArrowRightAltIcon className="text-orange-700 " />
            </div>
            <div>
              <Button variant="contained" color="success">
                get started
              </Button>
            </div>
          </div>
          <div className="flex  items-center gap-9 pt-10 pl-24">
            <div className=" text-white font-medium text-1xl h-44 w-40 bg-orange-700 rounded-md flex items-center justify-center">
              Fitness <br /> Center
            </div>
            <div className=" text-white font-medium text-1xl h-44 w-40 bg-orange-700 rounded-md flex items-center justify-center">
              Online <br /> Classes
            </div>
            <div>
              <img
                className="w-44 h-44 ml-10"
                src="https://m.media-amazon.com/images/I/61SyCv2bPsL.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="h-screen w-1/2  bg-green-400">
          <img
            className="h-full w-full object-cover"
            src="https://images.pexels.com/photos/5319381/pexels-photo-5319381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>

      {/* Page 2 */}
      <div className=" w-full mb-10 bg-gray-100 mt-5">
        <div className=" w-full">
          <div className="text-center p-12">
            <h1 className="text-4xl uppercase font-bold  m-11">Our Servises</h1>
          </div>
          <div className=" w-full px-28  flex items-center justify-between">
            <div className="h-full w-96 border-black border-2 rounded-md  text-center flex flex-col">
              <div className="h-20 w-full mt-7 flex items-center justify-center">
                <div className="h-full w-20 rounded-lg overflow-hidden">
                  <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/6455812/pexels-photo-6455812.jpeg" alt="" />
                </div>
              </div>
              <div className="mt-7">
                <h1 className="font-bold text-3xl">Lose extra weight</h1>
              </div>
              <div className="w-96 mt-7">
                <h6 className="text-sm  capitalize">
                  a gymnasium also know as a gym, is a covered <br /> location
                  for athletics. The word is derived from the <br /> ancient
                  greek term "gymnasium".
                </h6>
              </div>
              <div className="mt-7 mb-7 flex items-center justify-center gap-4">
                <div>
                  <h1 className="font-medium">Read More</h1>
                </div>
                <div>
                  <ArrowCircleRightIcon />
                </div>
              </div>
            </div>
            <div className="h-full w-96 border-black border-2 rounded-md  text-center flex flex-col">
              <div className="h-20 w-full mt-7 flex items-center justify-center">
                <div className="h-full w-20 rounded-lg overflow-hidden">
                  <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg" alt="" />
                </div>
              </div>
              <div className="mt-7">
                <h1 className="font-bold text-3xl">strength traning</h1>
              </div>
              <div className="w-96 mt-7">
                <h6 className="text-sm  capitalize">
                  a gymnasium also know as a gym, is a covered <br /> location
                  for athletics. The word is derived from the <br /> ancient
                  greek term "gymnasium".
                </h6>
              </div>
              <div className="mt-7 mb-7 flex items-center justify-center gap-4">
                <div>
                  <h1 className="font-medium">Read More</h1>
                </div>
                <div>
                  <ArrowCircleRightIcon />
                </div>
              </div>
            </div>
            <div className="h-full w-96 border-black border-2 rounded-md  text-center flex flex-col">
              <div className="h-20 w-full mt-7 flex items-center justify-center">
                <div className="h-full w-20  rounded-lg overflow-hidden">
                  <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
              </div>
              <div className="mt-7">
                <h1 className="font-bold text-3xl">cardio & strength</h1>
              </div>
              <div className="w-96 mt-7">
                <h6 className="text-sm  capitalize">
                  a gymnasium also know as a gym, is a covered <br /> location
                  for athletics. The word is derived from the <br /> ancient
                  greek term "gymnasium".
                </h6>
              </div>
              <div className="mt-7 mb-7 flex items-center justify-center gap-4">
                <div>
                  <h1 className="font-medium">Read More</h1>
                </div>
                <div>
                  <ArrowCircleRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page 3 */}

      <div className="h-screen w-full flex items-center">
        <div className="h-full w-3/5">
          <img
            className="h-full w-full object-cover"
            src="/Frame 1.png"
            alt=""
          />
        </div>
        <div className="h-full w-2/5  flex flex-col pl-1 pt-52  ">
          <div>
            <h1 className="font-bold text-4xl uppercase">
              Caucasian professional <br /> male runner athlete <br /> training
            </h1>
          </div>
          <div className="mt-7">
            <h6 className="text-1xl capitalize">
              a gymnasium also know as a gym, is a covered <br /> location for
              athletics. The word is derived from the <br /> ancient greek term
              "gymnasium".
            </h6>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <h2 className="text-orange-700 font-semibold">
              Join Our community
            </h2>
            <ArrowCircleRightIcon className="text-orange-700" />
          </div>
        </div>
      </div>

      {/* Page 4 */}

      <div className="h-screen w-full pl-28 ">
        <div className="mt-7">
          <h1 className="text-5xl uppercase font-semibold">expert trainer</h1>
        </div>
        <div className=" h-96 flex items-center justify-between mt-32 pr-28">
          <div className="w-72 h-full rounded-md  relative">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                src="https://images.pexels.com/photos/136405/pexels-photo-136405.jpeg"
                alt=""
              />
            </div>
            <div className="absolute w-56 h-28 bg-white drop-shadow-lg -bottom-16 rounded-lg z-10 left-7 flex items-center justify-center">
              <div>
                <h1 className="text-2xl font-semibold">Swati Mishra</h1>
                <h1 className="text-1xl">Gym Trainer</h1>
              </div>
            </div>
          </div>
          <div className="w-72 h-full rounded-md  relative">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg"
                alt=""
              />
            </div>
            <div className="absolute w-56 h-28 bg-white drop-shadow-lg  -bottom-16 rounded-lg z-10 left-7 flex items-center justify-center">
              <div>
                <h1 className="text-2xl font-semibold">Gulshan Kumar</h1>
                <h1 className="text-1xl">Gym Trainer</h1>
              </div>
            </div>
          </div>
          <div className="w-72 h-full rounded-md  relative">
            <div className="w-full h-full overflow-hidden rounded-lg">
              <img
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                src="https://images.pexels.com/photos/2794011/pexels-photo-2794011.jpeg"
                alt=""
              />
            </div>
            <div className="absolute w-56 h-28 bg-white drop-shadow-lg  -bottom-16 rounded-lg z-10 left-7 flex items-center justify-center">
              <div>
                <h1 className="text-2xl font-semibold">Anurag yadav</h1>
                <h1 className="text-1xl">Gym Trainer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
