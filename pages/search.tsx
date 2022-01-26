import { format } from "date-fns";
import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import { page } from "../utility/animation";
import { getData } from "../utility/getData";
import type { Search } from "../utility/type";

type Props = {
  searchResult: Search[];
};

function Search({ searchResult }: Props) {
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

          <div className="my-10 space-y-8">
            {searchResult.map((el) => (
              <InfoCard key={el.img} {...el} />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px] ">
          <Map searchResult={searchResult} />
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default Search;
// {
//     img: 'https://links.papareact.com/6as',
//     location: 'Private room in center of London',
//     title: '30 mins to Oxford Street, Excel London',
//     description: '1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine',
//     star: 4.1,
//     price: '£55 / night',
//     total: '£320 total',
//     long: -0.069961,
//     lat: 51.472618
//   },

export const getServerSideProps: GetServerSideProps = async () => {
  const searchResult: Search = await getData("https://links.papareact.com/isz");

  return { props: { searchResult } };
};
