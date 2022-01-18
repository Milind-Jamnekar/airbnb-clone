import { GetStaticProps } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { getData } from "../utility/getData";
interface Data {
  img: string;
  location: string;
  distance: string;
}

interface CardData {
  img: string;
  title: string;
}

export default function Home({
  exploredData,
  cardData,
}: {
  exploredData: {
    img: string;
    location: string;
    distance: string;
  }[];
  cardData: {
    img: string;
    title: string;
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
        {/* Small Card Section */}
        <section className="my-6">
          <h2 className="heading">Explore Nearby</h2>
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {exploredData.map((el) => (
              <SmallCard key={el.img} {...el} />
            ))}
          </div>
        </section>
        {/* Another Section  */}
        <section className="my-6">
          <h2 className="heading">Live Anywhere!</h2>
          <div className="flex gap-x-5 snap-x overflow-x-scroll snap-mandatory no-scrollbar p-3">
            {cardData.map((card) => (
              <MediumCard key={card.img} {...card} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const exploredData: Data[] = await getData("https://links.papareact.com/pyp");
  const cardData: CardData[] = await getData("https://links.papareact.com/zp1");
  return {
    props: {
      exploredData,
      cardData,
    },
  };
};
