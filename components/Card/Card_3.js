import Image from "next/image";

const Card = ({
  heading = "Know about the levels of diabities and its cure",
  link = "#",
  sub = "Diabetes is a chronic health desease . Diabetes mellitus known as just diabetes, is a group of metabolic disorders caused by high . This man was beaten up by last sunday by his wife . Because he didn’t gift his wife a diamond ring . Now, he is complaining about his wife ...",
  img_url = "/image/injured_man.jpg",
  uploadDate = Date.now(),
  writerUrl = "/image/doctors/doctor_1.png",
  writerName = "Hasnath Abdullah",
  read = "5 min",
}) => {
  const dateParts = new Date(uploadDate).toDateString().split(" ");
  const date = `${dateParts[2]} ${dateParts[1]}, ${dateParts[3]}`;

  return (
    <div className="max-w-[390px] rounded-[10px] flex flex-col mt-2 bg-white group border">
      <div className="rounded-tl-[10px] rounded-tr-[10px] overflow-hidden">
        <Image
          src={img_url}
          alt="image"
          width={390}
          height={220}
          className="rounded-tl-[10px] rounded-tr-[10px] transition-all duration-1000 group-hover:scale-150 group-hover:rotate-6"
          priority
        />
      </div>

      <div className="pt-[16px]">
        <h1 className="text-[26px] font-semibold text-[#555555] px-[24px]">
          <a href={link} className="hover:underline">
            {heading.length > 50 ? `${heading.substring(0, 50)}...` : heading}
          </a>
        </h1>

        <p className="text-sm text-[#555555] mb-6 mt-4 leading-6 px-[24px]">
          {sub.length > 150 ? `${sub.substring(0, 150)}...` : sub}
        </p>
        <hr />

        <div className="px-[24px] py-4 flex justify-start items-center">
          <div className="w-[55px] h-[55px] overflow-hidden border border-gray-200 rounded-full">
            <Image
              src={writerUrl}
              width={55}
              height={55}
              layout="fixed"
              alt="image"
            />
          </div>

          <div className="ml-4 flex flex-col">
            <h3 className="text-[#333333] text-sm font-medium">{writerName}</h3>
            <p className="text-[10px] text-[#777777]">
              {date} - {read}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
