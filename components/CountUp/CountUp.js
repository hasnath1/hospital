import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const Countup = ({ text, endNum, id }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(`#counter-up-${id}`, {
      scrollTrigger: {
        trigger: `#counter-up-${id}`,
      },
      textContent: 0,
      duration: 3,
      snap: { textContent: 1 },
      stagger: 1,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"flex flex-col justify-between items-center"}>
      <h1 className="text-white text-3xl font-semibold">
        <span id={`counter-up-${id}`}>{endNum}</span>
      </h1>
      <p className="text-sm text-white font-normal mt-2">{text}</p>
    </div>
  );
};

export default Countup;
