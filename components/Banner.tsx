import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        className="blur-[1px] xs:blur-0"
        alt="Hero Image main section"
      />
      <div className="absolute top-[35%] xs:top-[40%] w-full text-center">
        <h1 className="text-3xl md:text-5xl font-thin">
          Not sure where to go! Perfect
        </h1>
        <button className="text-purple-500  mt-7 md:mt-5 py-2 px-7 md:py-4 md:px-10 bg-white rounded-full shadow-md font-bold hover:shadow-xl transition-all duration-150 active:scale-95">
          I&apos;m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
