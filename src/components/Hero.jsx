import React from "react";

const Hero = () => {
  return (
    <div className="text-center space-y-7">
      <h2 className="font-bold text-5xl">
        We Build <br />{" "}
        <span className="font-extrabold bg-clip-text text-transparent bg-linear-to-bl from-[#632EE3] to-[#9F62F2]">
          Productive
        </span>{" "}
        Apps
      </h2>
      <p className="text-[#627382] w-4/5 lg:w-2/4  mx-auto">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <button className="btn mr-3">
        <div className="flex items-center gap-1">
          <img
            className="w-5"
            src="/src/assets/icons8-play-store-48.png"
            alt=""
          />{" "}
          <span>Google Play</span>
        </div>
      </button>
      <button className="btn">
        <div className="flex items-center gap-1">
          <img
            className="w-5"
            src="/src/assets/icons8-app-store-48.png"
            alt=""
          />{" "}
          <span>App Store</span>
        </div>
      </button>
      <div>
        <img
          src="/src/assets/hero.png"
          alt="hero"
          className="mx-auto px-10 lg:px-0"
        />
        <div className="bg-linear-to-bl from-[#632EE3] to-[#9F62F2] p-8 md:p-11 space-y-7 text-white">
          <h4 className="font-bold text-3xl">
            Trusted by Millions, Built for You
          </h4>
          <div className="flex w-full lg:w-1/2 mx-auto justify-between">
            <div>
              <p className="text-white/60 font-light">Total Downloads</p>
              <p className="font-extrabold text-4xl my-3">29.6M</p>
              <p className="text-white/60 font-light">
                21% more than last month
              </p>
            </div>
            <div>
              <p className="text-white/60 font-light">Total Reviews</p>
              <p className="font-extrabold text-4xl my-3">906K</p>
              <p className="text-white/60 font-light">
                46% more than last month
              </p>
            </div>
            <div>
              <p className="text-white/60 font-light">Active Apps</p>
              <p className="font-extrabold text-4xl my-3">132+</p>
              <p className="text-white/60 font-light">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
