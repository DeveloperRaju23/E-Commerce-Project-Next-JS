import React from "react";
import signUpImg from "../../public/Side Image.png";
import googleImg from "../../public/Icon-Google.png";
import Image from "next/image";
import ReuseTitle from "../reuse";
import Link from "next/link";
const SignUp = () => {
  return (
    <div className="max-w-[1545px]  mt-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 ">
        <div className="">
          <Image className="object-cover " src={signUpImg} />
        </div>
        <div className="px-[10px] lg:px-[0px]">
          <ReuseTitle heading2="Create an account" />
          <ReuseTitle heading6="Enter your details below" />
          <div className="md:me-12 ">
            <form>
              <span>
                {" "}
                <input
                  className="border-b-2 w-full text-lg pb-[10px]  outline-none"
                  type="text"
                  placeholder="Name"
                />
              </span>
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
            <button className="btnLogin w-full mt-[20px]">
              Create Account
            </button>
            <div className="border-2 rounded-[5px] md:py-[12px] py-[10px] mt-[20px] flex justify-center gap-2">
              <Image src={googleImg} alt="Google Image" />
              <span className="text-[16px] cursor-pointer font-normal tracking-wider">
                Sign up with Google
              </span>
            </div>
            <div className="flex justify-center gap-2 mt-[18px] font-normal tracking-wider text-grayBlack cursor-pointer">
              <span>Already have account?</span>
              <Link href="login">
                <span className="hover:text-secondaryRed">LogIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
