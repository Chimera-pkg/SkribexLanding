import React from "react";
import phoneSection from "../assets/images/phone-section.png";
import trips from "../assets/images/trips.png";
import pricing from "../data/pricing";
import pricingPhone from "../assets/images/pricing_phone.png";
import playStore from "../assets/images/play_store.png";
import appStpre from "../assets/images/app_store.png";
import review from "../data/review";
import Accordion from "../components/Accordion";

const Home = () => {
  return (
    <>
      <section className="mb-40 xl:mt-40 flex flex-col items-center xl:flex-row xl:justify-between">
        <div className="text-white">
          <h1 className="text-4xl xl:text-6xl font-bold">
            Start planning your
          </h1>
          <h1 className="text-4xl xl:text-6xl font-bold">Business Trip with</h1>
          <h1 className="relative text-4xl xl:text-6xl font-bold mb-20">
            <div className="w-5/12 absolute -inset-2 rounded-lg bg-gradient-to-r from-[#2386F4] to-[#575598] opacity-45 blur-lg"></div>
            <div className="relative rounded-lg">Tiktraq</div>
          </h1>
          <div className="flex gap-10 mb-20">
            <button className="px-4 py-2 backdrop-blur-2xl rounded-lg ">
              <div className="absolute bottom-0 right-0 w-full h-full rounded-lg border-b-2 border-r-2 border-[#2386F4]/60"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-lg border-t-2 border-l-2 border-[#FB37FF]/60"></div>
              Explore Tiktraq
            </button>
            <div className="bg-gradient-to-r from-[#2386F4] via-[#3D6EC6] to-[#575598] px-4 py-2 rounded-lg">
              Try Tiktraq now
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-full top-0 left-0 bottom-0 rounded-xl absolute rotate-12 bg-gradient-to-b from-[#2386F4] to-[#575598] blur-3xl"></div>
          <img src={phoneSection} alt="phone section" className="relative" />
        </div>
      </section>

      <section
        id="trips"
        className="mb-20 flex flex-col items-center gap-10 xl:flex-row xl:justify-between"
      >
        <div className="xl:w-1/3">
          <img
            src={trips}
            alt="phone section"
            className="min-h-[540px] min-w-[243px]"
          />
        </div>
        <div className="text-white xl:w-2/3">
          <h1 className="text-4xl xl:text-6xl font-bold text-center mb-20">
            Trips
          </h1>
          <p className="text-justify text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum mauris neque, vel pellentesque risus tincidunt at. Sed
            tempus lorem libero, in tempor ligula malesuada sit amet. Donec
            dignissim ipsum vitae ex dignissim, at sagittis eros pharetra. Nam
            convallis lacinia rhoncus. Cras dignissim pellentesque lacus
            interdum hendrerit.
          </p>
        </div>
      </section>

      <section
        id="expense"
        className="mb-20 flex flex-col-reverse items-center gap-10 xl:flex-row xl:justify-between"
      >
        <div className="text-white xl:w-2/3">
          <h1 className="text-4xl xl:text-6xl font-bold text-center mb-20">
            Expense Management
          </h1>
          <p className="text-justify text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum mauris neque, vel pellentesque risus tincidunt at. Sed
            tempus lorem libero, in tempor ligula malesuada sit amet. Donec
            dignissim ipsum vitae ex dignissim, at sagittis eros pharetra. Nam
            convallis lacinia rhoncus. Cras dignissim pellentesque lacus
            interdum hendrerit.
          </p>
        </div>
        {/* <div className="xl:w-1/3"> */}
        <img
          src={trips}
          alt="phone section"
          className="min-h-[540px] min-w-[243px]"
        />
        {/* </div> */}
      </section>

      <section
        id="client"
        className="mb-20 flex flex-col items-center gap-10 xl:flex-row xl:justify-between"
      >
        <div className="xl:w-1/3">
          <img
            src={trips}
            alt="phone section"
            className="min-h-[540px] min-w-[243px]"
          />
        </div>
        <div className="text-white xl:w-2/3">
          <h1 className="text-4xl xl:text-6xl font-bold text-center mb-20">
            Client Management
          </h1>
          <p className="text-justify text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum mauris neque, vel pellentesque risus tincidunt at. Sed
            tempus lorem libero, in tempor ligula malesuada sit amet. Donec
            dignissim ipsum vitae ex dignissim, at sagittis eros pharetra. Nam
            convallis lacinia rhoncus. Cras dignissim pellentesque lacus
            interdum hendrerit.
          </p>
        </div>
      </section>

      <section
        id="todo"
        className="mb-20 flex flex-col-reverse items-center gap-10 xl:flex-row xl:justify-between"
      >
        <div className="text-white xl:w-2/3">
          <h1 className="text-4xl xl:text-6xl font-bold text-center mb-20">
            To Do Management
          </h1>
          <p className="text-justify text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum mauris neque, vel pellentesque risus tincidunt at. Sed
            tempus lorem libero, in tempor ligula malesuada sit amet. Donec
            dignissim ipsum vitae ex dignissim, at sagittis eros pharetra. Nam
            convallis lacinia rhoncus. Cras dignissim pellentesque lacus
            interdum hendrerit.
          </p>
        </div>
        {/* <div className="xl:w-1/3"> */}
        <img
          src={trips}
          alt="phone section"
          className="min-h-[540px] min-w-[243px]"
        />
        {/* </div> */}
      </section>

      <section
        id="task"
        className="mb-40 flex flex-col items-center gap-10 xl:flex-row xl:justify-between"
      >
        <div className="xl:w-1/3">
          <img
            src={trips}
            alt="phone section"
            className="min-h-[540px] min-w-[243px]"
          />
        </div>
        <div className="text-white xl:w-2/3">
          <h1 className="text-4xl xl:text-6xl font-bold text-center mb-20">
            Task Management
          </h1>
          <p className="text-justify text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            condimentum mauris neque, vel pellentesque risus tincidunt at. Sed
            tempus lorem libero, in tempor ligula malesuada sit amet. Donec
            dignissim ipsum vitae ex dignissim, at sagittis eros pharetra. Nam
            convallis lacinia rhoncus. Cras dignissim pellentesque lacus
            interdum hendrerit.
          </p>
        </div>
      </section>

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

      <div className="text-center text-white mb-14">
        <h2 className="text-3xl font-bold mb-2">
          What they says about Tiktraq ?
        </h2>
      </div>

      <div className="flex flex-col xl:flex-row gap-10 items-center justify-center mb-52">
        {review.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-10 xl:flex-row xl:justify-around xl:items-stretch"
          >
            <div className="relative flex flex-col items-center backdrop-blur-2xl text-white p-8 rounded-lg shadow-lg w-80 transition-all duration-300 transform hover:scale-105">
              <div className="absolute left-0 right-0 ml-auto mr-auto h-3/4 w-3/4 inset-0 bg-gradient-to-b from-[#2386F4]/20 to-[#FB37FF]/20 rounded-lg filter blur-xl opacity-50 z-0"></div>
              <div className="absolute bottom-0 right-0 w-full h-full rounded-3xl border-b-2 border-r-2 border-[#2386F4]/60"></div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl border-t-2 border-l-2 border-[#FB37FF]/60"></div>
              <img
                src={item.imageUrl}
                alt="review"
                className="w-20 h-20 rounded-full"
              />
              <h2 className="text-2xl font-bold mb-4">{item.name}</h2>
              <p className="mb-6 text-center">{item.review}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-white mb-14">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Question</h2>
      </div>

      <div className="w-full mb-72">
        <Accordion title="What is Tiktraq ?">
          Tiktraq is a platform that...
        </Accordion>
        <Accordion title="How to use Tiktraq ?">
          You can use Tiktraq by...
        </Accordion>
        <Accordion title="Is Tiktraq free ?">
          Yes, Tiktraq is free to use with...
        </Accordion>
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

export default Home;
