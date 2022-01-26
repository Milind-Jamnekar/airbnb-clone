import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import { page } from "../utility/animation";
import { getData } from "../utility/getData";

interface IProps {
  Data: {
    img: string;
    location: string;
    distance: string;
  };

  CardData: {
    img: string;
    title: string;
  };
}

interface Props {
  exploredData: IProps["Data"][];
  cardData: IProps["CardData"][];
}

export default function Home({ exploredData, cardData }: Props) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={page}
      className=""
    >
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header  */}
      <Header />

      {/* Banner  */}
      <Banner />

      {/* Main body  */}
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
          <div className="flex gap-x-5 snap-x overflow-x-scroll snap-mandatory no-scrollbar p-5 xs:p-3">
            {cardData.map((card) => (
              <MediumCard key={card.img} {...card} />
            ))}
          </div>
        </section>
        {/* Large Card Section  */}
        <section className="my-12">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest outdoor"
            description="Wishlist curated by Airbnb"
            buttonText="Get inspired"
          />
        </section>
      </main>

      {/* Footer  */}
      <Footer />
    </motion.div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const exploredData: IProps["Data"] = await getData(
    "https://links.papareact.com/pyp"
  );
  const cardData: IProps["CardData"] = await getData(
    "https://links.papareact.com/zp1"
  );
  return {
    props: {
      exploredData,
      cardData,
    },
  };
};
