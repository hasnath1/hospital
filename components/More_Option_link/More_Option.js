import Link from "next/link";

const More_Option = ({ link }) => {
  return (
    <div className="text-right max-w-[1200px] mx-auto">
      <Link href={link} passHref>
        <div className="font-bold text-[#4E7EFF] flex justify-end items-center group cursor-pointer">
          <p className="mr-4">More Options</p>
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:animate-left-right"
          >
            <path
              d="M1 8H17"
              stroke="#4E7EFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1L17 8L10 15"
              stroke="#4E7EFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default More_Option;
