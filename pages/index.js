import Navbar from "../components/Header/Navbar";
import Speciality from "../sections/Speciality";
import Article from "../sections/Article";
import FAQ from "../sections/Faq";
import Doctors from "../sections/Doctors";
import Numbers from "../sections/Numbers";

export default function Home() {
  return (
    <>
      <Navbar />
      <Speciality />
      <Doctors />
      <Numbers />
      <Article />
      <FAQ />
    </>
  );
}
