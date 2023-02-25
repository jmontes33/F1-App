import React, { useContext, useState } from "react";
import { DriverContext } from "./DriverContext";
import { NavLink } from "react-router-dom";
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Home() {
  const [drivers, setDrivers] = useContext(DriverContext);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Search term: ${searchTerm}`);
  };

  const filteredData = drivers.filter((el) => {
    if (searchTerm === "") {
      return el;
    } else {
      return el.driverLastName.toLowerCase().includes(searchTerm);
    }
  });

  return (
    <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10 bg-gray-800">
      <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-red-600">
        F1 2023
      </h1>
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              type="text"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-700 dark:placeholder:text-lg dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="who are you looking for 👀"
              required
            />
          </div>
        </form>
      </div>
      <div className="mx-auto min-h-screen mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-4">
        {filteredData.map((driver, index) => (
          <div key={index} className="h-96 mb-16 group [perspective:1000px]">
            <div className="transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 shadow-xl">
                <div className="flex-shrink-0">
                  <img
                    className="h-50 w-full object-cover rounded-t-xl [transform:rotateY(180deg)]"
                    src={driver.driverImage2}
                    alt=""
                  />
                </div>

                <div className="flex flex-1 rounded-b-xl shadow-xl flex-col justify-between [transform:rotateY(180deg)] bg-white p-6">
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-semibold text-gray-900">
                        {driver.driverName + " " + driver.driverLastName}
                      </p>
                      <img className="w-7" src={driver.countryImg} />
                    </div>
                    <div className="flex justify-between">
                      <p className="text-left mt-3 text-base text-gray-500 items-center">
                        Driver points: {driver.points}
                      </p>
                      <p className="text-right mt-3 text-base text-gray-500 items-center">
                        Wins: {driver.wins}
                      </p>
                    </div>
                    <img className="mt-3" src={driver.carImg} />
                  </div>
                </div>
              </div>
              <div className="h-full w-full px-12 text-center text-slate-200 [backface-visibility:hidden]">
                <div className="absolute inset-0 ">
                  <div className="flex-shrink-0 ">
                    <img
                      className="h-50 w-full object-cover rounded-t-xl shadow-xl"
                      src={driver.driverImage}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-1 shadow-xl rounded-b-xl flex-col justify-between bg-white p-6">
                    <div className="flex flex-col justify-between">
                      <div className="flex justify-between items-center">
                        <p className="text-xl font-semibold text-gray-900">
                          {driver.driverName + " " + driver.driverLastName}
                        </p>
                        <img className="w-7" src={driver.countryImg} />
                      </div>
                      <div className="flex justify-between">
                        <p className="text-left mt-3 text-base text-gray-500 items-center">
                          {driver.shortName}
                        </p>
                        <p className="text-center mt-3 text-base w-7 text-gray-500 items-center">
                          {driver.number}
                        </p>
                      </div>
                      <img className="mt-3" src={driver.carImg} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
