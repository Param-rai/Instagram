import { useState } from "react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const Auth = () => {
  const [variant, setVariant] = useState("login");
  const [formData, setFormData] = useState(null);

  variant === "signup"
    ? (document.title = `Sign Up - Instagram`)
    : (document.title = `Instagram`);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const url =
      variant === "signup"
        ? "http://localhost:5000/auth/register"
        : "http://localhost:5000/auth/login";

    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  }

  return (
    <div
      className={`auth gap-0 ${
        variant === "signup"
          ? "flex flex-col"
          : "grid grid-cols-1 md:grid-cols-2"
      }`}
    >
      {variant !== "signup" && (
        <div className={`hidden md:block auth__left relative`}>
          <img
            src="/img/Phone.png"
            alt="instagramPhoneImage"
            className="float-right h-[90%] "
          />
        </div>
      )}

      <div
        className={`auth__right flex flex-col gap-4 justify-center p-8 w-full max-w-md text-center m-auto`}
      >
        <div className="auth__right__upper flex flex-col gap-4 justify-center items-center border border-gray-300 p-4 rounded-sm">
          <img
            src="https://www.bananaip.com/wp-content/uploads/2016/11/Instagram_logo.svg_.png"
            alt=""
            className="w-[150px] sm:w-[200px]"
          />

          <p className="text-gray-600 font-semibold text-xl">
            Sign up to see photos and videos from your friends.
          </p>

          {variant === "signup" && (
            <>
              <button className="bg-blue-500 text-white font-semibold cursor-pointer w-[85%] rounded-md py-2">
                Log in with Facebook
              </button>
              <div className="or__line flex items-center gap-2 text-gray-600">
                <span className="block h-[1px] w-[120px] bg-gray-300"></span>
                <span className="px-3">OR</span>
                <span className="block h-[1px] w-[120px] bg-gray-300"></span>
              </div>
            </>
          )}

          <form className="flex flex-col gap-4 my-4 w-[85%]">
            <input
              type="text"
              name="phoneEmailOrUsername"
              value={formData?.phoneEmaillOrUsername}
              onChange={handleChange}
              placeholder={`Phone number ${
                variant === "login" ? ", username" : ""
              } or email address `}
              required
              className="placeholder:text-slate-500 placeholder:text-[13px] focus:outline-none border border-gray-300 focus:border-gray-500 rounded-sm py-2 px-2 w-full"
            />
            {variant === "signup" && (
              <input
                type="text"
                name="fullname"
                value={formData?.fullname}
                onChange={handleChange}
                placeholder="Fullname"
                required
                className="placeholder:text-slate-500 placeholder:text-[13px] focus:outline-none border border-gray-300 focus:border-gray-500 rounded-sm py-2 px-2 w-full"
              />
            )}
            {variant === "signup" && (
              <input
                type="text"
                name="username"
                value={formData?.username}
                onChange={handleChange}
                placeholder="username"
                required
                className="placeholder:text-slate-500 placeholder:text-[13px] focus:outline-none border border-gray-300 focus:border-gray-500 rounded-sm py-2 px-2 w-full"
              />
            )}
            <input
              type="password"
              name="password"
              value={formData?.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="placeholder:text-slate-500 placeholder:text-[13px] focus:outline-none border border-gray-300 focus:border-gray-500 rounded-sm py-2 px-2 w-full"
            />

            <button
              className="bg-blue-500 p-2 rounded-lg text-white font-bold"
              onClick={handleSubmit}
            >
              {variant === "signup" ? "Sign up" : "Log in"}
            </button>
            <button className="bg-blue-500 p-2 rounded-lg text-white font-bold">
              <Link to="/">I am Recruiter or Login as Guest</Link>
            </button>
          </form>

          {variant === "login" ? (
            <div className="or__line flex items-center gap-2 text-gray-600">
              <span className="block h-[1px] w-[120px] bg-gray-300"></span>
              <span className="px-3">OR</span>
              <span className="block h-[1px] w-[120px] bg-gray-300"></span>
            </div>
          ) : (
            <span className="text-[13px] font-thin text-gray-500 w-[85%]">
              People who use our service may have uploaded your contact
              information to Instagram.{" "}
              <span className="text-blue-900 cursor-pointer">Learn more</span>
            </span>
          )}

          {variant === "login" ? (
            <div className="actions">
              <div className="font-bold text-[#385185] cursor-pointer">
                Log in with Facebook
              </div>
              <div
                className="font-thin text-[#385185] text-[13px] my-5 cursor-pointer
            "
              >
                Forgotten your password ?
              </div>
            </div>
          ) : (
            <span className="text-[13px] font-thin text-gray-500 w-[85%] ">
              By signing up, you agree to our{" "}
              <span className="text-blue-900 cursor-pointer">Terms</span>.{" "}
              <span className="text-blue-900 cursor-pointer">
                Privacy Policy
              </span>{" "}
              and{" "}
              <span className="text-blue-900 cursor-pointer">
                Cookies Policy.
              </span>
            </span>
          )}
        </div>

        <div className="auth__right__bottom border border-gray-300 py-6">
          <span>
            {variant === "login"
              ? `Didn't have account ?`
              : "Already Have an account ?"}
            <span
              className="font-bold text-blue-400 cursor-pointer"
              onClick={() => {
                setVariant(variant === "signup" ? "login" : "signup");
              }}
            >
              {variant === "login" ? " Sign up" : " Log in"}
            </span>
          </span>
        </div>

        <div className="auth__get__app">
          <span>Get the App</span>
          <div className="auth__get__app__images flex flex-wrap gap-4 my-4 justify-center">
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="googlePay"
              width="110px"
              className="cursor-pointer"
            />
            <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="micrsoft"
              width="110px"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
