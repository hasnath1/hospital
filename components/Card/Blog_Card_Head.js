import Image from "next/image";
import Link from "next/link";

const Blog_Card_Head = ({ img, title, url, info }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-[10px] max-w-[1000px] mx-auto border border-gray-200">
      <div className="flex-grow max-w-[575px] rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          layout="responsive"
          width={575}
          height={350}
          priority
        />
      </div>

      <div className="px-[40px] md:w-[415px] flex flex-col justify-center items-start gap-y-4 mb-4">
        <h1 className="text-[28px] font-medium leading-8 mt-4 md:-mt-4">
          {title}
        </h1>

        <p className="text-sm text-[#555555] leading-5">
          {info.length > 130 ? `${info.substr(0, 130)}...` : info}
        </p>

        <Link href={url ? url : "#"} passHref>
          <div className="cursor-pointer flex justify-start items-center group w-fit">
            <p className="font-medium text-sm mr-3 text-[#4E7EFF] group-hover:text-[#2b63ff]">
              Read More
            </p>
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:animate-left-right"
            >
              <path
                d="M0.666016 5.49992C0.389873 5.49992 0.166016 5.72378 0.166016 5.99992C0.166016 6.27606 0.389873 6.49992 0.666016 6.49992V5.49992ZM11.3327 5.99992L11.6862 6.35347C11.8815 6.15821 11.8815 5.84163 11.6862 5.64637L11.3327 5.99992ZM7.01957 0.979699C6.82431 0.784436 6.50772 0.784436 6.31246 0.979699C6.1172 1.17496 6.1172 1.49154 6.31246 1.68681L7.01957 0.979699ZM6.31246 10.313C6.1172 10.5083 6.1172 10.8249 6.31246 11.0201C6.50772 11.2154 6.82431 11.2154 7.01957 11.0201L6.31246 10.313ZM0.666016 6.49992H11.3327V5.49992H0.666016V6.49992ZM6.31246 1.68681L10.9791 6.35347L11.6862 5.64637L7.01957 0.979699L6.31246 1.68681ZM10.9791 5.64637L6.31246 10.313L7.01957 11.0201L11.6862 6.35347L10.9791 5.64637Z"
                fill="#4E7EFF"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog_Card_Head;
