import Heading from "../components/Heading/Heading";
import QA from "../components/QA/QA_1";
import More_Option from "../components/More_Option_link/More_Option";

const FAQ = () => {
  return (
    <section className="py-16">
      <Heading
        heading={"Frequently Asked Questions"}
        sub={
          "Here are some of the most frequently asked questions by our clients and patients . You can read this to know us better."
        }
      />

      <More_Option link={"/faq"} />

      <div className="max-w-[1200px] mx-auto mt-6 grid gap-y-4 grid-cols-1 px-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
        <QA
          question={"Why did the tomato blush?"}
          answer={
            "Because it saw the salad dressing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
        <QA
          question={"Why do ducks have feathers?"}
          answer={
            "To cover their butt quacks ! .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
        <QA
          question={"Why was the skeleton afraid of the storm?"}
          answer={
            "He didn’t have any guts. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
        <QA
          question={"Why is Peter Pan always flying ?"}
          answer={
            "Because he Neverlands . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu..Lorem ipsum dolor sit amet, consectetur"
          }
        />
        <QA
          question={"Why men laugh at their wedding ?"}
          answer={
            "Because it is their last laugh in their life . ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
        <QA
          question={"What did the poop say to the fart?"}
          answer={
            "Wow, you really blow me away! . ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus uurna elementum proin vitae arcu.rna elementum proin vitae arcu."
          }
        />
      </div>
    </section>
  );
};

export default FAQ;
