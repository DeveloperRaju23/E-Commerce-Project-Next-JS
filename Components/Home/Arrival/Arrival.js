import Container from "@/pages/container";
import ReuseTitle from "@/pages/reuse";
import React from "react";

const Arrival = () => {
  return (
    <Container>
      <div>
        <ReuseTitle heading5="Featured" />
        <ReuseTitle heading3="New Arrival" />
        <div className="-m-1 flex flex-col md:flex-row flex-wrap md:-m-2">
          <div className="flex md:w-1/2 w-full flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/K2ywJtN/Frame-684.png"
              />
            </div>
          </div>
          <div className="flex md:w-1/2 w-full flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/LPgpKxb/Frame-685.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/1vqknzZ/Frame-686.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.ibb.co/6YWZt1s/Frame-687.png
            "
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Arrival;
