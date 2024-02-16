import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GradientBg from "/assets/side-left.png";
import Hands from "/assets/handshake-img.png";
import PasswordInput from "./ui/PasswordInput";

const Signup = () => {
  const route = useRouter();

  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-4">
          <Image
            alt="Night"
            src={GradientBg}
            width={40}
            height={100}
            // src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block">
            <Image
              alt="Night"
              src={Hands}
              //   width={150}
              //   height={150}
              className="h-full w-full object-cover"
            />
            <div className="lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl">
                Partnership for Business Growth
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun.
              </p>
            </div>
          </div>
        </section>

        <main className="w-full max-h-screen px-8 py-6 lg:px-4 lg:py-2  lg:col-span-7 xl:col-span-8">
          {/*  px-8 py-8 sm:px-12 lg:px-16 lg:py-12 */}
          {/* flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-8 */}

          <div className="w-full flex flex-col justify-between gap-5">
            <div className="flex justify-between gap-8">
              <Link href="#" className="hover:underline">
                <span> ← </span> Return Home
              </Link>
              <span>
                Already a Member? {""}
                <Link
                  href="/login"
                  className="text-gray-700 underline font-semibold uppercase"
                >
                  Log in now
                </Link>
              </span>
            </div>

            <div className="max-w-xl lg:max-w-3xl mx-auto">
              <div className="relative block lg:hidden">
                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Partnership for Business Growth
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididun.
                </p>
              </div>

              <div className="text-center mt-10 lg:mt-0 space-y-2">
                <h2 className="text-3xl uppercase font-semibold">
                  CREATE YOUR PURSFI API ACCOUNT
                </h2>
                <p className="text-2xl uppercase">
                  SIGN UP and join the partnership{" "}
                </p>
              </div>
              <form className="mt-12 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    placeholder="John"
                    required
                    className="mt-1 p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    placeholder="Doe"
                    required
                    className="mt-1 p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Work Email
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    placeholder="john@doe.mail"
                    required
                    className="mt-1 p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Registration Country
                  </label>

                  <select
                    id="LastName"
                    name="last_name"
                    required
                    className="mt-1 p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Business Name
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    required
                    className="mt-1 p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Enter Password
                  </label>

                  <PasswordInput />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="PasswordConfirmation"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Confirm Password
                  </label>

                  <PasswordInput />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    How do you want to use Pursfi Open API
                  </label>

                  <select
                    id="LastName"
                    name="last_name"
                    required
                    className="mt-1 p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="Business">Business</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>

                {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    required
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div> */}

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By clicking 'Continue', you acknowledge that you have read
                    and accept the {""}
                    <Link
                      href="#"
                      className="text-gray-700 underline font-medium"
                    >
                      Terms of Service
                    </Link>
                    {""} and {""}
                    <Link
                      href="#"
                      className="text-gray-700 underline font-medium"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>

                <div className="col-span-6 space-y-2 sm:items-center sm:gap-4">
                  <button
                    onClick={() => route.push("/login")}
                    className="flex justify-between  w-full  border border-black bg-black px-12 text-left py-6 text-md font-medium text-white transition hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-black"
                  >
                    Create an account
                    <span> →</span>
                  </button>
                </div>
              </form>
            </div>

            {/* footer */}
            <div className="flex justify-between gap-8 text-[#9E9E9E]">
              <p className="text-sm">
                Copyright 2021 - 2022 PursFI Inc. All rights Reserved
              </p>

              <Link href="/login" className=" text-sm font-medium">
                Need help?
              </Link>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Signup;
