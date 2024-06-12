import React from "react";
import Logo from "../Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#1A1A1A] w-full ">
      <div className="p-10 flex items-center h-full justify-around">
        <div className="flex items-start justify-start gap-8">
          <Logo />
          <div className="flex text-gray-400 flex-col gap-2">
            <h1 className="font-bold text-white ">Quick Links</h1>
            <h2>Home</h2>
            <h2>Features</h2>
            <h2>About</h2>
            <h2>Team</h2>
          </div>
        </div>
        <div className=" flex flex-col items-center h-full justify-between">
          <Link href={"/dashboard"} className="link-button-bright">
            Get Started
          </Link>
          <div className="flex items-center justify-center p-5">
            <Link className="link-button-dark" href={"/login"}>
              Signin
            </Link>
            <Link className="link-button-dark" href={"/register"}>
              Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
