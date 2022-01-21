import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  const router = useRouter();

  const { location, startDate, endDate, noOfGuest } = router.query;

  const formatedStartDate =
    format(new Date(startDate as string), "dd MMM yyyy") || "";
  const formatedEndDate =
    format(new Date(endDate as string), "dd MMM yyyy") || "";
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} Guests`} />
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
    </div>
  );
}

export default Search;
