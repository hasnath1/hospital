import Link from "next/link";

const Breadcrumb = ({ heading, paths }) => {
  /**
   * "heading" would be used to show the heading .
   * For example :
   *        "Frequently Asked Questions"
   *        "Terms and Conditions"
   *
   *
   * Structure of "paths" should be like this [{title:"Doctors", url:"/doctor"},{title:"FAQ",url:"/faq"}]
   */

  return (
    <div className="flex flex-col justify-center items-center h-[170px] md:h-[200px] bg-[#EFF6FF]">
      <h1 className="text-[36px] md:text-[44px] text-[#496BDB] font-bold text-center">
        {heading}
      </h1>
      <nav className="flex py-3 px-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3 text-[#4861A4] font-medium">
          <li className="inline-flex items-center">
            <Link href="/" passHref>
              <a className="inline-flex items-center">
                <svg
                  className="mr-2 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </a>
            </Link>
          </li>

          {paths.map((path, index) => {
            return (
              <li key={index}>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link href={path.url} className="ml-1 text-sm font-medium">
                    {path.title}
                  </Link>
                </div>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
