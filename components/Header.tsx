import Image from "next/image";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
//@ts-ignore
import { DateRangePicker } from "react-date-range";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";

import { ChangeEvent, useRef, useState } from "react";

function Header() {
  const [searchInput, setSearchInput] = useState<String>("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState<Number | null>(1);

  const inputEl = useRef(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchInput(e.target.value);
  const resetInput = () => setSearchInput("");

  const handleSelect = (e: any) => {
    setStartDate(e.selection.startDate);
    setEndDate(e.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <motion.header
      // layout="size"
      className="sticky top-0 z-50 grid grid-cols-4 bg-white shadow-md p-2 md:px-10 "
    >
      {/* Left logo */}
      <div className="relative flex items-center h-6 sm:h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb Logo image"
        />
      </div>

      {/* middle searchbar */}
      <div className=" flex items-center justify-center border-2 rounded-full col-span-2 ">
        <input
          className="pl-10 xs:pl-5 bg-transparent text-gray-500 placeholder:text-gray-400 outline-none flex-grow"
          type="text"
          ref={inputEl}
          onChange={handleChange}
          placeholder="Start your search.."
        />
        <SearchIcon className="hidden md:inline-flex md:mx-2 icon bg-red-400 text-white rounded-full p-1 " />
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
          <motion.div
            key="datePicker"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="flex flex-col mx-auto col-span-4 "
          >
            <DateRangePicker
              ranges={[selectionRange]}
              date={new Date()}
              minDate={new Date()}
              rangeColors={["#fd5b21"]}
              onChange={handleSelect}
            />
            <div className="flex items-center border-b mb-5  font-semibold">
              <div className="flex-grow text-2xl">
                <h2>Number of guests:</h2>
              </div>
              <UserIcon className="h-5" />
              <input
                type="number"
                name="people"
                id="people"
                value={`${guest}`}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setGuest(parseInt(e.target.value));
                }}
                className="w-12 pl-2 outline-none text-red-500"
              />
            </div>
            <div className="flex gap-5 mt-2">
              <button
                onClick={resetInput}
                className="btn  border-gray-100 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="btn  border-[#fd5b21] hover:bg-[#fd5b21] hover:text-white">
                Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
