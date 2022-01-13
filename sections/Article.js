import Heading from "../components/Heading/Heading";
import Card from "../components/Card/Card_2";
import More_Option from "../components/More_Option_link/More_Option";

const Article = () => {
  return (
    <section className="py-16 bg-[#EFF6FF]">
      <Heading
        heading={"Our Articles"}
        sub={
          "Here are some of the reviews of our patients . Our patients are pleased with our services and care ."
        }
      />

      <More_Option link={"/blog"} />

      <div className="grid grid-cols-1 mt-4 justify-items-center md:grid-cols-2 xl:grid-cols-3 max-w-[1200px] mx-auto">
        <Card img_url={"/image/injured_man.jpg"} />
        <Card img_url={"/image/man_beaten.jpg"} />
        <Card img_url={"/image/corona_virus.png"} />
      </div>
    </section>
  );
};

export default Article;
