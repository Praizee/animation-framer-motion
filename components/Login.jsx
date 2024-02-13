"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import GradientBg from "/assets/side-left.png";
import Hands from "/assets/handshake-img.png";
import PasswordInput from "./ui/PasswordInput";

const Login = () => {
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

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-8">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative block lg:hidden">
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Partnership for Business Growth
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididun.
              </p>
            </div>

            <form
              action="#"
              className="mt-8 grid grid-cols-6 gap-6 border py-10 px-5 rounded-lg shadow-md md:min-w-[30rem] min-w-max"
            >
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email{" "}
                </label>

                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  className="mt-1 p-2 border w-full rounded-md  bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Password{" "}
                </label>
                <PasswordInput />
              </div>

              <div className="col-span-6 sm:items-center sm:gap-4 space-y-2">
                <button
                  onClick={() => route.push("/")}
                  className="inline-block shrink-0 w-full rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Login
                </button>

                <div className="flex justify-between">
                  <Link
                    href="forgot-password"
                    className="text-gray-700 underline text-sm"
                  >
                    Forgot Password{" "}
                  </Link>
                  <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                    Don't have an account? {""}
                    <Link href="/signup" className="text-gray-700 underline">
                      Signup
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
