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
          alt={`Image of ${title}`}
        />
      </div>
      <div className="flex flex-col flex-grow px-3 xs:pl-5 ">
        <div className="flex justify-between items-center text-gray-500 text-sm mt-4  md:my-0">
          <p>{location}</p>
          <HeartIcon
            onClick={() => setActive(!active)}
            className={`h-6 md:h-6  ${active && "fill-air-100 stroke-air-100"}`}
          />
        </div>
        <h4 className="text-2xl font-medium">{title}</h4>
        <span className="border-b-2 border-air-100 w-12 md:w-24 pt-2"></span>
        <p className="mt-5 text-sm text-gray-600 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex gap-2 items-center">
            <StarIcon className="h-5 text-air-100" />
            <span className="md:pb-1">{star}</span>
          </p>

          <div>
            <p className="text-lg font-medium lg:text-2xl lg:font-semibold md:pb-2 underline underline-offset-1 decoration-air-100">
              {price}
            </p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
