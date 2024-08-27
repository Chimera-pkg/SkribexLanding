import React from "react";
import blogs from "../data/blogs";

const Blogs = () => {
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
      <div className="relative">
        <div className="absolute inset-0 bg-blue-800/50 rounded-lg filter blur-xl opacity-50 z-0"></div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center ">
          {blogs.map((article, index) => (
            <div
              key={index}
              className="relative text-white bg-[#0E0C15] w-full rounded-3xl md:w-full xl:w-7/8 "
            >
              <div className="absolute bottom-0 right-0 w-full h-full rounded-3xl border-b-2 border-r-2 border-[#2386F4]/60"></div>
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full object-fill rounded-t-3xl mb-10"
              />
              <div className="mx-5 xl:mx-10">
                <h3 className="font-bold md:text-xl xl:text-3xl mb-10">
                  {article.title}
                </h3>
                <p className="font-normal text-sm mb-10">
                  By: {article.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
