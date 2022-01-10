import Image from "next/image";

const Speciality = ({ text, imgUrl }) => {
  return (
    <div className="rounded-[10px] bg-white flex justify-center items-center flex-col h-[120px]">
      <div className="rounded-full">
        <Image src={imgUrl} alt={text} width={56} height={56} />
      </div>

      <p className="text-[#555555] text-base font-medium">{text}</p>
    </div>
  );
};

export default Speciality;
