import React from "react";
import cardpic from '../assets/card-pic.png'
const OurTeam = () => {

  return (
    <>
      <section className="py-6 bg-black dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
            Our Team
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-600 mb-16">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius sunt!
          </p>

          {/* First card in center */}
          <div className="flex flex-col items-center justify-center text-center mb-24">
            <img
              alt=""
              className="self-center flex-shrink-0 w-40 h-40 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
              src= {cardpic}
            />
            <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
            <p className="dark:text-gray-600">Lead Designer</p>
          </div>

          {/* Grid layout for other team members with 5 cards per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-20">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
              <div key={id} className="flex flex-col items-center text-center">
                <img
                  alt=""
                  className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500"
                  src= {cardpic}
                />
                <p className="text-xl font-semibold leading-tight">Leroy Jenkins</p>
                <p className="dark:text-gray-600">Visual Designer</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;