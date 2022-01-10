const TopBar = () => {
  return (
    <div>
      <div className="max-w-[1200px] m-auto py-[6px] hidden xl:flex  justify-between">
        {/* Contact Icons and Info */}

        <div className="flex">
          {/* Email Contact */}
          <a
            href="mailto:abdullahaknd297@gmail.com"
            className="flex items-center text-[#555555] hover:text-[#000] hover:underline mr-3"
          >
            {/* Email Icon */}
            <svg
              width="18"
              height="13"
              viewBox="0 0 15 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M10.3029 5.02109L14.1475 1.65691V8.34687L10.3029 5.02109ZM5.34897 5.59081L6.69903 6.77117C6.91091 6.95247 7.18717 7.06201 7.48906 7.06201H7.49969H7.49906H7.50781C7.81033 7.06201 8.08659 6.95184 8.30097 6.76928L8.2991 6.77054L9.64915 5.59018L13.7531 9.14007H1.24693L5.34897 5.59081ZM1.2413 0.859301H13.7606L7.7472 6.11961C7.67959 6.17347 7.59589 6.20275 7.50969 6.20271H7.50094H7.50156H7.49281C7.4063 6.20282 7.32233 6.17329 7.25468 6.11898L7.2553 6.11961L1.2413 0.859301ZM0.853161 1.65628L4.69707 5.02046L0.853161 8.34435V1.65628ZM14.3537 0.11961C14.2037 0.0440668 14.0275 0 13.8406 0H1.16192C0.980766 4.35851e-05 0.802099 0.0424996 0.640027 0.124016L0.646902 0.120869C0.452877 0.217256 0.289479 0.36637 0.175166 0.551366C0.0608529 0.736363 0.0001796 0.949869 0 1.16777L0 8.83034C0.000330891 9.14045 0.122788 9.43777 0.340502 9.65705C0.558216 9.87633 0.853405 9.99967 1.1613 10H13.8387C14.1466 9.99967 14.4418 9.87633 14.6595 9.65705C14.8772 9.43777 14.9997 9.14045 15 8.83034V1.17029V1.16777C15 0.710104 14.7381 0.313503 14.3568 0.122757L14.35 0.11961H14.3537Z"
                fill="#00217C"
              />
            </svg>
            <p className="font-montserrat text-[10px]">contact@gmail.com</p>
          </a>

          {/* Phone Contact */}

          <a
            href="mailto:abdullahaknd297@gmail.com"
            className="flex items-center text-[#555555] hover:text-[#000] hover:underline"
          >
            {/* Phone Icon */}
            <svg
              width="12"
              height="16"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M5.77231 0.739151C5.96367 0.739151 6.1472 0.817026 6.28251 0.955643C6.41783 1.09426 6.49385 1.28227 6.49385 1.4783V10.3481C6.49385 10.5441 6.41783 10.7322 6.28251 10.8708C6.1472 11.0094 5.96367 11.0873 5.77231 11.0873H1.44308C1.25171 11.0873 1.06819 11.0094 0.932872 10.8708C0.797558 10.7322 0.721538 10.5441 0.721538 10.3481V1.4783C0.721538 1.28227 0.797558 1.09426 0.932872 0.955643C1.06819 0.817026 1.25171 0.739151 1.44308 0.739151H5.77231ZM1.44308 0C1.06035 0 0.693297 0.155749 0.422667 0.432985C0.152038 0.71022 0 1.08623 0 1.4783V10.3481C0 10.7402 0.152038 11.1162 0.422667 11.3934C0.693297 11.6707 1.06035 11.8264 1.44308 11.8264H5.77231C6.15504 11.8264 6.52209 11.6707 6.79272 11.3934C7.06335 11.1162 7.21538 10.7402 7.21538 10.3481V1.4783C7.21538 1.08623 7.06335 0.71022 6.79272 0.432985C6.52209 0.155749 6.15504 0 5.77231 0H1.44308Z"
                fill="#00217C"
              />
              <path
                d="M3.60764 10.3482C3.79901 10.3482 3.98253 10.2703 4.11785 10.1317C4.25316 9.99307 4.32918 9.80506 4.32918 9.60903C4.32918 9.41299 4.25316 9.22499 4.11785 9.08637C3.98253 8.94775 3.79901 8.86988 3.60764 8.86988C3.41628 8.86988 3.23276 8.94775 3.09744 9.08637C2.96213 9.22499 2.88611 9.41299 2.88611 9.60903C2.88611 9.80506 2.96213 9.99307 3.09744 10.1317C3.23276 10.2703 3.41628 10.3482 3.60764 10.3482Z"
                fill="#00217C"
              />
            </svg>

            <p className="font-montserrat text-[10px]">+16465106465</p>
          </a>
        </div>

        {/* Social Media Icons */}

        <div className="flex">
          <a href="#" className="mr-3">
            <svg
              width="18"
              height="15"
              viewBox="0 0 15 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.53889C14.5889 2.19202 14.0688 2.77357 13.4648 3.23882C13.4732 3.37302 13.4732 3.51617 13.4732 3.65933C13.4732 7.99862 10.3775 13 4.72315 13C2.98658 13 1.36745 12.4542 0 11.5237C0.243289 11.5506 0.486577 11.5685 0.738255 11.5685C2.18121 11.5685 3.50671 11.0406 4.55537 10.1638C3.91388 10.1497 3.29255 9.92217 2.77817 9.51315C2.26378 9.10412 1.88204 8.53396 1.68624 7.88231C1.87081 7.9181 2.06376 7.94494 2.2651 7.94494C2.54195 7.94494 2.81879 7.90021 3.07047 7.82863C2.37466 7.6763 1.7494 7.27274 1.3001 6.686C0.850801 6.09927 0.604959 5.36525 0.604027 4.60771V4.57192C1.02349 4.81349 1.49329 4.96559 1.99664 4.98348C1.57534 4.68209 1.23017 4.27461 0.991659 3.7971C0.753153 3.31958 0.628661 2.78674 0.629195 2.2457C0.629195 1.64625 0.780201 1.08259 1.04866 0.599449C2.56711 2.58568 4.83221 3.89195 7.39094 4.02615C7.3406 3.78458 7.30705 3.53407 7.30705 3.2746C7.30927 2.4053 7.63463 1.57242 8.21178 0.958564C8.78894 0.344713 9.57079 -3.22706e-06 10.3859 0C11.2752 0 12.0721 0.393668 12.6342 1.03785C13.3305 0.885754 13.9933 0.617343 14.5889 0.241569C14.354 1.00206 13.8674 1.64625 13.2299 2.04886C13.8411 1.97761 14.4383 1.80557 15 1.53889V1.53889Z"
                fill="#00144B"
              />
            </svg>
          </a>
          <a href="#" className="mr-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.60762e-07 1.08609C1.60762e-07 0.798043 0.114427 0.521792 0.318109 0.31811C0.52179 0.114429 0.798042 1.44791e-06 1.08609 1.44791e-06H11.9127C12.0555 -0.000231696 12.1969 0.0276932 12.3288 0.0821772C12.4608 0.136661 12.5807 0.216634 12.6816 0.317518C12.7826 0.418402 12.8627 0.538215 12.9174 0.670098C12.972 0.801981 13.0001 0.943343 13 1.08609V11.9127C13.0002 12.0555 12.9722 12.1969 12.9176 12.3289C12.8631 12.4608 12.783 12.5807 12.6821 12.6817C12.5812 12.7827 12.4613 12.8628 12.3294 12.9174C12.1975 12.972 12.0561 13.0001 11.9133 13H1.08609C0.943414 13 0.802135 12.9719 0.670325 12.9173C0.538516 12.8627 0.41876 12.7826 0.3179 12.6817C0.217039 12.5808 0.137051 12.461 0.0825043 12.3291C0.0279578 12.1973 -7.74656e-05 12.056 1.60762e-07 11.9133V1.08609ZM5.14564 4.95655H6.90595V5.84055C7.16005 5.33236 7.81005 4.875 8.78682 4.875C10.6594 4.875 11.1032 5.88723 11.1032 7.74446V11.1847H9.20814V8.16755C9.20814 7.10982 8.95404 6.513 8.30877 6.513C7.41355 6.513 7.04127 7.1565 7.04127 8.16755V11.1847H5.14564V4.95655ZM1.89564 11.1038H3.79127V4.875H1.89564V11.1032V11.1038ZM4.0625 2.84346C4.06607 3.00576 4.03719 3.16715 3.97755 3.31814C3.91791 3.46914 3.82871 3.60669 3.71518 3.72275C3.60166 3.8388 3.46609 3.93101 3.31645 3.99396C3.16681 4.05691 3.0061 4.08934 2.84375 4.08934C2.6814 4.08934 2.52069 4.05691 2.37105 3.99396C2.22141 3.93101 2.08584 3.8388 1.97232 3.72275C1.85879 3.60669 1.76959 3.46914 1.70995 3.31814C1.65031 3.16715 1.62143 3.00576 1.625 2.84346C1.63202 2.52487 1.7635 2.2217 1.9913 1.99886C2.21909 1.77603 2.52509 1.65125 2.84375 1.65125C3.16241 1.65125 3.46841 1.77603 3.6962 1.99886C3.924 2.2217 4.05548 2.52487 4.0625 2.84346V2.84346Z"
                fill="#00144B"
              />
            </svg>
          </a>
          <a href="#" className="mr-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.49825 4.33241C5.30472 4.33241 4.3307 5.30644 4.3307 6.5C4.3307 7.69356 5.30472 8.66759 6.49825 8.66759C7.69179 8.66759 8.6658 7.69356 8.6658 6.5C8.6658 5.30644 7.69179 4.33241 6.49825 4.33241ZM12.9993 6.5C12.9993 5.60239 13.0074 4.71292 12.957 3.81694C12.9066 2.77623 12.6692 1.85261 11.9082 1.0916C11.1456 0.328955 10.2236 0.0931713 9.18289 0.0427622C8.2853 -0.00764684 7.39584 0.000483674 6.49988 0.000483674C5.60229 0.000483674 4.71283 -0.00764684 3.81687 0.0427622C2.77618 0.0931713 1.85258 0.330582 1.09158 1.0916C0.328949 1.85424 0.0931695 2.77623 0.0427614 3.81694C-0.0076467 4.71454 0.000483665 5.60402 0.000483665 6.5C0.000483665 7.39598 -0.0076467 8.28708 0.0427614 9.18306C0.0931695 10.2238 0.330576 11.1474 1.09158 11.9084C1.8542 12.671 2.77618 12.9068 3.81687 12.9572C4.71446 13.0076 5.60391 12.9995 6.49988 12.9995C7.39747 12.9995 8.28693 13.0076 9.18289 12.9572C10.2236 12.9068 11.1472 12.6694 11.9082 11.9084C12.6708 11.1458 12.9066 10.2238 12.957 9.18306C13.009 8.28708 12.9993 7.39761 12.9993 6.5V6.5ZM6.49825 9.83513C4.65266 9.83513 3.16319 8.34562 3.16319 6.5C3.16319 4.65438 4.65266 3.16487 6.49825 3.16487C8.34384 3.16487 9.83332 4.65438 9.83332 6.5C9.83332 8.34562 8.34384 9.83513 6.49825 9.83513ZM9.96991 3.80718C9.539 3.80718 9.19102 3.4592 9.19102 3.02828C9.19102 2.59736 9.539 2.24938 9.96991 2.24938C10.4008 2.24938 10.7488 2.59736 10.7488 3.02828C10.7489 3.1306 10.7289 3.23195 10.6898 3.3265C10.6507 3.42106 10.5933 3.50698 10.521 3.57933C10.4486 3.65169 10.3627 3.70905 10.2681 3.74815C10.1736 3.78725 10.0722 3.80731 9.96991 3.80718V3.80718Z"
                fill="#00144B"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 6.53981C13 2.92788 10.09 0 6.50081 0C2.91001 0.000812399 0 2.92788 0 6.54062C0 9.80403 2.37708 12.5093 5.48369 13V8.43026H3.83452V6.54062H5.48531V5.09861C5.48531 3.46001 6.45613 2.55499 7.94038 2.55499C8.65204 2.55499 9.39539 2.68254 9.39539 2.68254V4.29109H8.57568C7.76897 4.29109 7.51712 4.79559 7.51712 5.31309V6.53981H9.31902L9.03143 8.42945H7.51631V12.9992C10.6229 12.5085 13 9.80321 13 6.53981Z"
                fill="#00144B"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
