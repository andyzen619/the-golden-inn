import React, { Component } from "react";

const DesktopLandingV2 = prop => {
  return (
    <div style={{height: '600px'}} className="flex flex-col justify-center text-white">
      <div className="flex justify-center p-8">
        <div style={{backgroundColor: '#b82e26'}} className="px-6 py-24 rounded-full text-3xl opacity-75">
          <div className="flex justify-center">GOLDEN INN</div>
          <div className='flex justify-center pt-2'>RESTAURANT</div>
        </div>
      </div>
      <div className="flex justify-center text-lg">
        SERVING AUTHENTIC CHINESE FOOD FOR 25 YEARS
      </div>
      <div className='flex justify-center text-black p-2'>
        <div className='bg-white opacity-75 hover:opacity-100 p-4 px-12 mr-2'>Order</div>
        <div className='bg-white opacity-75 hover:opacity-100 p-4 px-12 ml-2'>Menu</div>
      </div>
    </div>
  );
};

export default DesktopLandingV2;
