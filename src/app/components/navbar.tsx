"use client";

import hamburgerIcon from "../../assets/hamburger-menu.svg";
import cancelIcon from "../../assets/cancel-icon.svg";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [hamburgerState, setHamburgerState] = useState(false);
  // hamburger menu
  const showMenu = () => {
    setHamburgerState(true);
  };
  const closeMenu = () => {
    setHamburgerState(false);
  };
  return (
    <nav className=" text-white fixed top-0 left-0 z-10 bg-[#0f0f0fd2] backdrop-blur-lg pt-[25px] w-[100%] pb-[20px] flex justify-center flex-auto max-h-fit px-[24px] md:px-[40px] mb-[45px] ">
      <div className=" flex items-center justify-between w-full max-w-[1440px] ">
        <h1 className=" text-[24px] font-medium ">ThePackage</h1>
        <ul className=" md:flex gap-[40px] items-center flex-row hidden ">
          <li className="flex">
            <a onClick={closeMenu} href="../">
              Home
            </a>
          </li>
          <li className="flex">
            <a onClick={closeMenu} href="../#portfolio">
              My works
            </a>
          </li>
          <li className="flex">
            <Link onClick={closeMenu} href="/about">
              About me
            </Link>
          </li>
          <li>
            <div className="flex border-solid fill-none p-[2px] bg-gradient  rounded-[6px] ">
              <button className="flex px-[15px] py-[8px] bg-[#0F0F0F] rounded-[6px] ">
                Contact me
              </button>
            </div>
          </li>
        </ul>
        {hamburgerState !== true ? (
          <div className=" hidden "></div>
        ) : (
          <ul className=" md:hidden text-[24px] space-y-[40px] text-[] items-center text-center flex-col absolute bg-[#0f0f0f] backdrop-blur-lg w-screen h-screen top-0 left-0 pt-[100px]  ">
            <Image className=" absolute w-[40px] top-[60px] right-[40px] " src={cancelIcon} alt="cancel button icon" onClick={closeMenu} />
            <li className="flex  justify-center py-[14px] w-[80%] mx-auto rounded-[10px] ">
              <a onClick={closeMenu} href="../">
                Home
              </a>
            </li>
            <li className="flex  justify-center py-[14px] w-[80%] mx-auto rounded-[10px] ">
              <a onClick={closeMenu} href="#portfolio">
                My works
              </a>
            </li>
            <li className="flex justify-center py-[14px] w-[80%] mx-auto rounded-[10px] ">
              <Link onClick={closeMenu} href="/about">
                About me
              </Link>
            </li>
            <li>
              <div className="flex w-fit mx-auto border-solid fill-none p-[2px] bg-gradient-to-r from-[#F07175] to-[#6B58EF]  rounded-[6px] ">
                <button className="flex px-[18px] py-[14px] bg-[#0F0F0F] h-auto w-full justify-center rounded-[6px] ">
                  Contact me
                </button>
              </div>
            </li>
          </ul>
        )}

        <button onClick={showMenu} className="md:hidden  ">
          <Image
            className=" w-[30px] "
            src={hamburgerIcon}
            alt="hamburger menu"
          />
        </button>
      </div>
    </nav>
  );
}
