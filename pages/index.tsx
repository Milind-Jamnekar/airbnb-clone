import { GetStaticProps } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import { getData } from "../utility/getData";
interface Data {
  img: string;
  location: string;
  distance: string;
}

type Props = {
  items: Data[];
};
export default function Home({
  exploredData,
}: {
  exploredData: {
    img: string;
    location: string;
    distance: string;
  }[];
}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header  */}
      <Header />

      {/* Banner  */}
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          {/* Small Card Section */}
          <h2 className="text-2xl font-semibold ">Explore Nearby</h2>
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {exploredData.map((el) => (
              <SmallCard
                key={el.img}
                {...el}
                // img={el.img}
                // distance={el.distance}
                // location={el.location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const exploredData: Data[] = await getData("https://links.papareact.com/pyp");
  return {
    props: {
      exploredData,
    },
  };
};
