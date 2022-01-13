import Navbar from "../components/Header/Navbar";
import Speciality from "../sections/Speciality";
import Article from "../sections/Article";
import FAQ from "../sections/Faq";
import Doctors from "../sections/Doctors";
import Doctor from "../components/Doctor/Doctor_2";

export default function Home() {
  return (
    <>
      <Navbar />
      <Speciality />
      <Doctors />
      <Article />
      <FAQ />
      <br /> <br /> <br />
      <Doctor
        name={"Hasnath Abdullah"}
        occupation={"Neurologist"}
        img_url={"/image/doctors/doctor_1.png"}
        fb={"#"}
        twitter={"#"}
        instagram={"#"}
        info={
          "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment without consulting your doctor. Doctor Paige will be ..."
        }
      />
    </>
  );
}
