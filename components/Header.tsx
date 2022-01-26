import Image from "next/image";

import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import { AnimatePresence } from "framer-motion";

import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/router";
import { DatePicker } from "./DatePicker";

type Props = {
  placeholder?: string;
};

function Header({ placeholder }: Props) {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setSearchInput(e.target.value);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-4 bg-white shadow-md p-2 md:px-10 ">
      {/* Left logo */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-6 sm:h-10 cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo image"
        />
      </div>

      {/* middle searchbar */}
      <div className="flex items-center justify-between border-2 rounded-full col-span-2 overflow-hidden ">
        <input
          className="pl-5 bg-transparent text-gray-500 placeholder:text-gray-400 outline-none flex-grow max-w-[500px]"
          type="text"
          value={searchInput}
          onChange={handleChange}
          placeholder={placeholder || "Start your search.."}
        />
        <SearchIcon className="hidden sm:inline-flex sm:mx-2 icon bg-red-400 text-white rounded-full p-1 " />
      </div>

      {/* Right */}
      <div className="flex space-x-3 items-center justify-end text-gray-500">
        <p className="hidden lg:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="icon" />
        <div className="flex border-2  rounded-full p-2 space-x-2">
          <MenuIcon className="icon" />
          <UserCircleIcon className="icon" />
        </div>
      </div>

      {/* Daterange component  */}
      <AnimatePresence>
        {searchInput && (
          <DatePicker
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
