"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  CustomInput as Input,
  CustomPasswordInput as PasswordInput,
  CustomSelect as Select,
} from "@/lib/AntdComponents";

import GradientBg from "@/assets/png/side-left.png";
import Hands from "@/assets/png/handshake-img.png";
import { BiChevronLeft } from "react-icons/bi";
import InfoIcon from "@/assets/svg/InfoIcon";
import { BsArrowRight } from "react-icons/bs";

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
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block">
            <Image
              alt="Night"
              src={Hands}
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
          <div className="w-full flex flex-col justify-between h-full lg:max-h-screen">
            <div className="md:flex justify-between gap-8">
              <Link href="/" className="hover:underline">
                <span>
                  {" "}
                  <BiChevronLeft className="w-6 h-6 inline-block" />
                </span>
                Return Home
              </Link>
              <span className="block">
                Already a Member? {""}
                <Link
                  href="/"
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

              <div>
                <div className="text-center mt-10 lg:mt-0 space-y-2">
                  <h2 className="text-3xl uppercase font-semibold">
                    CREATE YOUR PURSFI API ACCOUNT
                  </h2>
                  <p className="text-2xl uppercase">
                    SIGN UP and join the partnership{" "}
                  </p>
                </div>
                <form className="mt-12 grid grid-cols-6 gap-5">
                  <div className="col-span-6 sm:col-span-3 flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      First Name
                    </label>

                    <Input
                      type="text"
                      id="FirstName"
                      name="first_name"
                      placeholder="John"
                      required
                      className="p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Last Name
                    </label>

                    <Input
                      type="text"
                      id="LastName"
                      name="last_name"
                      placeholder="Doe"
                      required
                      className="p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Work Email
                    </label>

                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@doe.mail"
                      required
                      className="p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="RegCountry"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Registration Country
                    </label>

                    <Select
                      id="RegCountry"
                      defaultValue=""
                      options={[
                        { value: "", label: "Select an option" },
                        { value: "Nigeria", label: "Nigeria" },
                        { value: "Ghana", label: "Ghana" },
                      ]}
                      className="p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-none"
                    />
                  </div>

                  <div className="col-span-6  flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="BusinessName"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Business Name
                    </label>

                    <Input
                      type="text"
                      id="BusinessName"
                      name="BusinessName"
                      required
                      className="p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Enter Password
                    </label>

                    <PasswordInput id="password" />
                  </div>

                  <div className="col-span-6 sm:col-span-3 flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="PasswordConfirmation"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Confirm Password
                    </label>

                    <PasswordInput id="PasswordConfirmation" />
                  </div>

                  <div className="col-span-6  flex flex-col items-start justify-start gap-[0.3rem]">
                    <label
                      htmlFor="APIusage"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      How do you want to use Pursfi Open API
                    </label>

                    <Select
                      id="APIusage"
                      defaultValue=""
                      options={[
                        { value: "", label: "Select an option" },
                        { value: "Business", label: "Business" },
                        { value: "Personal", label: "Personal" },
                      ]}
                      className="p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-none"
                    />
                  </div>

                  {/* <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <Input
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
                      onClick={() => route.push("/")}
                      className="flex justify-between  w-full  bg-black px-12 text-left py-6 text-md font-medium text-white focus:outline-none"
                    >
                      Create an account
                      <span>
                        {" "}
                        <BsArrowRight className="h-5 w-5" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* footer */}
            <div className="md:flex justify-between gap-8 text-[#9E9E9E] space-y-2 md:space-y-0">
              <p className="text-sm">
                Copyright 2021 - 2022 PursFI Inc. All rights Reserved
              </p>

              <Link href="/" className=" text-sm font-medium flex gap-2">
                <InfoIcon />
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
