const Testimonial = ({ review, name }) => {
  return (
    <div className="relative h-[230px] max-w-[370px] p-7 flex flex-col justify-between rounded-[5px] shadow-3xl">
      <div>
        <svg
          width="132"
          height="99"
          viewBox="0 0 132 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -z-10"
        >
          <path
            d="M30.5209 39.4165C29.0621 39.4165 27.6622 39.639 26.2688 39.8418C26.7202 38.3241 27.1846 36.7803 27.9304 35.3934C28.6761 33.3786 29.8405 31.632 30.9984 29.8723C31.9666 27.9686 33.6739 26.6799 34.9299 25.051C36.2448 23.468 38.0372 22.4148 39.4568 21.0999C40.8502 19.7261 42.6753 19.0393 44.1275 18.0711C45.6452 17.201 46.9666 16.2394 48.3796 15.7815L51.9056 14.3293L55.0063 13.0405L51.8336 0.362793L47.9282 1.30479C46.6788 1.61879 45.1546 1.98512 43.421 2.42342C41.6482 2.7505 39.7577 3.64671 37.6513 4.46442C35.571 5.39333 33.1637 6.02134 30.9264 7.51284C28.6761 8.93892 26.0791 10.1295 23.7895 12.0397C21.5719 14.0087 18.8963 15.7161 16.9207 18.2215C14.762 20.5635 12.6294 23.0231 10.9744 25.823C9.05766 28.492 7.75587 31.4226 6.38212 34.3206C5.1392 37.2185 4.13833 40.1819 3.32062 43.0603C1.77024 48.83 1.07683 54.3119 0.808618 59.0023C0.586201 63.6992 0.717034 67.6046 0.991784 70.4306C1.08991 71.7651 1.27308 73.0603 1.40391 73.9566L1.56745 75.0555L1.73753 75.0163C2.90104 80.4513 5.57948 85.4459 9.463 89.4222C13.3465 93.3986 18.2764 96.1942 23.6825 97.4858C29.0885 98.7773 34.7497 98.512 40.0112 96.7205C45.2727 94.9289 49.9196 91.6844 53.4141 87.3623C56.9087 83.0401 59.1082 77.8169 59.7583 72.2969C60.4084 66.7769 59.4824 61.1856 57.0874 56.1699C54.6925 51.1542 50.9265 46.9189 46.2251 43.9542C41.5237 40.9894 36.079 39.4162 30.5209 39.4165ZM102.479 39.4165C101.02 39.4165 99.6205 39.639 98.2271 39.8418C98.6785 38.3241 99.1429 36.7803 99.8887 35.3934C100.634 33.3786 101.799 31.632 102.957 29.8723C103.925 27.9686 105.632 26.6799 106.888 25.051C108.203 23.468 109.996 22.4148 111.415 21.0999C112.808 19.7261 114.634 19.0393 116.086 18.0711C117.604 17.201 118.925 16.2394 120.338 15.7815L123.864 14.3293L126.965 13.0405L123.792 0.362793L119.887 1.30479C118.637 1.61879 117.113 1.98512 115.379 2.42342C113.607 2.7505 111.716 3.64671 109.61 4.46442C107.536 5.39988 105.122 6.02133 102.885 7.51938C100.634 8.94546 98.0374 10.136 95.7478 12.0462C93.5302 14.0153 90.8546 15.7226 88.8791 18.2215C86.7203 20.5635 84.5877 23.0231 82.9327 25.823C81.016 28.492 79.7142 31.4226 78.3404 34.3206C77.0975 37.2185 76.0966 40.1819 75.2789 43.0603C73.7286 48.83 73.0351 54.3119 72.7669 59.0023C72.5445 63.6992 72.6754 67.6046 72.9501 70.4306C73.0482 71.7651 73.2314 73.0603 73.3622 73.9566L73.5258 75.0555L73.6959 75.0163C74.8594 80.4513 77.5378 85.4459 81.4213 89.4222C85.3049 93.3986 90.2348 96.1942 95.6408 97.4858C101.047 98.7773 106.708 98.512 111.97 96.7205C117.231 94.9289 121.878 91.6844 125.372 87.3623C128.867 83.0401 131.067 77.8169 131.717 72.2969C132.367 66.7769 131.441 61.1856 129.046 56.1699C126.651 51.1542 122.885 46.9189 118.183 43.9542C113.482 40.9894 108.037 39.4162 102.479 39.4165Z"
            fill="#F1F5FF"
          />
        </svg>

        <p className="z-10 text-[17px] leading-[30px] text-[#555555]">
          &#8220;{review.length > 140 ? `${review.substr(0, 140)}...` : review}
          &#8221;
        </p>
      </div>
      <div className="flex justify-end items-center">
        <svg
          width="50"
          height="2"
          viewBox="0 0 50 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="-8.74228e-08"
            y1="1"
            x2="50"
            y2="0.999996"
            stroke="#4E7EFF"
            strokeWidth="2"
          />
        </svg>
        <p className="font-semibold text-sm text-[#333333] ml-2">{name}</p>
      </div>
    </div>
  );
};

export default Testimonial;
