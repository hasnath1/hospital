import Input from "../components/Input/Input";
import Navbar from "../components/Header/Navbar";
import Link from "next/link";
import Image from "next/image";
import facebook from "../public/icons/fb_color.svg";
import google from "../public/icons/google.svg";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="my-12">
        <form
          className="rounded-[5px] py-10 px-14 max-w-[540px] mx-auto border"
          onSubmit={e => e.preventDefault()}
        >
          <div className="text-center">
            <h1 className="text-4xl text-[#000000] font-bold">
              Log in for <span className="text-[#4879FF]">Medics</span>
            </h1>
            <p className="text-sm text-[#444444] mt-2 mb-6">
              Connect with the best doctors and nurses
            </p>
          </div>

          <Input
            name={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
          />
          <Input name={"Password"} type={"password"} placeholder={"Password"} />

          <Link href={"/forget"} passHref>
            <p className={"text-sm font-semibold text-[#4879FF] mb-4 "}>
              Forgot Password ?
            </p>
          </Link>

          <button className="font-semibold text-lg block bg-[#1353FF] text-white w-full rounded-[5px] py-4 hover:bg-[#4274ff]">
            Log In
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
              Don’t have an account ?
              <Link href={"/sign"} passHref>
                <span className="font-medium text-[#1353FF] cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
