import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Option from "../components/Option/Option";
import Testimonial_1 from "../components/Testimonial/Testimonial_1";
import Testimonial_2 from "../components/Testimonial/Testimonial_2";
import Testimonial_3 from "../components/Testimonial/Testimonial_3";

const Testimonials = () => {
  const paths = [
    {
      title: "Testimonials",
      url: "/testimonials",
    },
  ];
  return (
    <div>
      <Breadcrumb heading={"Testimonial Sections"} paths={paths} />

      <div className="">
        <Option num={1} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center items-center max-w-[1200px] mx-auto">
          <Testimonial_1
            review={
              "This is the best organization for health care . They are very kind and friendly . Even the nurses and stuffs are very friendly and kind ."
            }
            name={"Hasnath Abdullah"}
          />

          <Testimonial_1
            review={
              "Everyone at this office is patient-minded in that the patient always comes first. Dr. Balch takes the time with his patients & ensures they understand the treatment plan, & always allows time to answer any questions his patient may have. Everyone is kind and tends to patients' needs quickly. Highly recommend this office to those with orthopedic needs"
            }
            name={"Debra M. Smith"}
          />
          <Testimonial_1
            review={
              "SCOI is top-notch in every way! Always professional and personable! I of these professionals. I have been a patient at SCOI for ten years. I wouldn’t go anywhere else"
            }
            name={"Awabin Islam"}
          />
        </div>

        <Option num={2} />

        <div className="max-w-[830px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center gap-4">
          <Testimonial_2
            img={"/image/old_man_showing_muscles.png"}
            name={"Donald Duck"}
            occupation={"President of Cartoon"}
            review={`What's the worst thing about ancient history class? The teachers tend to Babylon.
What kind of music do planets listen to? Nep-tunes.`}
          />
          <Testimonial_2
            img={"/image/fake_hulk.png"}
            review={
              "What kind of pants do ghosts wear? Boo jeans.e mauris congue sit tempor, odio. Phasellus risus amet ac quam enim. Bibendum "
            }
            name={"Mr. Fake Hulk"}
            occupation={"CEO of Idiots"}
          />
          <Testimonial_2
            img={"/image/mr_yellow.png"}
            review={
              "How does the moon cut his hair ? Eclipse it . I asked my dog what's two minus two. He said nothing . My dog is very smart ."
            }
            name={"Mr. Yello"}
            occupation={"CEO of Yellow"}
          />
        </div>

        <Option num={3} />

        <div className="flex justify-center items-center mb-16 mx-4">
          <Testimonial_3
            img={"/image/man_face.png"}
            name={"Guillermo Rauch"}
            review={`This is the most simple looking testimonial design . I could have ever thought of  . If you like this , you can use it . “Dad, can you put my shoes on?" "No, I don't think they'll fit me.". This graveyard looks overcrowded. People must be dying to get in. If you like this design please write a comment .`}
            second_line={"Thanks ,guys!"}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
