import Container from "@/pages/container";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch, BiUser } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { MdLogin, MdOutlineCancel } from "react-icons/md";
import userImg from "../../public/user.png";
import Image from "next/image";
import logo from "../../public/LOGO.png";
import { useRouter } from "next/router";
const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();

  const isActive = (path) => router.pathname === path;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const MenuBar = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Shop",
      path: "/shop",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <Container>
      <nav className="pt-[14px] pb-[14px]">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            Logo
            {/* <Image className="" src={logo}/> */}
          </div>
          {/*============= MENU SECTION START ============== */}
          <div className="hidden md:block">
            <div className="flex list-none space-x-6 text-[18px] font-normal">
              {MenuBar.map((item, index) => (
                <li key={index}>
                  <a
                    className={`${
                      router.pathname === item.path
                        ? "text-secondaryRed font-bold"
                        : "text-blackColor"
                    }`}
                    href={item.path}
                  >
                    {item.name}
                  </a>
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
            <div className="hidden md:block relative">
              <div className="flex space-x-[10px] items-center">
                <span className="absolute -top-1 right-28 text-white h-5 w-5 flex items-center justify-center bg-secondaryRed rounded-full">
                  4
                </span>
                <AiOutlineHeart className="w-[30px] h-[30px]" />
                <Link href="cart">
                  <AiOutlineShoppingCart className="w-[30px] h-[30px] " />
                </Link>
                <span className="absolute -top-1  right-16  text-white h-5 w-5 flex items-center justify-center bg-secondaryRed rounded-full">
                  1
                </span>
                <div className="flex">
                  <div
                    onClick={toggleExpansion}
                    className="cursor-pointer flex"
                  >
                    <div className="  rounded-full mr-4">
                      <Image
                        className="w-[38px] h-[38px]  ms-3"
                        src={userImg}
                      />
                    </div>
                  </div>
                  {isExpanded && (
                    <div className="mt-4 absolute top-9 z-30 md:right-[1%] bg-blackColor lg:right-[5.7%] w-[224px] h-[208px] rounded-[5px] header_blur ">
                      <div className="flex flex-col space-y-[10px] text-[18px] ps-[5px] py-[14px]">
                        <div className="flex items-center gap-[8px] ps-[5px]">
                          <BiUser className="h-[24px] w-[24px]" />
                          <Link href="myaccount">
                            <p
                              className={
                                isActive("/myaccount")
                                  ? " text-secondaryRed font-bold"
                                  : "text-whiteColor"
                              }
                            >
                              My Account
                            </p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-[8px] ps-[5px] ">
                          <BsBag className="h-[24px] w-[24px]" />
                          <Link href="order">
                            <p
                              className={
                                isActive("/order")
                                  ? "text-secondaryRed font-bold "
                                  : "text-whiteColor"
                              }
                            >
                              My Order
                            </p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-[8px] ps-[5px]">
                          <MdOutlineCancel className="h-[24px] w-[24px]" />
                          <Link href="cancell">
                            <p
                              className={
                                isActive("/cancell")
                                  ? "text-secondaryRed font-bold "
                                  : "text-whiteColor"
                              }
                            >
                              My Cancellations
                            </p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-[8px] ps-[5px]">
                          <AiOutlineStar className="h-[24px] w-[24px]" />
                          <Link href="reviews">
                            <p
                              className={
                                isActive("/reviews")
                                  ? "text-secondaryRed font-bold "
                                  : "text-whiteColor"
                              }
                            >
                              My Reviews
                            </p>
                          </Link>
                        </div>
                        <div className="flex items-center gap-[8px] ps-[5px]">
                          <MdLogin className="h-[24px] w-[24px]" />
                          <Link href="login">
                            <p
                              className={
                                isActive("/login")
                                  ? "text-secondaryRed font-bold "
                                  : "text-whiteColor"
                              }
                            >
                              Login
                            </p>
                          </Link>
                        </div>
                        {/* <div className="flex items-center gap-[8px] ps-[5px]">
                          <BiLogOut className="h-[24px] w-[24px]" />
                          <Link href="/">Logout</Link>
                        </div> */}

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
