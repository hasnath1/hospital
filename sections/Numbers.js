import Countup from "../components/CountUp/CountUp";

const Numbers = () => {
  return (
    <div className="bg-[#4E7EFF]">
      <div className="max-w-[1000px] flex justify-between items-center mx-auto py-11">
        <Countup endNum={100} id={"doctors"} text={"Doctors"} />
        <Countup endNum={1000} id={"nurses"} text={"Nurses"} />
        <Countup endNum={5000} id={"beds"} text={"Beds"} />
        <Countup endNum={9000} id={"patients"} text={"Patients per day"} />
      </div>
    </div>
  );
};

export default Numbers;
