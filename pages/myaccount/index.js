import React from "react";
import Container from "../container";

const index = () => {
  return (
    <Container>
      <div className="flex flex-col md:flex-row justify-between gap-[10px] mt-[30px]">
        <div className="lg:w-[400px]  w-full shadow-md rounded-md px-[40px] py-[40px]">
          <div className="flex items-center gap-[10px]">
            <h6 className="text-[16px] text-blackColor font-medium ">
              Manage My Account
            </h6>
          </div>

          <div className="space-y-2 ms-8 mt-4 mb-4 cursor-pointer">
            <p className="text-secondaryRed font-medium">My Profile</p>
            <p>Address Book</p>
            <p>My Payment Options</p>
          </div>

          <div className="flex items-center gap-[10px]">
          <h6 className="text-[16px] text-blackColor font-medium ">
          My Orders
            </h6>
          </div>
          <div className="space-y-2 ms-8 mt-4 mb-4 cursor-pointer">
            <p className="text-secondaryRed font-medium">My Returns</p>
            <p>My Cancellations</p>
          </div>
          <div className="flex items-center gap-[10px]">
          <h6 className="text-[16px] text-blackColor font-medium ">
          My WishList
            </h6>
          </div>
        </div>

        <div className="lg:w-[750px] w-full  shadow-md rounded-md px-[30px] py-[30px]">
          <h2 className="text-[20px] text-secondaryRed font-medium">
            Edit Your Profile
          </h2>
          <div className="flex flex-col sm:flex-row gap-[10px] justify-between mt-4">
            <div>
              <span>First Name</span>
              <input
                className="bg-grayColor w-full mb-3 outline-none py-[14px] rounded-[5px] ps-[15px]"
                type="text"
                placeholder="Your Name "
              />
              <span>Email</span>
              <input
                className="bg-grayColor w-full  outline-none py-[14px] rounded-[5px] ps-[15px]"
                type="text"
                placeholder="rimel1111@gmail.com"
              />
            </div>
            <div>
              <span>Last Name</span>
              <input
                className="bg-grayColor mb-3  w-full outline-none py-[14px] rounded-[5px] ps-[15px]"
                type="text"
                placeholder="Last Name"
              />
              <span>Address</span>
              <input
                className="bg-grayColor w-full  mb-4 outline-none py-[14px] rounded-[5px] ps-[15px]"
                type="text"
                placeholder="Kingston, 5236, United State"
              />
            </div>
          </div>
          <span className="">Password Changes</span>
          <input
            className="bg-grayColor mt-2 w-full outline-none py-[14px] rounded-[5px] ps-[15px]"
            type="text"
            placeholder="Current Password "
          />
          <input
            className="bg-grayColor w-full mt-3 outline-none py-[14px] rounded-[5px] ps-[15px]"
            type="text"
            placeholder="New Password "
          />
          <input
            className="bg-grayColor w-full mt-3 outline-none py-[14px] rounded-[5px] ps-[15px]"
            type="text"
            placeholder="Confirm New Password "
          />
          <div className="flex justify-end items-center gap-[20px]">
            <span className="text-[20px] cursor-pointer">Cancel</span>
            <button className="btnLogin mt-[15px]">Save Changes</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default index;
