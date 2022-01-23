import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Doctor_1 from "../components/Doctor/Doctor_1";
import Doctor_2 from "../components/Doctor/Doctor_2";
import Doctor_3 from "../components/Doctor/Doctor_3";
import Doctor_4 from "../components/Doctor/Doctor_4";
import Option from "../components/Option/Option";

const Doctors = () => {
  const paths = [
    {
      title: "Doctors",
      url: "/doctors",
    },
  ];

  return (
    <div>
      <Breadcrumb heading={"Doctors"} paths={paths} />

      <div>
        <Option num={1} />

        {/* Default  */}
        <div className="max-w-[1000px] mx-auto">
          <Doctor_1
            name={"James Smith"}
            info={
              "This man with glasses is called a doctor . He is experienced and certified to practice medicine to help maintain or restore physical and mental health. He is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury. He is also responsible for the administration of medication and other treatments. He is a member of the medical profession and is a member of the American Medical Association. He is also a member of the American Academy of Family Physicians."
            }
            color={"#EFF6FF"}
            occupation={"Doctor"}
            img={"/image/doctors/man_in_suit.png"}
          />

          <Doctor_1
            name={"Mansa Musa"}
            info={
              "is an American plastic surgeon and television personality. He is known for his work on The Swan and for co-hosting Botched and its spin-off series Botched by Nature with Paul Nassif. He also appears on The Real Housewives of Orange County with his wife, Heather. In 2015, Dubrow appeared on Good Work, a plastic surgery-themed talk show, together with co-hosts RuPaul and Sandra Vergara. Dubrow also performed the plastic surgery procedures on Bridalplasty, a reality series which premiered in 2011 and featured a group of women who competed in order to win a wedding and transformative plastic surgery procedure."
            }
            color={"#FDF2F8"}
            occupation={"Founder"}
            img={"/image/doctors/man_in_blue_suit.png"}
            pictureAlign="right"
          />
        </div>

        <Option num={2} />

        {/* Card - 1 . I am having a very hard time naming this card . If you have any suggestion , leave a comment in the comment section .*/}
        <div className="mt-12 grid grid-flow-row gap-y-4 justify-items-center items-center md:grid-cols-2 md:gap-4 lg:grid-cols-3 max-w-[1200px] mx-auto">
          <Doctor_2
            img_url={"/image/doctors/doctor_1.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment without consulting your doctor. Doctor Paige will be ..."
            }
            name={"Hasnath Abdullah"}
            occupation={"Cardiologist"}
            link={"/single_doctor"}
          />

          <Doctor_2
            img_url={"/image/doctors/doctor_2.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment without consulting your doctor. Doctor Paige will be ..."
            }
            name={"Khalid Khan"}
            occupation={"Neurologist"}
            link={"/single_doctor"}
          />
          <Doctor_2
            img_url={"/image/doctors/doctor_3.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment without consulting your doctor. Doctor Paige will be ..."
            }
            link={"/single_doctor"}
            name={"Aisha Khan"}
            occupation={"Cardiologist"}
          />
        </div>

        <Option num={3} />
        {/* Card Option - 3 aka Horizontal Card*/}
        <div className="max-w-[1000px] mx-auto mt-12 grid justify-items-center gap-y-4 lg:grid-cols-2 lg:gap-4">
          <Doctor_3
            img_url={"/image/doctors/doctor_4.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment without consulting your doctor. Doctor Paige will be ..."
            }
            name={"Awabin Islam"}
            occupation={"Cardiologist"}
            link={"/single_doctor"}
          />
          <Doctor_3
            img_url={"/image/doctors/doctor_5.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment without consulting your doctor. Doctor Paige will be ..."
            }
            name={"Hasan Mahi"}
            occupation={"Anthropologist"}
            link={"/single_doctor"}
          />
        </div>

        <Option num={4} />
        {/* Option - 4 aka Vertical Card */}
        <div className="max-w-[1200px] mx-auto grid justify-items-center gap-y-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-2 mb-12">
          <Doctor_4
            img_url={"/image/doctors/doctor_1.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment "
            }
            name={"Samiul Islam"}
            occupation={"Neurologist"}
            link={"/single_doctor"}
          />
          <Doctor_4
            img_url={"/image/doctors/doctor_2.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment "
            }
            link={"/single_doctor"}
            name={"Shahriar Abdullah"}
            occupation={"Neurologist"}
          />
          <Doctor_4
            img_url={"/image/doctors/doctor_5.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment "
            }
            link={"/single_doctor"}
            name={"Rakib Khan"}
            occupation={"Neurologist"}
          />
          <Doctor_4
            img_url={"/image/doctors/doctor_4.png"}
            info={
              "A doctor is someone who is qualified in medicine and treats people who are ill . Do continue the treatment "
            }
            link={"/single_doctor"}
            name={"James Smith"}
            occupation={"Neurologist"}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
