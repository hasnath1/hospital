import Link from "next/link";
import Image from "next/image";

const Footer_1 = () => {
  return (
    <section className="bg-[#EFF6FF]">
      <div className="max-w-[1200px] mx-auto py-8">
        <div className="flex justify-between items-start flex-col md:flex-row flex-wrap mx-4 text-[#333333] md:justify-center md:gap-6 md:items-center lg:justify-between lg:items-start lg:mx-0">
          {/* Details */}
          <div>
            {/* logo */}
            <h1 className="text-2xl font-semibold text-[#4879FF]">Medics</h1>

            {/* Address */}
            <address className="not-italic text-[#333333] text-[14px] leading-6 my-4">
              <p>201 road , Kishoreganj sadar,</p>
              <p>Kishoreganj, Dhaka</p>
              <p>Bangladesh.</p>
            </address>

            {/* Phone number & email */}
            <div className="text-[#304C96] text-[14px] font-medium">
              {/* email */}
              <div className="flex items-center">
                <svg
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.0504 6.02531L17.9201 1.98829V10.0162L13.0504 6.02531ZM6.77537 6.70897L8.48544 8.1254C8.75382 8.34296 9.10375 8.47441 9.48615 8.47441H9.4996H9.49881H9.5099C9.89308 8.47441 10.243 8.34221 10.5146 8.12313L10.5122 8.12465L12.2223 6.70822L17.4206 10.9681H1.57944L6.77537 6.70897ZM1.57232 1.03116H17.4301L9.81312 7.34353C9.72748 7.40817 9.62146 7.44331 9.51227 7.44325H9.50119H9.50198H9.4909C9.38132 7.44338 9.27495 7.40795 9.18926 7.34278L9.19005 7.34353L1.57232 1.03116ZM1.08067 1.98754L5.94962 6.02455L1.08067 10.0132V1.98754ZM18.1814 0.143532C17.9914 0.0528801 17.7681 0 17.5314 0H1.47177C1.2423 5.23022e-05 1.01599 0.0509995 0.8107 0.14882L0.819409 0.145042C0.573645 0.260707 0.366674 0.439644 0.221877 0.66164C0.0770804 0.883635 0.000227494 1.13984 0 1.40132L0 10.5964C0.000419129 10.9685 0.155531 11.3253 0.431302 11.5885C0.707073 11.8516 1.08098 11.9996 1.47098 12H17.529C17.919 11.9996 18.2929 11.8516 18.5687 11.5885C18.8445 11.3253 18.9996 10.9685 19 10.5964V1.40434V1.40132C19 0.852125 18.6683 0.376204 18.1853 0.147309L18.1766 0.143532H18.1814Z"
                    fill="#00217C"
                  />
                </svg>

                <p className="ml-2">example@gmail.com</p>
              </div>

              {/* phone number */}
              <div className="flex items-center">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5396 6.15385H13.1555C13.1549 5.66437 12.936 5.19507 12.5467 4.84896C12.1575 4.50284 11.6297 4.30818 11.0793 4.30769V3.07692C11.9967 3.0779 12.8762 3.40239 13.5249 3.97921C14.1736 4.55604 14.5385 5.3381 14.5396 6.15385Z"
                    fill="#00217C"
                  />
                  <path
                    d="M17.3079 6.15385H15.9238C15.9223 5.01178 15.4114 3.91685 14.5032 3.10929C13.595 2.30172 12.3636 1.84746 11.0793 1.84615V0.615385C12.7306 0.617014 14.3138 1.20105 15.4815 2.23936C16.6492 3.27767 17.3061 4.68546 17.3079 6.15385Z"
                    fill="#00217C"
                  />
                  <path
                    d="M15.9238 16H15.8061C2.2069 15.3046 0.276015 5.10154 0.00610717 1.98769C-0.0360772 1.49954 0.141534 1.01647 0.499874 0.644754C0.858214 0.273034 1.36793 0.0431044 1.91692 0.00553908C1.97182 0.00184677 2.02696 5.76979e-07 2.08232 5.76979e-07H5.72954C6.00675 -0.000238047 6.27766 0.073545 6.50717 0.211792C6.73668 0.35004 6.91422 0.546382 7.01679 0.775385L8.06874 3.07692C8.17002 3.30064 8.19516 3.5459 8.14102 3.78221C8.08689 4.01853 7.95586 4.23549 7.76423 4.40615L6.29012 5.72923C6.51944 6.89313 7.14578 7.96614 8.0842 8.80278C9.02261 9.63941 10.2277 10.1992 11.536 10.4062L13.0378 9.08308C13.2326 8.91456 13.4789 8.80077 13.746 8.7559C14.0131 8.71103 14.2891 8.73707 14.5396 8.83077L17.1487 9.76C17.4024 9.85408 17.6188 10.0132 17.7704 10.217C17.922 10.4209 18.0019 10.6602 18 10.9046V14.1538C18 14.6435 17.7812 15.1131 17.3919 15.4593C17.0025 15.8055 16.4744 16 15.9238 16ZM2.08232 1.23077C1.99144 1.23053 1.90139 1.2462 1.81732 1.27691C1.73325 1.30761 1.6568 1.35273 1.59234 1.40971C1.52789 1.46668 1.47668 1.53438 1.44165 1.60895C1.40662 1.68352 1.38845 1.76349 1.38817 1.84431C1.38817 1.86154 1.38887 1.87856 1.39025 1.89539C1.7086 5.53846 3.75021 14.1538 15.8822 14.7692C16.0654 14.779 16.2454 14.7237 16.3827 14.6154C16.52 14.5072 16.6034 14.3549 16.6144 14.192L16.6158 14.1538V10.9046L14.0067 9.97538L12.0205 11.7292L11.6883 11.6923C5.66725 11.0215 4.85061 5.66769 4.85061 5.61231L4.80908 5.31692L6.77457 3.55077L5.73646 1.23077H2.08232Z"
                    fill="#00217C"
                  />
                </svg>
                <p className="ml-2">+88017-1075-5041</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="text-[12px] flex flex-wrap mt-4 justify-start gap-y-8 gap-x-16 md:order-2 md:gap-16 lg:order-1 lg:gap-y-8 lg:gap-x-16 lg:mt-0">
            {/* Customer Care*/}
            <div>
              <h1 className="text-[#444444] font-semibold text-base">
                Customer Care
              </h1>
              <div className="flex flex-col gap-y-2 mt-4">
                <Link href={"#"} passHref>
                  <a>Help Center</a>
                </Link>
                <Link href={"#"} passHref>
                  <a>Terms &#38; Conditions</a>
                </Link>
                <Link href={"#"} passHref>
                  <a>Privacy Policies</a>
                </Link>
                <Link href={"#"} passHref>
                  <a>Doctors</a>
                </Link>
                <Link href={"#"} passHref>
                  <a>Blog</a>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h1 className="text-[#444444] font-semibold text-base">
                Quick links
              </h1>
              <div className="flex flex-col gap-y-2 mt-4">
                <Link href={"#"} passHref>
                  <a>Log in</a>
                </Link>
                <Link href={"#"} passHref>
                  <a>Sign up</a>
                </Link>
                <Link href={"#"} passHref>
                  <a>Forgot</a>
                </Link>
                <Link href={"#"} passHref>
                  <a>Privacy</a>
                </Link>
              </div>
            </div>

            {/* Make Money */}
            <div>
              <h1 className="text-[#444444] font-semibold text-base">
                Make money
              </h1>
              <div className="flex flex-col gap-y-2 mt-4">
                <Link href="#" passHref>
                  <a href="#">Be a nurse</a>
                </Link>
                <Link href="#" passHref>
                  <a href="#">Sponsor</a>
                </Link>
                <Link href="#" passHref>
                  <a href="#">Advertise</a>
                </Link>
                <Link href="#" passHref>
                  <a href="#">Invest</a>
                </Link>
              </div>
            </div>
          </div>

          {/* Subscribe  */}
          <div className="text-[#333333] font-semibold mt-4 md:order-1 lg:order-2 lg:mt-0">
            <div>
              <h1>Subscribe to our newsletter</h1>

              <form
                onSubmit={e => e.preventDefault()}
                className="flex items-center justify-center mt-4"
              >
                <input
                  type="email"
                  className="h-10 border-2 border-[#00217C] rounded-tl-[5px] rounded-bl-[5px] text-[14px] px-2 outline-none "
                  placeholder="Your email"
                />
                <button
                  type="submit"
                  className="text-white bg-[#00217C] h-10 w-24 font-semibold text-[14px] rounded-tr-[5px] rounded-br-[5px] hover:bg-[#002daa]"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="mt-4">
              <h1>Follow Us</h1>

              {/* Icons */}
              <div className="flex items-center justify-start gap-x-3 mt-3">
                <a href="#" className="flex justify-center items-center">
                  <Image
                    src="/icons/gray/twitter.svg"
                    alt="twitter"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <Image
                    src="/icons/gray/google.svg"
                    alt="google"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <Image
                    src="/icons/gray/facebook.svg"
                    alt="facebook"
                    width={20}
                    height={20}
                  />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <Image
                    src="/icons/gray/instagram.svg"
                    alt="instagram"
                    width={22}
                    height={22}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex justify-center items-center bg-[#D1E5FE]">
        <p className="text-[12px] text-[#343434] font-light py-4">
          © 2021 Medics all rights preserved .
        </p>
      </footer>
    </section>
  );
};

export default Footer_1;
