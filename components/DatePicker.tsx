import { UserIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

import { datePicker } from "../utility/animation";
// @ts-ignore
//Date Picker Lib
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

type Props = {
  searchInput: string;
  setSearchInput: (search: string) => void;
};

export const DatePicker = ({ searchInput, setSearchInput }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState<number>(1);
  const router = useRouter();
  const isDeskop = useMediaQuery("(min-width: 960px)");

  //To explicitly select starting date
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  //Handle input from Date Picker
  const handleSelect = (e: any) => {
    setStartDate(e.selection.startDate);
    setEndDate(e.selection.endDate);
  };

  //Handle Search action and making query
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest: guest,
      },
    });
  };

  //just resetting input
  const resetInput = () => setSearchInput("");

  return (
    <motion.div
      key="datePicker"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={datePicker}
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
          min={1}
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
        <button
          onClick={search}
          className="btn  border-[#fd5b21] hover:bg-[#fd5b21] hover:text-white"
        >
          Search
        </button>
      </div>
    </motion.div>
  );
};
