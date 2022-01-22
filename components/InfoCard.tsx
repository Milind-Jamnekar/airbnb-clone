import { HeartIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";

type Search = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}: Search) {
  return (
    <div className="flex py-7 px-4 border-b cursor-pointer hover:opacity-90 hover:shadow-lg transition-all ease-out first:border-t rounded-2xl ">
      <div className="relative w-40 h-24 md:h-52 md:w-80 flex-shrink-0 ">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5 ">
        <div className="flex justify-between">
          <p>Private room in {location}</p>
          <HeartIcon className="h-6" />
        </div>
        <h4 className="text-2xl">{title}</h4>
        <span className="border-b-2 w-10 pt-2"></span>
        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex gap-1 items-center">
            <StarIcon className="h-5 text-red-400" />
            <span className="pb-1">{star}</span>
          </p>

          <div>
            <p className="text-lg lg:text-2xl lg:font-semibold pb-2">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
