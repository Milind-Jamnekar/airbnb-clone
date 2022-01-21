import { format } from "date-fns";
import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { page } from "../utility/animation";

function Search() {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest } = router.query;

  let range = "";

  useEffect(() => {
    if (router && router.query) {
      console.log(startDate, endDate);
      const formatedStartDate =
        format(new Date(startDate as string), "dd MMM yyyy") || "";
      const formatedEndDate =
        format(new Date(endDate as string), "dd MMM yyyy") || "";
      range = `${formatedStartDate} - ${formatedEndDate}`;
    }
  }, [router.query]);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={page}
      className=""
    >
      <Head>
        <title>
          {location} - {range}
        </title>
      </Head>
      <Header placeholder={`${location} | ${noOfGuest} Guests`} />
      <main className="flex">
        <section className="flex-grow mt-14 mx-6">
          <p className="text-sm">
            Stays - {range} for {noOfGuest} of guests
          </p>
          <h1 className="text-3xl font-semibold  mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden md:inline-flex mb-3 space-x-3 whitespace-nowrap">
            <p className="tag">Cancellation Flexibility</p>
            <p className="tag">Type of Place</p>
            <p className="tag">Price</p>
            <p className="tag">Rooms and Beds</p>
            <p className="tag">More Filter </p>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Search;
