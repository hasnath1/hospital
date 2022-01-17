import Input from "../components/Input/Input";
import Navbar from "../components/Header/Navbar";
import Link from "next/link";
import Image from "next/image";
import facebook from "../public/icons/fb_color.svg";
import google from "../public/icons/google.svg";
import Footer from "../components/Footer/Footer";

const SignUp = () => {
  return (
    <div className="my-12">
      <form
        className="rounded-[5px] py-10 px-6 md:px-14 max-w-[540px] mx-auto border"
        onSubmit={e => e.preventDefault()}
      >
        <div className="text-center">
          <h1 className="text-4xl text-[#000000] font-bold">
            Sign Up for <span className="text-[#4879FF]">Medics</span>
          </h1>
          <p className="text-sm text-[#444444] mt-2 mb-6">
            Connect with the best doctors and nurses
          </p>
        </div>

        <Input name={"Name"} type={"email"} placeholder={"Name"} />
        <Input name={"Email"} type={"email"} placeholder={"Email"} />
        <Input name={"Password"} type={"password"} placeholder={"Password"} />

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="border-2 border-blue-800"
            id="agreement-checkbox"
          />
          <label
            htmlFor="agreement-checkbox"
            className="text-[12px] text[#555555] ml-2"
          >
            I agree to the
            <Link href={"/terms_conditions"} passHref>
              <span className="text-[#4879FF] cursor-pointer">
                {" "}
                Terms &#38; Conditions
              </span>
            </Link>
          </label>
        </div>

        <button className="font-semibold text-lg block bg-[#1353FF] text-white w-full rounded-[5px] py-4 hover:bg-[#4274ff]">
          Sign Up
        </button>

        {/* Divider */}
        <div className="flex my-6 items-center">
          <div className="border-[0.5px] border-[#aaaaaa] flex-grow h-0"></div>
          <div className="px-2 text-[12px]">OR</div>
          <div className="border-[0.5px] border-[#aaaaaa] flex-grow h-0"></div>
        </div>

        {/* Log in with google and facebook */}

        <div>
          <div className="flex justify-center items-center gap-3 mb-4">
            <Link href={"#"} passHref>
              <div className="w-[60px] h-[60px] rounded-full border border-[#C4C4C4] flex justify-center items-center cursor-pointer">
                <Image
                  src={facebook}
                  priority
                  width={16}
                  height={32}
                  alt="facebook"
                ></Image>
              </div>
            </Link>

            <Link href={"#"} passHref>
              <div className="w-[60px] h-[60px] rounded-full border border-[#C4C4C4] flex justify-center items-center cursor-pointer">
                <Image
                  src={google}
                  priority
                  width={37}
                  height={39}
                  alt="google"
                ></Image>
              </div>
            </Link>
          </div>

          <p className="text-center text-[#777777]">
            Already have an account ?
            <Link href={"/login"} passHref>
              <span className="font-medium text-[#1353FF] cursor-pointer">
                {" "}
                Log in
              </span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
