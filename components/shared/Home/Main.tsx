import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeMain() {
  return (
    <div id="Home" className="w-full sm:px-10 md:px-24 xl:px-32 sm:py-5">
      <div className="flex sm:flex-row flex-col w-full text-white items-center justify-around p-5 sm:py-14">
        <div className="flex p-4 sm:p-0 flex-col text-[30px] sm:text-[50px] md:text-[55px] xl:text-[55px] 2xl:text-[55px] items-center justify-center sm:items-start sm:justify-center w-full">
          <h1 className=" font-bold">Financial Planning</h1>
          <h1 className=" font-bold">
            Made <span className="text-[#4477CE]">EASY</span>
          </h1>
          <div className="gap-0 flex items-center justify-center flex-col sm:flex-none sm:items-start sm:justify-start">
            <p className="sm:text-lg text-base text-gray-400">Trusted by many users!!</p>
            <Link className="link-button-bright mt-2" href={'/dashboard'}>
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-2xl items-center justify-center w-full">
          <Image
            className="rounded-xl sm:w-[450px] sm:h-[400px] xl:w-[550px] xl:h-[500px]"
            src={"/img1.png"}
            height={550}
            width={550}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
