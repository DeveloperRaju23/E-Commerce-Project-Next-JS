import Container from "@/pages/container";
import ReuseTitle from "@/pages/reuse";
import React from "react";
import CategoryTabs from "./CategoryTabs";

const Category = () => {
  const categories = [
    {
      "name":'Phones',
      "image":"https://i.ibb.co/VSKMKFr/Category-Cell-Phone.png"
    },
    {
      "name":'Computer',
      "image":"https://i.ibb.co/vDjPz97/Category-Computer.png"
    },
    {
      "name":'SmartWatch',
      "image":"https://i.ibb.co/CHk5MFR/Category-Smart-Watch.png"
    },
    {
      "name":'Camera',
      "image":"https://i.ibb.co/bQztdvc/camera.png"
    },
    {
      "name":'HeadPhones',
      "image":"https://i.ibb.co/sHZNpLS/Category-Headphone.png",
    },
    {
      "name":'Gaming',
      "image":"https://i.ibb.co/LCBVc3g/Category-Gamepad.png",
  }
  ];

  return (
    <Container>
      <div className="pt-[50px]">
        <p className="border "></p>
        <ReuseTitle heading5="Categories" />
        <ReuseTitle heading3="Browse By Category" />
        <div>
        <CategoryTabs categories={categories} />
        </div>
        <p className="border "></p>
      </div>
    </Container>
  );
};

export default Category;
