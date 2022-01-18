import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Blog_Card_Head from "../components/Card/Blog_Card_Head";

import Card_1 from "../components/Card/Card_1";
import Card_2 from "../components/Card/Card_2";
import Card_3 from "../components/Card/Card_3";

const Blog = () => {
  const paths = [
    {
      title: "Blog",
      url: "/blog",
    },
  ];

  return (
    <div>
      <Breadcrumb heading={"Our Blog"} paths={paths} />

      <div className="pt-8">
        {/* This is the hero article aka first article in the "/blog" page */}
        <Blog_Card_Head
          img={"/image/happy_doctor.png"}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At facilisi quam ac pharetra lacus etiam non quis dui ..."
          }
          title={"The most funny patients we ever had "}
          url={"/single"}
        />

        <div className="max-w-[1200px] mx-auto my-8">
          <h1 className="text-[22px] font-medium my-4 text-[#333333] mx-2 lg:mx-0">
            Our recent articles
          </h1>

          {/* 3 different designs */}
          <div className="grid grid-flow-cols xl:grid-cols-3 mx-auto gap-1 justify-items-center md:grid-cols-2">
            <Card_1 />
            <Card_2
              img_url="/image/corona_virus.png"
              heading="New Corona Virus variant is Discovered"
              sub="Viruses are always changing, and that can cause a new variant, or strain, of a virus to form. A variant usually doesn't affect how the virus works lorem Here you can also see the writer . Viruses are always changing, and that can cause a new variant, or strain, of a virus to form. A variant usually doesn't affect how the virus works ......"
            />
            <Card_3
              heading="Why male cats mount on each other ?"
              sub="Male cats and dogs often mount on each other to show dominance over other .Here you can also see the writer . Viruses are always changing, and that can cause a new variant, or strain, of a virus to form. A variant usually doesn't affect how the virus works ... . "
            />
          </div>

          <h1 className="text-[22px] font-medium mt-8 mb-4 text-[#333333] mx-2 lg:mx-0">
            Our articles to fill up the page
          </h1>

          <div className="grid justify-items-center md:grid-cols-2 lg:grid-cols-3">
            <Card_2
              heading="The horrible pain of taking injections"
              sub="When I was a kid , a doctor hold my hand &#38; he injected the injection . It was so painless that It just felt like an ant bite . The doctor was looking like..."
              img_url="/image/taking_injection.png"
              link="/single"
            />

            <Card_2
              heading="Man has been beaten up by his wife for insulting"
              sub="This man was beaten up by last sunday by his wife . Because he didn’t gift his wife a diamond ring . Now, he is complaining about his wife ..."
              img_url="/image/man_beaten.jpg"
            />

            <Card_2
              heading="Why you should not be a doctor"
              sub="Most doctors work more than 40 hours a week. Their work is very stressful because they deal with sick and often frustrated people. They carry a horrible burden on their shoulders"
              img_url="/image/doctors_ignoring.png"
            />

            <Card_2
              heading="What to do in operation theatre"
              sub="What ever you do in the operation theatre . Don't let the doctor touch you . If they touch you ,then you are surely dead . They would put a lot of pressure on you . You should not be in the operation theatre . Just run!!"
              img_url="/image/doctors_discussing.png"
            />

            <Card_2
              heading="What are the effects of over dose"
              sub="Some general symptoms associated with various overdose states include severe chest pain, seizures, severe headaches, difficulty breathing and much much more. The effects of overdose are usually mild and can be treated with a combination of drugs and surgery."
              img_url="/image/tablets.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
