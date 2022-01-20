import Speciality from "../sections/Speciality";
import Article from "../sections/Article";
import FAQ from "../sections/Faq";
import Doctors from "../sections/Doctors";
import Numbers from "../sections/Numbers";
import Head from "next/head";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Form from "../sections/Form";
import Testimonial from "../components/Testimonial/Testimonial_3";

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
      <Testimonial
        review={`This is the most simple looking testimonial design . I could have ever thought of  . If you like this , you can use it . “Dad, can you put my shoes on?" "No, I don't think they'll fit me.". This graveyard looks overcrowded. People must be dying to get in. If you like this design please write a comment .`}
        second_line={"Thanks, guys!"}
        name="Donald Duck"
        occupation="Professional Gymnast"
        img={"/image/man_face.png"}
      />
    </>
  );
};

export default Home;
