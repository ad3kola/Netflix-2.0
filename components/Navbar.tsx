"use client";
import { Popover, Transition } from "@headlessui/react";
import {
  ForwardRefExoticComponent,
  Fragment,
  SVGProps,
} from "react";
import { navLinks } from "@/utils/homepage";
import {
  PencilIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import NetflixTextLogo from "@/public/assets/Bg-Transparent Netflix Text Logo.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { signOut } from "firebase/auth";
import {signOut as signOutOfAccount} from '@/redux/features/UserSlice'
import { auth } from "@/firebase.config";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";

function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [navState, setNavState] = useState<boolean>(false);
  const profileImage = useAppSelector(
    (state) => state.user.value.userData?.photoURL
  );
  const router = useRouter()
  console.log(profileImage);
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const signOutUser = () => {
    signOut(auth)
    dispatch(signOutOfAccount())
    router.push('/')
  }
  const [isModalOpen, setIsModalOpen] =
    useState<boolean>(false);

  return (
  <nav
      className={`z-50 fixed top-0 right-0 left-0 flex items-center justify-between ${
        scrollY >= 100
          ? "bg-neutral-950"
          : "bg-gradient-to-b from-neutral-950"
      } px-2 sm:pl-4 md:pl-10 duration-300 ease-in-out transition-all`}
    >
      <ul className="flex flex-shrink-0 items-center space-x-2 sm:space-x-3 lg:space-x-5">
        <div className="relative w-28 lg:w-32 h-20">
          <Image
            src={NetflixTextLogo}
            alt="netflix-logo"
            fill
            className="object-contain filter brightness-[150%]"
          />
        </div>
        <div
          onClick={() => setNavState((prev) => !prev)}
          className="md:hidden flex text-xs cursor-pointer duration-200 transition ease-in whitespace-nowrap text-gray-100 list-none"
        >
          Browse
          <ChevronDownIcon
            className={`${
              navState && "rotate-180"
            } ml-2 h-4 w-4 transition duration-300 ease-in-out cursor-pointer text-gray-50`}
          />
        </div>
        <div
          className={`absolute ${
            navState
              ? "left-16 opacity-1"
              : "-left-full opacity-0"
          } p-6 top-20 duration-300 transition-all ease-in-out bg-gray-100 shadow-md rounded-tl-lg rounded-br-2xl md:hidden flex flex-col items-center space-y-2 whitespace-nowrap `}
        >
          {navLinks.map((link, indx) => (
            <Link
              key={indx}
              href={`/${link
                .replace(/\s/g, "-")
                .toLowerCase()}`}
            >
              <li
                className={`${
                  indx == 0
                    ? "font-bold text-gray-800"
                    : "text-neutral-800 font-semibold"
                } text-sm cursor-pointer duration-200 hover:text-gray-600 transition ease-in whitespace-nowrap list-none`}
              >
                {link}
              </li>
            </Link>
          ))}
        </div>
        {navLinks.map((link, indx) => (
          <Link
            key={indx}
            href={`/${link
              .replace(/\s/g, "-")
              .toLowerCase()}`}
          >
            <li
              className={`${
                indx == 0 ? "font-bold" : "font-light"
              } hidden md:inline-flex text-xs md:text-sm cursor-pointer duration-200 hover:text-gray-400 transition ease-in whitespace-nowrap text-gray-100 list-none`}
            >
              {link}
            </li>
          </Link>
        ))}
      </ul>
      <div className="flex flex-shrink-0 items-center space-x-2 md:space-x-4 relative">
        <MagnifyingGlassIcon className="cursor-pointer h-7 w-7 text-gray-100" />
        <div className="cursor-pointer relative">
          <BellIcon className="h-7 w-7 text-gray-100" />
          <span
            className="bg-red-600 absolute -right-2 -top-1 rounded-full text-gray-100 text-xs h-5 flex  items-center justify-center w-5 font-bold"
            style={{ fontFamily: "Arial Black" }}
          >
            9
          </span>
        </div>
          <Image onClick = {signOutUser}
            src={profileImage ?  profileImage : "/assets/sonic-avatar.png"}
            alt="Profile Image"
            height={35} className ='rounded-full cursor-pointer duration-100 ease-in'
            width={35}
          />
      </div>
    </nav>
  );
}

export default Navbar;
