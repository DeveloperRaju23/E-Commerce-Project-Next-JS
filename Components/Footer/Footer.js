import Container from "@/pages/container";
import Link from "next/link";
import React from "react";
import footerImg1 from "../../public/Qrcode 1.png";
import footerImg2 from "../../public/GooglePlay.png";
import footerImg3 from "../../public/AppStore.png";

import socialImg1 from "../../public/facebook.png";
import socialImg2 from "../../public/twitter.png";
import socialImg3 from "../../public/instragram.png";
import socialImg4 from "../../public/linkdin.png";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-blackColor mt-[40px]">
      <Container>
        <footer class="">
          <div class=" pt-[60px] mb-[80px] mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-whiteColor tracking-widest text-[20px] mb-3">
                Exclusive
              </h2>
              <div className="flex-col flex space-y-3 text-whiteColor">
                <Link href="#">Subscribe</Link>
                <p>Get 10% off your first order</p>
                <input
                  className="border bg-transparent rounded-[5px] outline-none py-[10px] ps-[5px]"
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left ">
              <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="title-font font-medium text-whiteColor tracking-widest text-[20px] mb-[10px]">
                  Support
                </h2>
                <div className="flex-col flex space-y-3 text-whiteColor">
                  <Link href="#">
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </Link>
                  <Link href="#">exclusive@gmail.com</Link>
                  <Link href="#">+88015-88888-9999</Link>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-[10px] lg:px-[0px]">
                <h2 class="title-font font-medium text-whiteColor tracking-widest text-[20px] mb-[10px]">
                  Account
                </h2>
                <div className="flex-col flex space-y-3 text-whiteColor">
                  <Link href="#">My Account</Link>
                  <Link href="#">Login / Register</Link>
                  <Link href="#">Cart</Link>
                  <Link href="#">Wishlist</Link>
                  <Link href="#">Shop</Link>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-[10px] lg:px-[0px]">
                <h2 class="title-font font-medium text-whiteColor tracking-widest text-[20px] mb-[10px]">
                  Quick Link
                </h2>
                <div className="flex-col flex space-y-3 text-whiteColor">
                  <Link href="#">Privacy Policy</Link>
                  <Link href="#">Terms Of Use</Link>
                  <Link href="#">FAQ</Link>
                  <Link href="#">Contact</Link>
                </div>
              </div>
              <div class="lg:w-1/4 md:w-1/2 w-full px-[10px] lg:px-[0px]">
                <h2 class="title-font font-medium text-whiteColor tracking-widest text-[20px] mb-[10px]">
                  Download App
                </h2>
                <div className=" text-whiteColor">
                  <p className="">Save $3 with App New User Only</p>
                  <div className=" flex gap-[5px] mt-[10px]">
                    <div>
                      <Image src={footerImg1} />
                    </div>
                    <div>
                      <Image src={footerImg2} />
                      <Image src={footerImg3} />
                    </div>
                  </div>
                  <div className="flex lg:justify-between space-x-4 items-center mt-[15px]">
                    <Image src={socialImg1} />
                    <Image src={socialImg2} />
                    <Image src={socialImg3} />
                    <Image src={socialImg4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="py-[10px]">
          <p class="text-grayColor text-[16px] text-center tracking-widest">
                © Copyright Raju 2023.All right reserved
              </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
