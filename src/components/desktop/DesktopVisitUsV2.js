import React, { Component } from "react";
import MapComponent from "../MapComponent";

const daysOfTheWeek = [
  { day: "Mon", hours: "Closed" },
  { day: "Tue", hours: "11:30 a.m. – 09:00 p.m." },
  { day: "Wed", hours: "11:30 a.m. – 09:00 p.m." },
  { day: "Thurs", hours: "11:30 a.m. – 09:00 p.m." },
  { day: "Fri", hours: "11:30 a.m. – 09:00 p.m." },
  { day: "Sat", hours: "11:30 a.m. – 09:00 p.m." },
  { day: "Sun", hours: "11:30 a.m. – 09:00 p.m." }
];

const DesktopVisitUsV2 = props => {
  return (
    <div
      style={{ height: "600px" }}
      className="flex flex-col w-screen justify-evenly text-white"
    >
      <div className="flex justify-center text-5xl">VISIT US</div>
      <div className="flex justify-center text-xl text-center p-4">
        155 Main Street West, Picton, Prince Edward, ON, Canada
      </div>
      <div className="flex justify-center text-xl">613-476-7056</div>
      <div className="flex justify-center">
        <a href="tel:+613-476-7056">
          <div
            className="rounded-full p-4 shadow bg-red-700 opacity-75 hover:opacity-100 font-semibold hover:text-white"
          >
            CALL TO PLACE YOUR ORDER
          </div>
        </a>
      </div>
      <div className="flex justify-center text-xl">Hours of Operation</div>

      <div className="flex justify-center text-lg">
        <div className="flex flex-col justify-center">
          {daysOfTheWeek.map(item => (
            <div className="flex justify-end p-2">
              <div>{item.day}</div>
            </div>
          ))}
        </div>
        <div className="w-12" />
        <div className="flex flex-col justify-center">
          {daysOfTheWeek.map(item => (
            <div className="flex justify-center p-2">
              <div>{item.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopVisitUsV2;
