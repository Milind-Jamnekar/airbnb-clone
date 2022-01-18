import Image from "next/image";

function LargeCard({
  img,
  title,
  description,
  buttonText,
}: {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative max-w-[300px] md:max-w-full h-96">
        <Image
          src={img}
          className="rounded-3xl"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-6xl mb-3 font-thin w-52">{title}</h3>
        <p className="text-lg text-gray-600">{description}</p>
        <button className="text-sm px-4 py-2 bg-gray-900 text-white rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
