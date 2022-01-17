import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

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

      <div></div>
    </div>
  );
};

export default Doctors;
