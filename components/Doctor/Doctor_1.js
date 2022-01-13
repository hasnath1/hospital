import Image from "next/image";

const Doctor = ({
  name,
  info,
  img,
  occupation,
  color,
  pictureAlign = "left",
}) => {
  return (
    <div className="flex justify-center flex-col items-center md:flex-row my-4">
      <div
        className={`rounded-[20px] md:min-w-[250px] md:min-h-[240px] flex justify-center items-center border border-gray-100 ${
          pictureAlign === "left" ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          className=""
          src={img}
          alt={name}
          width={250}
          height={240}
          layout="intrinsic"
        />
      </div>

      <div
        style={{ backgroundColor: color }}
        className={`p-6 ${
          pictureAlign === "left" ? "md:ml-4" : "md:mr-4 md:order-1"
        } md:rounded-[20px] md:h-[240px] md:order-1`}
      >
        <h1 className="text-[22px] font-semibold text-[#4E7EFF]">{name}</h1>
        <p className="mt-2 mb-4 text-[#777777] font-medium text-[18px]">
          {occupation}
        </p>
        <p className="text-[15px] text-[#777777] leading-6">{info}</p>
      </div>
    </div>
  );
};

export default Doctor;
