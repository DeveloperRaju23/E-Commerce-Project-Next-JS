import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const SideBarMenu = [
    {
      name: "Woman’s Fashion",
      link: "/",
    },
    {
      name: "Men’s Fashion",
      link: "/",
    },
    {
      name: "Electronics",
      link: "/",
    },
    {
      name: "Home & Lifestyle",
      link: "/",
    },
    {
      name: "Medicine",
      link: "/",
    },
    {
      name: "Sports & Outdoor",
      link: "/",
    },
    {
      name: "Baby’s & Toys",
      link: "/",
    },
    {
      name: "Groceries & Pets",
      link: "/",
    },
    {
      name: "Health & Beauty",
      link: "/",
    },
  ];
  return (
    <div>
      <ul>
        {SideBarMenu.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>
              <p className="text-[18px] py-[5px]">{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
