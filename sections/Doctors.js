import Heading from "../components/Heading/Heading";
import More_Option from "../components/More_Option_link/More_Option";
import Doctor from "../components/Doctor/Doctor_1";

const Doctors = () => {
  return (
    <section className="py-12">
      <Heading
        heading={"Our Doctors"}
        sub={
          "Our doctors are one of the best doctors all over the world . Here are some of our doctors ."
        }
      />

      <More_Option link={"/doctors"} />
      <div className="max-w-[1000px] mx-auto">
        <Doctor
          name={"Khalid ibn walid"}
          occupation={"Doctor"}
          info={
            "This man with glasses is called a doctor . He is experienced and certified to practice medicine to help maintain or restore physical and mental health. He is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. "
          }
          color={"#EFF6FF"}
          img={"/image/doctors/man_in_suit.png"}
          pictureAlign={"left"}
        />

        <Doctor
          name={"Mansa Musa"}
          occupation={"Director"}
          info={
            "This man with glasses is called a doctor . He is experienced and certified to practice medicine to help maintain or restore physical and mental health. He is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. "
          }
          color={"#FDF2F8"}
          img={"/image/doctors/man_in_blue_suit.png"}
          pictureAlign="right"
        />

        <Doctor
          name={"Omar ibn khattab"}
          occupation={"Founder"}
          info={
            "This idiot was the founder of Medics . But we have kicked him out of the hospital because he does not pay well . He is experienced and certified to practice medicine to help maintain or restore physical and mental health. He is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. "
          }
          color={"#EFF6FF"}
          img={"/image/doctors/man_in_shirt.png"}
          pictureAlign="left"
        />
      </div>
    </section>
  );
};

export default Doctors;
