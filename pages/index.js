import Speciality from "../sections/Speciality";
import Article from "../sections/Article";
import FAQ from "../sections/Faq";
import Doctors from "../sections/Doctors";
import Numbers from "../sections/Numbers";
import Head from "next/head";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Form from "../sections/Form";

const Home = () => {
  return (
    <>
      <Head>
        <title>Medics - Best Hospital in the World</title>
        {/* // eslint-disable-next-line @next/next/no-sync-scripts */}
      </Head>

      <Hero />
      <About />
      <Speciality />
      <Doctors />
      <Numbers />
      <Article />
      <FAQ />
      <Form />
    </>
  );
};

export default Home;
