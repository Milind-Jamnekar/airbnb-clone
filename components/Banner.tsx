import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="Hero Image main section"
      />
      <div className="absolute top-2/4 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go! Perfect</p>
        <button className="text-purple-500 py-4 px-10 bg-white rounded-full shadow-md font-bold hover:shadow-xl transition-all duration-150 active:scale-95">
          I&apos; m flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
