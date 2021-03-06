import Image from "next/image";

function SmallCard({
  img,
  location,
  distance,
}: {
  img: string;
  location: string;
  distance: string;
}) {
  return (
    <div
      className="flex  items-center mt-4 m-2 space-x-3 group 
    rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105
    transition duration-200 ease-out"
    >
      {/* Left */}
      <div className="relative w-16 h-16 sm:w-14 sm:h-14 transition-transform group-hover:scale-75">
        <Image
          src={img}
          layout="fill"
          className="rounded-lg"
          alt="small card image"
        />
      </div>

      {/* Right  */}
      <div className="self-start sm:self-center">
        <p className="font-semibold">{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
