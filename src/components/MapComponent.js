import React from "react";
import Iframe from "react-iframe";

const MapComponent = () => {
  return (

    <Iframe
      url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7025.307316203426!2d-77.14187548434793!3d44.00714172541031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d7ca541acadc9d%3A0xe6740b299f5e525e!2s155%20Picton%20Main%20St%2C%20Prince%20Edward%2C%20ON!5e0!3m2!1sen!2sca!4v1581291195493!5m2!1sen!2sca"
      width="100%"
      height="450px"
      id="myId"
    ></Iframe>
  );
};

export default MapComponent;
