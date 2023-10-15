import Container from "@/pages/container";
import Link from "next/link";
import React, { useState } from "react";
import { BiLogOut, BiSearch, BiUser } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import userImg from "../../public/user.png";
import Image from "next/image";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const MenuBar = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Shop",
      link: "/shop",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Container>
      <nav className="pt-[14px] pb-[14px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className=" font-bold text-xl">Logo</div>
          {/*============= MENU SECTION START ============== */}
          <div className="hidden md:block">
            <div className="flex list-none space-x-6 ">
              {MenuBar.map((item, index) => (
                <li key={index}>
                  <Link href={item.link}>
                    <p className="text-[18px] py-[5px]">{item.name}</p>
                  </Link>
                </li>
              ))}
            </div>
          </div>
          {/*============ MENU SECTION END============== */}
          {/*============= MENU SECTION RIGHT SIDE CART SEARCH USER ============== */}
          <div className="flex items-center space-x-4 cursor-pointer">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search"
                className="py-2 pl-4 pr-4 text-sm  bg-grayColor   outline-none rounded"
              />
              <BiSearch className="h-6 w-6 absolute top-2 right-2" />
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-[10px] items-center">
                <AiOutlineHeart className="w-[30px] h-[30px]" />
                <AiOutlineShoppingCart className="w-[30px] h-[30px]" />
                <div className="flex">
                  <div
                    onClick={toggleExpansion}
                    className="cursor-pointer flex"
                  >
                    <div className="  rounded-full mr-4">
                      <Image className="w-[34px] h-[34px]" src={userImg} />
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="mt-4 absolute top-12 z-30 md:right-[1%] lg:right-[19.5%] w-[224px] h-[208px] rounded-[5px] header_blur  text-white">
                      <div className="flex flex-col space-y-[10px] text-[18px] ps-[5px] py-[14px]">
                        <div class="flex items-center gap-[8px] ps-[5px]">
                          <BiUser className="h-[24px] w-[24px]" />
                          <Link href="/">Manage My Account</Link>
                        </div>
                        <div class="flex items-center gap-[8px] ps-[5px]">
                          <BsBag className="h-[24px] w-[24px]" />
                          <Link href="/">My Order</Link>
                        </div>
                        <div class="flex items-center gap-[8px] ps-[5px]">
                          <MdOutlineCancel className="h-[24px] w-[24px]" />
                          <Link href="/">My Cancellations</Link>
                        </div>
                        <div class="flex items-center gap-[8px] ps-[5px]">
                          <AiOutlineStar className="h-[24px] w-[24px]" />
                          <Link href="/">My Reviews</Link>
                        </div>
                        <div class="flex items-center gap-[8px] ps-[5px]">
                          <BiLogOut className="h-[24px] w-[24px]" />
                          <Link href="/">Logout</Link>
                        </div>
                        {/*<Link href="/">SignUp</Link> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*============= MENU SECTION RIGHT SIDE CART SEARCH USER ============== */}
        </div>
      </nav>
      <p className="border "></p>
    </Container>
  );
};

export default Header;
