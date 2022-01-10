import React from "react";
import Heading from "../components/Heading/Heading";
import C_Speciality from "../components/Speciality/Speciality";

const Speciality = () => {
  return (
    <section className="bg-[#EFF6FF] pt-12 pb-16">
      <div className="max-w-[1200px] mx-auto">
        <Heading
          heading={"Our specialities"}
          sub={
            "Our medical panel consists of over 1300+ doctors from 80+ specialities .  We provide tons of services . "
          }
        />

        <div className="grid grid-cols-2 px-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-10">
          <C_Speciality
            imgUrl={"/image/speciality/pulmonology.png"}
            text={"Pulmonology"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/hepatology.png"}
            text={"Hepatology"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/general_medicine.png"}
            text={"General Medicine"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/cardiology.png"}
            text={"Cardiology"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/nephrology.png"}
            text={"Nephrology"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/neurology.png"}
            text={"Neurology"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/dentisity.png"}
            text={"Dentisity"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/gastroenterology.png"}
            text={"Gastroenterology"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/otolaryngology.png"}
            text={"Otolaryngology"}
          />
          <C_Speciality
            imgUrl={"/image/speciality/gynecology.png"}
            text={"Gynecology"}
          />
          <C_Speciality imgUrl={"/image/speciality/pain.png"} text={"pain"} />
          <C_Speciality
            imgUrl={"/image/speciality/allergy.png"}
            text={"Allergy"}
          />
        </div>
      </div>
    </section>
  );
};

export default Speciality;
