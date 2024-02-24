import React from "react";

const RLayout = () => {
  return (
    <section className="max-w-screen-lg mx-auto border-4 border-black">
      <div className="grid md:grid-cols-8 grid-cols-1 gap-4">
        <div className="h-screen rounded-lg md:col-span-5 flex flex-col gap-4 justify-between">
          <div className="bg-blue-500 h-64 rounded-lg flex justify-center items-center text-white">
            <p>Carousel</p>
          </div>
          <div className="rounded-lg grid md:grid-cols-7 grid-cols-1 gap-4">
            <div className="md:col-span-2 bg-gray-200 h-32 rounded-lg flex justify-center items-center">
              <p>Shorter</p>
            </div>
            <div className="md:col-span-5 bg-gray-200 h-32 rounded-lg flex justify-center items-center">
              <p>Longer</p>
            </div>
          </div>
          <div className="bg-gray-300 h-64 md:h-full rounded-lg flex justify-center items-center">
            <p>Bottom</p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg md:col-span-3 flex justify-center items-center h-80 md:h-auto">
          <p>Right</p>
        </div>
      </div>
    </section>
  );
};

export default RLayout;
