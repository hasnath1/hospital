import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Option from "../components/Option/Option";
import QA from "../components/QA/QA_1";
import QA_2 from "../components/QA/QA_2";
import QA_3 from "../components/QA/QA_3";

const FAQ_Page = () => {
  const paths = [
    {
      title: "FAQs",
      url: "/faq",
    },
  ];
  return (
    <>
      <Breadcrumb heading={"Frequently Asked Question"} paths={paths} />

      <div className="max-w-[1200px] mx-auto">
        <Option num={1} />

        <div>
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
        </div>

        <Option num={2} />

        <div>
          <QA_2
            answer={
              "A blast from the past . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper venenatis sagittis molestie imperdiet at . "
            }
            question={"What do you call a cave man's fart ?"}
          />
          <br />
          <QA_2
            question={"Why did the scarecrow keep getting promoted ?"}
            answer={
              "Because he was outstanding in his field . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper venenatis sagittis molestie imperdiet at . "
            }
          />
          <br />
        </div>

        <Option num={3} />

        <div className="mx-auto flex flex-col justify-center items-center mb-12">
          <QA_3
            question={"Is this a custom coded accordion ?"}
            answer={
              "Yes . I didn't use any plugin to make this accordion . This is a custom coded accordion.m ipsum dolor sit amet, consectetur adipiscing elit. Tristique sapien pharetra morbi sollicitudin gravida libero. Id sapien, ultrices rhoncus rhoncus congue posuere lorem blandit.amet, consectetur adipiscing elit. Tristique sapien pharetra morbi sollicitudin gravida libero. Id sapien, ultrices rhoncus rhoncus congue posuere lorem blandit."
            }
            unique_id={"oi2lkjilm32"}
          />
          <div className="my-1" />
          <QA_3
            question={"What do you call a person with no body and no nose ?"}
            answer={
              "No body knows .m ipsum dolor sit amet, consectetur adipiscing elit. Tristique sapien pharetra morbi sollicitudin gravida libero. Id sapien, ultrices rhoncus rhoncus congue posuere lorem blandit.amet, consectetur adipiscing elit. Tristique sapien pharetra morbi sollicitudin gravida libero. Id sapien, ultrices rhoncus rhoncus congue posuere lorem blandit."
            }
            unique_id={"oi234ji32"}
          />
          <div className="my-1" />
          <QA_3
            question={"Is child labour illegal ?"}
            answer={
              "Then why does teachers homework . met, consectetur adipiscing elit. Tristique sapien pharetra morbi sollicitudin gravida libero. Id sapien, ultrices rhoncus rhoncus congue posuere lorem blandit.amet, consectetur adipiscing elit. Tristique sapien pharetra morbi sollicitudin gravida libero. Id sapien, ultrices rhoncus rhoncus congue posuere lorem blandit."
            }
            unique_id={"23lkji4ji32"}
          />

          <div className="my-1" />
          <QA_3
            question={"What do you call a sleeping bull?"}
            answer={
              "A bulldozer . honcus rhoncus congue posuere lorem blandit.amet, consectetur adipiscing elit. Tristique sapien pharetra morbi sollicitudin gravida libero. Id sapien, ultrices rhoncus rhoncus congue posuere lorem blandit."
            }
            unique_id={"oi2ss3kj2"}
          />
        </div>
      </div>
    </>
  );
};

export default FAQ_Page;
