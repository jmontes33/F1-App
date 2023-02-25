import React from "react";
import { useState, useContext } from "react";
import { DriverContext } from "./DriverContext";

function Ranking() {
  const [drivers, setDrivers] = useContext(DriverContext);

  return (
    <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10 bg-white">
      <h1 className="text-center text-6xl font-bold leading-tight tracking-tight text-red-600">
        2023 Driver Standings
      </h1>
      <div className="flex flex-col mt-8 ">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Driver
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Team
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Pts
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {drivers
                    .sort(function (a, b) {
                      return b.points - a.points;
                    })
                    .map((driver) => (
                      <tr>
                        <td className="flex items-center whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          <img src={driver.helmets} alt="helmet" className="h-10" />
                          {driver.driverName + " " + driver.driverLastName}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {driver.country}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {driver.team}
                        </td>
                        <td className=" whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {driver.points}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
