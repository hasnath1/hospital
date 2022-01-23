import Image from "next/image";
import Link from "next/link";

const Item = ({ text }) => (
  <div className="flex items-center justify-start">
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      className="mr-2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9125 18.5H10.913H10.929H10.9295C15.6222 18.4953 19.4233 14.6885 19.421 9.99575C19.4186 5.30299 15.6137 1.5 10.921 1.5C6.22819 1.5 2.4233 5.30299 2.42096 9.99575C2.41861 14.6885 6.2197 18.4953 10.9125 18.5ZM8.57609 12.5242L8.92964 12.8764L9.28251 12.5236L15.5177 6.28836L16.2231 6.99875L8.92896 14.2929L5.63606 11L6.33964 10.2964L8.57609 12.5242ZM10.9284 19.5C5.68195 19.4997 1.42896 15.2465 1.42896 10C1.42896 4.75329 5.68225 0.5 10.929 0.5C16.1755 0.5 20.4287 4.75299 20.429 9.99945C20.4232 15.2441 16.173 19.4942 10.9284 19.5Z"
        fill="#F178B6"
        stroke="#4E7EFF"
      />
    </svg>
    <p className="text-base lg:text-lg">{text}</p>
  </div>
);

const About = () => {
  return (
    <section className="my-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-4">
        <div>
          <Image
            src="/image/about.png"
            alt="doctor with paper"
            width={500}
            height={500}
          />
        </div>

        <div className="text-[#777777] max-w-[500px] p-2 lg:p-0">
          <h1 className="text-[#555555] font-semibold text-[38px]">
            Get to know about us
          </h1>
          <p className="text-xl leading-8 my-4 lg:my-8">
            We are the leading health service provider . We ensure the best
            healthcare service comprise of professional service .
          </p>

          <div className="grid grid-cols-2 gap-y-1 gap-x-1">
            <Item text={"Comfortable care"} />
            <Item text={"High Tech"} />
            <Item text={"Friendly Stuff"} />
            <Item text={"Trusted Doctors"} />
            <Item text={"Advanced Services"} />
            <Item text={"24/7 open"} />
          </div>

          <Link href={"#"} passHref>
            <a className="bg-[#4E7EFF] p-[10px] flex justify-center items-center hover:bg-[#3c70ff] text-white rounded-full max-w-[164px] mt-8 hover:no-underline">
              More Options
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
