import React from "react";
import loginImg from "../../public/Side Image.png";
import Image from "next/image";
import ReuseTitle from "../reuse";
import Link from "next/link";

const Login = () => {
  return (
    <div className="max-w-[1545px]  mt-16">
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 ">
      <div className="">
        <Image className="object-cover " src={loginImg} />
      </div>
      <div className="me-12">
        <ReuseTitle heading2="Log in to Exclusive" />
        <ReuseTitle heading6="Enter your details below" />
        <div className="">
          <form>
         <span> <input
              className="border-b-2 w-full text-lg pb-[10px]  outline-none"
              type="text"
              placeholder="Name"
            /></span>
            <span>
    <input
              className="border-b-2 w-full text-lg lg:mt-[26px] mt-[16px] pb-[10px] outline-none"
              type="text"
              placeholder="Enter Your Email"
            />
            </span>
        
            <input
              className="border-b-2 lg:mt-[26px] mt-[16px] w-full text-lg pb-[10px] outline-none"
              type="text"
              placeholder="Password"
            />
          </form>
          <button className="btnLogin  mt-[20px]">Login</button>
          <div className="flex justify-center gap-2 mt-[18px] font-normal tracking-wider text-grayBlack cursor-pointer">
            <span>Don't have an account?</span>
            <Link href="signup">
            <span className="hover:text-secondaryRed">Sign Up</span>
            </Link>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Login;
