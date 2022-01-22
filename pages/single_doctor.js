import Image from "next/image";
import { data } from "../data/fakeDoctorData";

const Info = ({ field, value }) => {
  return (
    <div className="flex text-sm my-2">
      <p className="w-[100px] font-semibold text-[#333333] uppercase">
        {field}:
      </p>
      <p className="text-[#555555] flex-grow break-words w-min">{value}</p>
    </div>
  );
};

const SocialMedia = ({ fb_link, tw_link, instagram_link }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      {/* Facebook */}
      <a href={fb_link}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.00732422 9.05407C-0.0068171 11.2105 0.758411 13.296 2.15082 14.9358C3.54323 16.5755 5.4715 17.662 7.58907 18V11.6711H5.30484V9.05407H7.59177V7.06186C7.54127 6.59558 7.59347 6.12384 7.74467 5.68014C7.89586 5.23644 8.14234 4.83166 8.4666 4.49456C8.79086 4.15746 9.18494 3.8963 9.62085 3.72964C10.0568 3.56297 10.5238 3.49488 10.9888 3.53021C11.6641 3.54108 12.3394 3.60175 13.0057 3.71132V5.93807H11.8676C11.6742 5.91259 11.4775 5.93115 11.2922 5.99239C11.1069 6.05362 10.9376 6.15596 10.7969 6.29184C10.6561 6.42772 10.5476 6.59367 10.4792 6.77742C10.4108 6.96117 10.3844 7.15803 10.4018 7.35345V9.05407H12.8967L12.4979 11.672H10.4018V18C12.1014 17.7299 13.6884 16.9756 14.9749 15.8265C16.2615 14.6774 17.1937 13.1815 17.6612 11.5161C18.1288 9.85066 18.112 8.08535 17.613 6.42918C17.114 4.77301 16.1536 3.29534 14.8454 2.17111C13.5373 1.04688 11.9363 0.32318 10.232 0.0856856C8.52761 -0.151809 6.79127 0.106852 5.22853 0.831043C3.6658 1.55523 2.34211 2.71463 1.41418 4.17196C0.486251 5.62929 -0.00705107 7.32352 -0.00732422 9.05407V9.05407Z"
            fill="#4E7EFF"
          />
        </svg>
      </a>

      {/* Twitter */}
      <a href={tw_link}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 0C4.02938 0 0 4.02938 0 9C0 13.9706 4.02938 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02938 13.9706 0 9 0ZM12.6609 7.3725C12.6647 7.44937 12.6656 7.52625 12.6656 7.60125C12.6656 9.945 10.8834 12.6459 7.62281 12.6459C6.65934 12.6475 5.71591 12.3708 4.90594 11.8491C5.04375 11.8659 5.18531 11.8725 5.32875 11.8725C6.15937 11.8725 6.92344 11.5903 7.53 11.1141C7.16036 11.1068 6.80219 10.9844 6.50542 10.7639C6.20864 10.5434 5.98805 10.2359 5.87437 9.88406C6.13983 9.93454 6.4133 9.92396 6.67406 9.85312C6.27286 9.772 5.91206 9.5546 5.65285 9.23781C5.39364 8.92102 5.25197 8.52432 5.25187 8.115V8.09344C5.49094 8.22562 5.76469 8.30625 6.05531 8.31563C5.67919 8.06524 5.41292 7.68063 5.31098 7.24044C5.20903 6.80024 5.27911 6.33774 5.50687 5.9475C5.95215 6.495 6.50743 6.94289 7.13678 7.26217C7.76613 7.58144 8.45552 7.765 9.16031 7.80094C9.07071 7.4206 9.10927 7.02132 9.27001 6.66516C9.43074 6.309 9.70464 6.01593 10.0491 5.8315C10.3936 5.64707 10.7894 5.58161 11.1749 5.64532C11.5604 5.70902 11.9141 5.89831 12.1809 6.18375C12.5777 6.10526 12.9581 5.95974 13.3059 5.75344C13.1737 6.16419 12.8969 6.51298 12.5269 6.735C12.8783 6.69267 13.2214 6.5982 13.545 6.45469C13.3073 6.81084 13.0079 7.12166 12.6609 7.3725V7.3725Z"
            fill="#4E7EFF"
          />
        </svg>
      </a>

      {/* Instagram */}
      <a href={instagram_link}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 6C8.20435 6 7.44129 6.31607 6.87868 6.87868C6.31607 7.44129 6 8.20435 6 9C6 9.79565 6.31607 10.5587 6.87868 11.1213C7.44129 11.6839 8.20435 12 9 12C9.79565 12 10.5587 11.6839 11.1213 11.1213C11.6839 10.5587 12 9.79565 12 9C12 8.20435 11.6839 7.44129 11.1213 6.87868C10.5587 6.31607 9.79565 6 9 6Z"
            fill="#4E7EFF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.4 0C3.96783 0 2.59432 0.568927 1.58162 1.58162C0.568927 2.59432 0 3.96783 0 5.4V12.6C0 14.0322 0.568927 15.4057 1.58162 16.4184C2.59432 17.4311 3.96783 18 5.4 18H12.6C14.0322 18 15.4057 17.4311 16.4184 16.4184C17.4311 15.4057 18 14.0322 18 12.6V5.4C18 3.96783 17.4311 2.59432 16.4184 1.58162C15.4057 0.568927 14.0322 0 12.6 0H5.4ZM4.8 9C4.8 7.88609 5.2425 6.8178 6.03015 6.03015C6.8178 5.2425 7.88609 4.8 9 4.8C10.1139 4.8 11.1822 5.2425 11.9698 6.03015C12.7575 6.8178 13.2 7.88609 13.2 9C13.2 10.1139 12.7575 11.1822 11.9698 11.9698C11.1822 12.7575 10.1139 13.2 9 13.2C7.88609 13.2 6.8178 12.7575 6.03015 11.9698C5.2425 11.1822 4.8 10.1139 4.8 9ZM13.2 4.8H14.4V3.6H13.2V4.8Z"
            fill="#4E7EFF"
          />
        </svg>
      </a>
    </div>
  );
};

const SingleDoctor = () => {
  return (
    <section className="my-12">
      <div className="max-w-[900px] mx-auto flex flex-col md:flex-row border border-gray-300 rounded-[5px]">
        <div className="p-[22px] md:max-w-md border-r border-gray-300">
          {/* Image */}
          <div>
            <Image
              src={data.img_link}
              alt={data.name}
              width={230}
              height={210}
              layout={"responsive"}
              priority
            />
          </div>

          {/* Info */}
          <div>
            {/* Name */}
            <h1 className="font-medium text-xl text-[#333333] text-center mt-4">
              {data.name}
            </h1>

            {/* Social Media Icons */}
            <div className="mt-2 mb-4">
              <SocialMedia {...data.socialMedia} />
            </div>

            {/* Doctor Info */}
            <div>
              {Object.keys(data.info).map(key => {
                return <Info field={key} value={data.info[key]} key={key} />;
              })}
            </div>
          </div>
        </div>

        <div className="text-[#555555] p-[22px]">
          <div>
            <h1 className="text-[#333333] font-medium text-2xl">About Me</h1>
            <p className="my-2">{data.aboutMe}</p>
          </div>

          <div className="mt-4">
            <h1 className="text-[#333333] font-medium text-2xl">
              Skills &#38; Education
            </h1>

            <p className="my-2">
              Lorem Ipsum has been the industrys standard dummy text ever since
              mbled it to make a type specimen book. It has survived not only fi
              :
            </p>

            <ul className="pl-8 mt-4">
              {data.skills.map(value => (
                <li key={value} className="list-disc my-2">
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleDoctor;
