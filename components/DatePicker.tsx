import { UserIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { datePicker } from "../utility/animation";
// @ts-ignore
//Date Picker Lib
import { DateRangePicker, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

// custom hook for mobile device
import useMediaQuery from "../utility/useMediaQuery";

type Props = {
  searchInput: string;
  setSearchInput: (search: string) => void;
};

export const DatePicker = ({ searchInput, setSearchInput }: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guest, setGuest] = useState(1);
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
      {isDeskop ? (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            date={new Date()}
            minDate={new Date()}
            editableDateInputs={true}
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
              value={guest}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setGuest(parseInt(e.target.value));
              }}
              className="w-12 pl-2 outline-none text-red-500"
            />
          </div>
        </div>
      ) : (
        <div className="mt-3 select-none">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={datePicker}
          >
            <DateRange
              date={new Date()}
              minDate={new Date()}
              ranges={[selectionRange]}
              editableDateInputs={true}
              onChange={handleSelect}
              moveRangeOnFirstSelection={false}
              rangeColors={["#fd5b21"]}
            />
          </motion.div>
        </div>
      )}
      <div className="flex gap-5 mt-2">
        <button
          onClick={resetInput}
          className="btn  border-gray-100 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          onClick={search}
          className="btn  border-air-100 hover:bg-air-100 hover:text-white"
        >
          Search
        </button>
      </div>
    </motion.div>
  );
};
