import React from "react";
import Container from "./container";
import Link from "next/link";

const Error = () => {
  return (
    <Container>
      <div className=" mx-auto text-center mt-[120px] md:mt-[160px] lg:mt-[200px]">
        <h1 className="text-[34px] md:text-[50px] lg:text-[110px]  font-medium">
          404 Not Found
        </h1>
        <p className="text-[16px] text-blackColor font-normal tracking-wider">
          Your visited page not found. You may go home page.
        </p>
        <Link href="/">
          <button className="btnLogin mt-[30px] md:mt-[40px] lg:mt-[50px]">
            Back to home page
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default Error;
