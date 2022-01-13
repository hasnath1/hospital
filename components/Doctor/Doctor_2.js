import Image from "next/image";
import Link from "next/link";

const Doctor = ({
  img_url,
  name,
  occupation,
  info,
  fb = "#",
  twitter = "#",
  instagram = "#",
}) => {
  return (
    <div className="p-[22px] max-w-[375px] m-8 rounded-[5px] shadow-3xl">
      <div className="flex items-center">
        <div>
          <Image src={img_url} width={75} height={75} alt={name} />
        </div>

        <div className="ml-4">
          <h1 className="text-xl text-[#333333] font-semibold">{name}</h1>
          <p className="text-[#777777] text-[11px]">{occupation}</p>
        </div>
      </div>

      <p className="text-[#333333] text-[12px] leading-5 my-4">
        {info.length >= 160 ? `${info.substr(0, 160)}...` : info}
      </p>

      <div className="flex justify-between items-center">
        {/*Social Media Icons  */}

        <div className="grid grid-cols-3 gap-x-5">
          <Link href={fb} passHref>
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-0.0078125 9.05407C-0.00730538 11.2105 0.757923 13.296 2.15033 14.9358C3.54274 16.5755 5.47102 17.662 7.58858 18V11.6711H5.30435V9.05407H7.59128V7.06186C7.54078 6.59558 7.59298 6.12384 7.74418 5.68014C7.89537 5.23644 8.14185 4.83166 8.46611 4.49456C8.79037 4.15746 9.18445 3.8963 9.62036 3.72964C10.0563 3.56297 10.5233 3.49488 10.9884 3.53021C11.6636 3.54108 12.3389 3.60175 13.0052 3.71132V5.93807H11.8671C11.6737 5.91259 11.477 5.93115 11.2917 5.99239C11.1064 6.05362 10.9371 6.15596 10.7964 6.29184C10.6557 6.42772 10.5471 6.59367 10.4787 6.77742C10.4103 6.96117 10.3839 7.15803 10.4013 7.35345V9.05407H12.8962L12.4974 11.672H10.4013V18C12.1009 17.7299 13.6879 16.9756 14.9744 15.8265C16.261 14.6774 17.1932 13.1815 17.6608 11.5161C18.1283 9.85066 18.1116 8.08535 17.6125 6.42918C17.1135 4.77301 16.1531 3.29534 14.845 2.17111C13.5369 1.04688 11.9358 0.32318 10.2315 0.0856856C8.52712 -0.151809 6.79078 0.106852 5.22804 0.831043C3.66531 1.55523 2.34162 2.71463 1.41369 4.17196C0.485763 5.62929 -0.00753936 7.32352 -0.0078125 9.05407Z"
                fill="#4E7EFF"
              />
            </svg>
          </Link>

          <Link href={twitter} passHref>
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0C4.02938 0 0 4.02938 0 9C0 13.9706 4.02938 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02938 13.9706 0 9 0ZM12.6609 7.3725C12.6647 7.44937 12.6656 7.52625 12.6656 7.60125C12.6656 9.945 10.8834 12.6459 7.62281 12.6459C6.65934 12.6475 5.71591 12.3708 4.90594 11.8491C5.04375 11.8659 5.18531 11.8725 5.32875 11.8725C6.15937 11.8725 6.92344 11.5903 7.53 11.1141C7.16036 11.1068 6.80219 10.9844 6.50542 10.7639C6.20864 10.5434 5.98805 10.2359 5.87437 9.88406C6.13983 9.93454 6.4133 9.92396 6.67406 9.85312C6.27286 9.772 5.91206 9.5546 5.65285 9.23781C5.39364 8.92102 5.25198 8.52432 5.25187 8.115V8.09344C5.49094 8.22563 5.76469 8.30625 6.05531 8.31563C5.67919 8.06524 5.41292 7.68063 5.31098 7.24044C5.20903 6.80024 5.27911 6.33774 5.50687 5.9475C5.95215 6.495 6.50743 6.94289 7.13678 7.26217C7.76613 7.58144 8.45552 7.765 9.16031 7.80094C9.07071 7.4206 9.10927 7.02132 9.27001 6.66516C9.43074 6.309 9.70465 6.01593 10.0491 5.8315C10.3936 5.64707 10.7894 5.58161 11.1749 5.64532C11.5604 5.70902 11.9141 5.89831 12.1809 6.18375C12.5777 6.10526 12.9581 5.95974 13.3059 5.75344C13.1737 6.16419 12.8969 6.51298 12.5269 6.735C12.8783 6.69267 13.2214 6.5982 13.545 6.45469C13.3073 6.81084 13.0079 7.12166 12.6609 7.3725Z"
                fill="#4E7EFF"
              />
            </svg>
          </Link>

          <Link href={instagram} passHref>
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
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
          </Link>
        </div>

        <Link href={"#"} passHref>
          <button className="rounded-[5px] bg-[#4E7EFF] text-white text-sm cursor-pointer py-3 px-7 hover:bg-[#2d65ff]">
            See info
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Doctor;
