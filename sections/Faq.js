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

      <More_Option link={"faq"} />

      <div className="max-w-[1200px] mx-auto mt-6 grid gap-y-4 grid-cols-1 px-2 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-8">
        <QA
          q={"Why are there no old women in heaven?"}
          a={
            " Because Allah will make them young before they get there. Prophet Muhammad(pbuh) used to joke . But it should be in manners.Lorem ipsum dolor sit amet, Loamet"
          }
        />
        <QA
          q={"Why do ducks have feathers?"}
          a={
            "To cover their butt quacks ! .Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
        <QA
          q={"Why two fishes are fighting in water? "}
          a={
            "Because the british went there and made dispute . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
        <QA
          q={"Why is Peter Pan always flying ?"}
          a={
            "Because he Neverlands . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu..Lorem ipsum dolor sit amet, consectetur"
          }
        />
        <QA
          q={"Why men laugh at their wedding ?"}
          a={
            "Because it is their last laugh in their life . ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
        <QA
          q={"Do all muslims have to wear a beard?"}
          a={
            "Actually,No ! Not the girls . ipsum dolor sit amet, consectetur adipiscing elit. Eleifend nisi, rhoncus urna elementum proin vitae arcu."
          }
        />
      </div>
    </section>
  );
};

export default FAQ;
