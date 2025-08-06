"use client";

import Link from "next/link";
import LogoImg from "@/logo.webp";
import Image from "next/image";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Drawer} from "antd";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = () => setOpenMenu(!openMenu);

  return (
    <>
      <nav className="py-4 flex justify-between items-center top-0 left-0 right-0 z-50 px-5 md:px-20">
        <div>
          <Link href="/">
            <Image
              src={LogoImg}
              alt="Logo"
              width={100}
              height={50}
              className="h-12 md:h-14 w-[auto] object-contain"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-10 justify-between">
            <li>
              <Link href="/" className="text-sm font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="text-sm font-medium">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#products" className="text-sm font-medium">
                Products
              </Link>
            </li>
            <li>
              <Link href="/#partnerships" className="text-sm font-medium">
                Partnership
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-sm font-medium">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <button className="text-sm bg-primary border-2 border-solid border-primary text-black px-8 py-3 rounded-lg">
            Get a Quote
          </button>
        </div>
        <div>
          <HiOutlineMenuAlt3 className="text-4xl" onClick={toggleDrawer} />
        </div>
      </nav>
      <Drawer open={openMenu} onClose={toggleDrawer} footer={null}>
        <div>
          <div className="px-5 pt-2 pb-10 flex items-center justify-between">
            <div className="">
              <Image
                src={LogoImg}
                alt="Logo"
                width={100}
                height={50}
                className="h-12 md:h-14 w-[auto] object-contain"
              />
            </div>
            <div onClick={toggleDrawer}>
              <FaTimes className="text-3xl text-[#ff0000]" />
            </div>
          </div>
          <ul className="menu-nav flex flex-col gap-4">
            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
              <Link href="/" className="text-black text-sm font-medium p-4 w-full" onClick={toggleDrawer}>
                Home
              </Link>
            </li>
            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
              <Link href="/#about" className="text-black text-sm font-medium p-4 w-full" onClick={toggleDrawer}>
                About Us
              </Link>
            </li>
            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
              <Link href="/#products" className="text-black text-sm font-medium p-4 w-full" onClick={toggleDrawer}>
                Products
              </Link>
            </li>
            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
              <Link href="/#partnerships" className="text-black text-sm font-medium p-4 w-full" onClick={toggleDrawer}>
                Partnership
              </Link>
            </li>
            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
              <Link href="/#services" className="text-black text-sm font-medium p-4 w-full" onClick={toggleDrawer}>
                Services
              </Link>
            </li>
            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
              <Link href="/#shipping" className="text-black text-sm font-medium p-4 w-full" onClick={toggleDrawer}>
                Shipping and Logistics
              </Link>
            </li>
            <li className="border-b border-solid border-[#F5F3FF] pb-4 text-black">
              <Link
                href="/#contact" onClick={toggleDrawer}
                className="text-sm font-medium p-4 w-full"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Navigation;
