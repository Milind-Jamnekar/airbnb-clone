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
      <div className="relative :max-w-full h-96">
        <Image
          src={img}
          className="rounded-3xl"
          layout="fill"
          objectFit="cover"
          alt="Large Card Image"
        />
      </div>
      <div className="absolute top-24 left-10 sm:top-32 sm:left-12 right-0">
        <h3 className="text-4xl sm:text-5xl lg:text-6xl mb-3 font-thin sm:w-52">
          {title}
        </h3>
        <p className="text-lg text-gray-600">{description}</p>
        <button className="text-sm px-4 py-2 bg-gray-900 text-white rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
