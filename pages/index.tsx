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
        <meta name="theme-color" content="#fd5b21"></meta>
        <title>Kent C. Dodds</title>
        <meta
          name="description"
          content="Not sure where to go Perfect! have search on airbnb"
        />
        <meta
          property="og:url"
          content="https://airbnb-milind-jamnekar.vercel.app"
        />
        <meta property="og:title" content="Airbnb Clone"></meta>
        <meta
          property="og:description"
          content="Airbnb Clone created by Milind Jamnekar. This used on educational purpose only"
        ></meta>
        <meta property="og:image" content=""></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:creator" content="@Milind-jamnekar"></meta>
        <meta name="twitter:site" content="@Milind-jamnekar"></meta>
        <meta name="twitter:title" content="Milind Jamnekar"></meta>
        <meta
          name="twitter:description"
          content="Airbnb Clone created by Milind Jamnekar. This used on educational purpose only"
        ></meta>
        <meta name="twitter:image" content=""></meta>
        <meta name="twitter:alt" content="Milind Jamekar"></meta>
        <link rel="canonical" href="https://kentcdodds.com" />
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
