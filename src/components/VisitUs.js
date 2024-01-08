import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import { doc, getDoc } from "firebase/firestore";

import { db } from "../firebase";

const VisitUs = () => {
  const [daysOfTheWeek, setDaysOfTheWeek] = useState([]);

  useEffect(() => {
    const ref = doc(db, "messages", "frontPageMessages");

    getDoc(ref).then((querySnapshot) => {
      const { hoursOfOperation } = querySnapshot.data();

      setDaysOfTheWeek(hoursOfOperation);
    });
  }, []);

  return (
    <div
      style={{ height: "600px" }}
      className="flex flex-col w-screen justify-evenly text-white"
    >
      <Element name="hours">
        <div className="flex justify-center text-5xl">VISIT US</div>
      </Element>
      <div className="flex justify-center text-xl text-center p-4">
        155 Main Street West, Picton, Prince Edward, ON, Canada
      </div>
      <div className="flex justify-center text-xl">613-476-7056</div>
      <div className="flex justify-center">
        <a href="tel:6134767056">
          <div className="rounded-full p-4 shadow bg-red-700 opacity-75 hover:opacity-100 font-semibold hover:text-white">
            CALL TO PLACE YOUR ORDER
          </div>
        </a>
      </div>
      <div id="/visit_us" className="flex justify-center text-2xl">
        Hours of Operation
      </div>

      <div className="flex justify-center  text-xl">
        <div className="flex flex-col justify-center">
          {daysOfTheWeek.map((item) => (
            <div key={item.order} className="flex justify-end p-2">
              <div>{item.day}</div>
            </div>
          ))}
        </div>
        <div className="w-12" />
        <div className="flex flex-col justify-center">
          {daysOfTheWeek.map((item) => (
            <div key={item.order} className="flex justify-center p-2">
              <div>{item.hours}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisitUs;
