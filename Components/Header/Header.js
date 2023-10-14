import Link from "next/link";
import React from "react";
const Header = () => {
  return (
    <div className="container">
      <div className="py-[20px] border-b-2  flex space-x-8">
        <h1>Logo</h1>
        <Link href="/">Home </Link>
        <Link href="about">About </Link>
        <Link href="contact">Contact </Link>
        <Link href="signup">SignUp </Link>
      </div>
    </div>
  );
};

export default Header;
