import React from "react";
import pricing from "../data/pricing";
import pricingPhone from "../assets/images/pricing_phone.png";
import playStore from "../assets/images/play_store.png";
import appStpre from "../assets/images/app_store.png";

const Pricing = () => {
  return (
    <>
      <div className="text-center text-white mb-14">
        <h2 className="text-3xl font-bold mb-2">
          Insightful Journeys, Smarter Business
        </h2>
        <p className="text-base font-semibold text-gray-400">
          Discover tips, guides, and inspiring stories to make the most out of
          every business trip.
        </p>
      </div>

      <div className="relative mb-40">
        <div className="relative h-full flex flex-col items-center gap-10 xl:flex-row xl:justify-around xl:items-stretch">
          {pricing.map((plan, index) => (
            <div
              key={index}
              className="relative backdrop-blur-2xl text-white p-8 rounded-lg shadow-lg w-80 transition-all duration-300 transform hover:scale-105"
            >
              <div className="absolute left-0 right-0 ml-auto mr-auto h-3/4 w-3/4 inset-0 bg-gradient-to-b from-[#2386F4]/20 to-[#FB37FF]/20 rounded-lg filter blur-xl opacity-50 z-0"></div>
              <div className="absolute bottom-0 right-0 w-full h-full rounded-3xl border-b-2 border-r-2 border-[#2386F4]/60"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl border-t-2 border-l-2 border-[#FB37FF]/60"></div>
              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
              <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
              <p className="mb-6">{plan.description}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      className="w-10 h-10 mr-2 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full py-2 backdrop-blur-2xl rounded-lg font-semibold text-white">
                <div className="absolute bottom-0 right-0 w-full h-full rounded-lg border-b-2 border-r-2 border-[#2386F4]/60"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-lg border-t-2 border-l-2 border-[#FB37FF]/60"></div>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="p-10 flex flex-col gap-10 2xl:gap-0 2xl:flex-row 2xl:justify-between text-white bg-gradient-to-b from-[#2386F414]/10 to-[#4B008208]/10">
        <div className="flex flex-col justify-center gap-10">
          <h1 className="text-2xl xl:text-6xl font-bold">Download Now!</h1>
          <div className="flex gap-6">
            <img
              src={playStore}
              alt=""
              className="w-40 sm:w-52 md:w-60 lg:w-80 xl:w-full"
            />
            <img
              src={appStpre}
              alt=""
              className="w-40 sm:w-52 md:w-60 lg:w-80 xl:w-full"
            />
          </div>
        </div>
        <div>
          <img src={pricingPhone} alt="pricing phone" />
        </div>
      </div>
    </>
  );
};

export default Pricing;
