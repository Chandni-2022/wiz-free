"use client"
import * as React from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";
import { Image } from "./Image";
import Link from "next/link";
import '../styles/custom.css';
export const SignUpPage: React.FC = () => {
  return (
    <main className="h-screen fixed flex flex-col md:flex-row lg:flex-row items-center w-full bg-indigo-950 relative ">
      <div className="relative flex w-full md:hidden lg:flex lg:w-1/2 h-screen lg:items-center lg:justify-start">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-[#FFF9EF]  hidden-lg-custom "></div>
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/c620a29220752ac913cfee97b3aff92262f00205b5458015fc6029d7e15e9868?apiKey=415d78a55fd94a108248afe5c238a8ae&"
          alt="Wave login"
          className="object-contain w-full h-full md:h-screen"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[60%] h-[60%] max-w-[300px] md:max-w-[350px]">
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/415d78a55fd94a108248afe5c238a8ae/1697f35c1acef68c11d70943644d60c4d52452d0fa30577381523729dc4d02eb?apiKey=415d78a55fd94a108248afe5c238a8ae&"
              alt="Mascot image"
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
      <section className="md:p-12 lg:p-16 flex flex-col justify-center items-center w-full md:w-full lg:w-1/2 p-5 md:p-16 ">
        <form className="flex flex-col w-full max-w-[520px] md:max-w-[615px]">
          <h1 className="text-5xl font-bold text-white  text-start">Sign Up</h1>
          <div className="mt-10 w-full">
            <InputField label="Name" type="text" placeholder="Enter your name" id="name" />
          </div>
          <div className="mt-8 w-full">
            <InputField label="Email" type="email" placeholder="Enter your email" id="email" />
          </div>
          <div className="mt-8 w-full">
            <InputField label="Password" type="password" placeholder="Enter your password" id="password" />
          </div>
          <div className="mt-8 w-full">
            <InputField label="Confirm Password" type="password" placeholder="Enter your confirm password" id="password" />
          </div>
          <div className="flex flex-col sm:flex-col md:flex-row gap-6 items-center mt-8 justify-start">
          
            <Link href="login" passHref legacyBehavior>
              <a className="flex justify-center md:w-auto w-full">
                <Button variant="primary">Sign-Up</Button>
              </a>
            </Link>
          </div>
          <div className="flex flex-col justify-between mt-20 sm:flex-row md:flex-row items-center sm:flex-col space-y-2">
            <div className="flex flex-col text-center md:text-left space-y-4 md:w-1/2">
              <h2 className="text-2xl font-bold text-white">Existing User?</h2>
              <p className="text-base text-white ">Already have an account?</p>
            </div>
            <Link href="/login" passHref legacyBehavior>
              <a className="w-full flex justify-end md:w-auto md:justify-center md:ml-auto">
                <Button variant="primary">Login</Button>
              </a>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};


