import React from "react";
import Container from "../container";
import image from "../../public/Frame 894.png";
import starImg from "../../public/Vector.png";
import loveImg from "../../public/Wishlist.png";
import deliveryImg from "../../public/icon-delivery.png";
import returnImg from "../../public/Icon-return.png";
import Image from "next/image";
const BuyNow = () => {
  return (
    <Container>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              className="lg:w-1/2 w-full  object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Havic HV G-92 Gamepad
              </h1>
              <div className="flex items-center gap-1">
                <Image className="h-5 w-5" src={starImg} />
                <Image className="h-5 w-5" src={starImg} />
                <Image className="h-5 w-5" src={starImg} />
                <Image className="h-5 w-5" src={starImg} />
                <p> (150 Reviews)In Stock</p>
              </div>
              <p className="font-bold text-2xl my-2">$192.00</p>
              <p className="leading-relaxed">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <p className="border mt-[15px]"></p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex gap-2">
                  <button className="border px-4 lg:px-5 py-2 lg:py-3 rounded ">
                    -
                  </button>
                  <button className="border px-4 lg:px-5 py-2 lg:py-3 rounded ">
                    2
                  </button>
                  <button className="border px-4 lg:px-5 py-2 lg:py-3 rounded ">
                    +
                  </button>
                  <button className="btnLogin px-5 py-2">Buy Now</button>
                  <Image className="cursor-pointer" src={loveImg} />
                </div>
              </div>
              <div>
                <div className="border rounded mt-[30px] pt-[15px] pb-[15px]">
                  <div className="flex ">
                    <Image className="ps-[10px] h-14 w-14" src={deliveryImg} />
                    <div className="flex flex-col ps-2">
                      <p className="text-[16px] font-semibold text-blackColor">
                        Free Delivery
                      </p>
                      <p className="underline text-[16px] font-semibold text-blackColor">
                        Enter your postal code for Delivery Availability
                      </p>
                    </div>
                  </div>
                  <div className="flex  rounded mt-[30px]">
                    <Image className="ps-[10px] h-14 w-14" src={returnImg} />
                    <div className="flex flex-col ps-2">
                      <p className="text-[16px] font-semibold text-blackColor">
                        Return Delivery
                      </p>
                      <p className="underline text-[16px] font-semibold text-blackColor">
                        Free 30 Days Delivery Returns. Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default BuyNow;
