import Speciality from "../sections/Speciality";
import Article from "../sections/Article";
import FAQ from "../sections/Faq";
import Doctors from "../sections/Doctors";
import Numbers from "../sections/Numbers";
import Head from "next/head";
import Hero from "../sections/Hero";

const Home = () => {
  return (
    <>
      <Head>
        <title>Medics - Best Hospital in the World</title>
      </Head>

      <Hero />
      <Speciality />
      <Doctors />
      <Numbers />
      <Article />
      <FAQ />
    </>
  );
};

export default Home;
