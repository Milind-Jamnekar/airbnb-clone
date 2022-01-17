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
      className="flex  items-center mt-4 m-2 space-x-3 
    rounded-xl  cursor-pointer hover:bg-gray-100 hover:scale-105
    transition duration-200 ease-out"
    >
      {/* Left */}
      <div className="relative w-14 h-14">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right  */}
      <div>
        <p>{location}</p>
        <p className="text-gray-500">{distance}</p>
      </div>
    </div>
  );
}

export default SmallCard;
