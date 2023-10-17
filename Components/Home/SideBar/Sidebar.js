import Link from "next/link";
import React from "react";

const Sidebar = () => {
   

    const SideBarMenu = [
        {
            name:'Woman’s Fashion', link: '/woman'
        },
        {
            name:'Men’s Fashion', link: '/shop'
        },
        {
            name:'Electronics', link: '/shop'
        },
        {
            name:'Home & Lifestyle', link: '/shop'
        },
        {
            name:'Medicine', link: '/shop'
        },
        {
            name:'Sports & Outdoor', link: '/shop'
        },
        {
            name:'Baby’s & Toys', link: '/shop'
        },
        {
            name:'Groceries & Pets', link: '/shop'
        },
        {
            name:'Health & Beauty', link: '/shop'
        }
    ]
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
