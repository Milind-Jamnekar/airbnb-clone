import { HeartIcon, StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { FC, useState } from "react";

interface IProps {
  Search: {
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
}

const InfoCard: FC<IProps["Search"]> = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="flex flex-col xs:flex-row p-4 outline outline-gray-200 md:outline-none md:p-6 
    border-b  hover:opacity-90 hover:shadow-lg transition-all
    ease-out first:border-t rounded-3xl "
    >
      <div className="relative h-44 xs:w-52 xs:h-80 sm:h-52 sm:w-80 flex-shrink-0 ">
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
