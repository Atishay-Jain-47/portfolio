import React from "react";
import Lottie from "lottie-react";
import education from "../assets/lottie/Education.json";
import { ManitLogo } from "../assets/Constant";

function Education() {
  return (
    <div id="education" className="w-full mt-10 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1500px]">
        <div
          className="font-bold flex flex-col items-center text-indigo-600 dark:text-indigo-500 capitalize text-5xl  "
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="false"
        >
          education
        </div>

        <div className="flex flex-row w-[80%]  max-[1200px]:p-2 max-[1200px]:flex-col max-[1200px]:items-center  mt-6 p-4 justify-between mx-auto ">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-once="false"
            className="justify-end mr-0"
          >
            <Lottie
              animationData={education}
              loop={true}
              className="max-w-[500px] max-h-[500px] max-[350px]:max-w-[450px] max-[350px]:max-h-[450px]  rounded-xl "
            />
          </div>

          <div
            className="dark:text-[#e1e1e1] dark:mt-0 mt-5 flex flex-col justify-center my-auto text-[#00040f] "
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
          >
            <div className="flex gap-x-3 mt-[100px] max-[1200px]:mt-0 justify-center max-[500px]:flex-col max-[500px]:justify-between max-[500px]:items-between max-[500px]:items-center max-[500px]:gap-y-5">
              <img
                src={ManitLogo}
                className="max-w-[140px] max-h-[140px] dark:filter dark:invert  dark:brightness-[0.85] "
                style={{
                  filter:
                    "dark:invert(94%) dark:sepia(5%) dark:saturate(0%) dark:hue-rotate(180deg) dark:brightness(94%) dark:contrast(85%)",
                }}
              />

              <p className="bg-clip-text text-center max-[500px]:my-0 my-auto text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl py-4 max-w-[300px] max-h-[200px] ">
                Maulana Azad National Institute Of Technology Bhopal
              </p>
            </div>

            <div className="flex flex-col gap-5 mt-7 max-[500px]:mt-5 text-left">
              <div className="capitalize  text-slate-900 dark:text-slate-300 text-xl max-sm:text-lg">
                bachelor of technology
              </div>

              <div className="italic capitalize text-gray-700 dark:text-slate-500 text-xl max-sm:text-lg leading-5">
                August 2023 - May 2027
              </div>

              <div className="text-gray-700 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                Computer Science and Engineering
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
