import Image from "next/image";

const Card = ({
  heading = "Know about the levels of diabities and its cure",
  link = "#",
  sub = "Diabetes is a chronic health desease . Diabetes mellitus known as just diabetes, is a group of metabolic disorders caused by high . This man was beaten up by last sunday by his wife . Because he didn’t gift his wife a diamond ring . Now, he is complaining about his wife ...",
  img_url = "/image/injured_man.jpg",
  uploadDate = Date.now(),
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

      <div className="pt-[16px] pb-[30px] px-[24px]">
        <h1 className="text-[26px] font-semibold text-[#555555]">
          <a href={link} className="hover:underline">
            {heading.length > 50 ? `${heading.substring(0, 50)}...` : heading}
          </a>
        </h1>

        <p className="text-base text-[#555555] mb-6 mt-4 leading-6">
          {sub.length > 150 ? `${sub.substring(0, 150)}...` : sub}
        </p>

        <p href={link} className="text-sm uppercase font-medium text-[#4E7EFF]">
          {date}
        </p>
      </div>
    </div>
  );
};

export default Card;
