import Image from "next/image";

function MediumCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="mt-5 snap-start md:hover:scale-105 md:cursor-pointer transition-transform duration-300">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" className="rounded-3xl" />
      </div>
      <h3 className="text-2xl mt-3 ml-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
