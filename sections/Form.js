import { useState } from "react";
import Heading from "../components/Heading/Heading";
import DatePicker from "react-datepicker";

/**
 ******************************************
 * I didn't write a separate Input component in another file,
 * because there is already one with the same name .
 * That is used in "Login" & "Sign Up" page .
 ******************************************
 */

const Input = ({ id, label, type, placeholder }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium text-[#555555] mb-2">
        {label}
      </label>
      <input
        className="border border-[#555555] p-4 outline-none rounded-[5px] w-full"
        type={type}
        placeholder={placeholder}
        id={id}
      />
    </div>
  );
};

const FormDatePicker = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log("Calendar closed");
  const handleCalendarOpen = () => console.log("Calendar opened");

  return (
    <div className="flex flex-col">
      <label htmlFor="datepicker" className="font-medium text-[#555555] mb-2">
        Appointment Date
      </label>
      <DatePicker
        selected={date}
        onChange={date => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
        className="border border-[#555555] p-4 outline-none rounded-[5px] w-full"
        closeOnScroll
        id="datepicker"
      />
    </div>
  );
};

const Form = () => {
  const [isFetching, setIsFetching] = useState(false);

  return (
    <section className="my-16">
      <Heading
        heading={"Make an appointment"}
        sub={
          "In oder to make an appointment , you have to fill the form . Please kindly fill in the form . "
        }
      />

      <form
        onSubmit={e => e.preventDefault()}
        className="max-w-[945px] mx-auto mt-8 px-1 md:px-0"
      >
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-4">
          <Input
            placeholder={"First Name"}
            label={"First Name"}
            type={"text"}
            id={"firstName"}
          />

          <Input
            placeholder={"Second Name"}
            label={"Second Name"}
            type={"text"}
            id={"secondName"}
          />

          <Input
            placeholder={"Phone"}
            label={"Phone"}
            type={"tel"}
            id={"phone"}
          />

          <Input
            placeholder={"Your email"}
            label={"Email"}
            type={"Email"}
            id={"email"}
          />

          <FormDatePicker />

          <div className="flex flex-col">
            <label htmlFor="gender" className="font-medium text-[#555555] mb-2">
              Gender
            </label>

            <select
              name="gender"
              id="gender"
              className="border border-[#555555] bg-white p-4 outline-none rounded-[5px] w-full"
            >
              <option value="gender">Select Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#4E7EFF] h-14 px-6 rounded-[5px] mt-8"
          onClick={() => setIsFetching(state => !state)}
        >
          {isFetching ? (
            <div className="flex text-white font-medium items-center justify-between">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Loading...</span>
            </div>
          ) : (
            <div className="text-white font-medium flex justify-center items-center">
              <span>Request Appointment</span>
            </div>
          )}
        </button>
      </form>
    </section>
  );
};

export default Form;
