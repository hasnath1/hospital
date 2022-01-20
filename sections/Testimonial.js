import Heading from "../components/Heading/Heading";
import Option from "../components/More_Option_link/More_Option";
import Testimonial from "../components/Testimonial/Testimonial_1";

const Testimonials = () => {
  return (
    <section className="pt-14 pb-20">
      <Heading
        heading={"What our patients say "}
        sub={
          "Here are some of the reviews of our patients . Our patients are pleased with our services and care ."
        }
      />

      <br />
      <Option link={"/testimonials"} />
      <br />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center items-center max-w-[1200px] mx-auto">
        <Testimonial
          review={
            "This is the best organization for health care . They are very kind and friendly . Even the nurses and stuffs are very friendly and kind ."
          }
          name={"Hasnath Abdullah"}
        />

        <Testimonial
          review={
            "Everyone at this office is patient-minded in that the patient always comes first. Dr. Balch takes the time with his patients & ensures they understand the treatment plan, & always allows time to answer any questions his patient may have. Everyone is kind and tends to patients' needs quickly. Highly recommend this office to those with orthopedic needs"
          }
          name={"Debra M. Smith"}
        />
        <Testimonial
          review={
            "SCOI is top-notch in every way! Always professional and personable! I of these professionals. I have been a patient at SCOI for ten years. I wouldn’t go anywhere else"
          }
          name={"Awabin Islam"}
        />
      </div>
    </section>
  );
};

export default Testimonials;
