import React from "react";

const ReuseTitle = ({
  heading2,
  heading6,
  heading3,
  heading5,
  para1,
  para2,
}) => {
  return (
    <div>
      <h2 className="text-[22px] md:text-[30px] lg:text-[36px] text-blackColor font-medium">
        {heading2}
      </h2>
      <h3 className="text-[24px] md:text-[18px] px-[10px] lg:px[0px] lg:text-[36px] text-blackColor font-bold tracking-wide">
        {heading3}
      </h3>
      <h6 className="text-[16px] text-blackColor  font-normal mt-[12px] md:mt-[20px] mb-[12px] md:mb-[26px]">
        {heading6}
      </h6>

      <h5 className="text-secondaryRed  text-[16px] ms-[10px] lg:ms[0px] mb-[10px] border-secondaryRed border-l-[14px]  ps-[10px] font-bold ">
        {heading5}
      </h5>

      <p className="text-[14px] lg:text-[16px] lg:w-[700px] w-full text-blackColor tracking-wider">
        {para1}
      </p>

      <p className="text-[14px] lg:text-[16px] text-primaryBlack  font-medium tracking-wider p-0 m-0 leading-none">
        {para2}
      </p>
    </div>
  );
};

export default ReuseTitle;
