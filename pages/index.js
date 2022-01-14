import Navbar from "../components/Header/Navbar";
import Speciality from "../sections/Speciality";
import Article from "../sections/Article";
import FAQ from "../sections/Faq";
import Doctors from "../sections/Doctors";
import Numbers from "../sections/Numbers";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Medics - Best Hospital in the World</title>
      </Head>

      <Navbar />
      <Speciality />
      <Doctors />
      <Numbers />
      <Article />
      <FAQ />
    </>
  );
}
