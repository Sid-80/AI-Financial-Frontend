"use client";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <Sheet key="left">
        <SheetTrigger className="absolute top-4 left-4" asChild>
          <Image
            className="w-6 h-6 sm:hidden"
            src={"/svg/burger.svg"}
            width={10}
            height={10}
            alt=""
          />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-[#1A1A1A] border-none w-[50%] p-6 flex flex-col items-center justify-start gap-10"
        >
          <Logo />
          <div className="flex flex-col gap-2">
            <Button
              onClick={() => router.push("/dashboard")}
              className={`${
                pathname === "/dashboard" ? "" : "bg-transparent"
              } flex gap-2 items-center justify-start w-[160px]`}
            >
              <Image
                className="w-5 h-5"
                src={"/svg/home.svg"}
                width={10}
                height={10}
                alt=""
              />
              Dashboard
            </Button>
            <Button
              onClick={() => router.push("/dashboard/planning")}
              className={`${
                pathname.includes("/dashboard/planning") ? "" : "bg-transparent"
              } flex gap-2 items-center justify-start`}
            >
              <Image
                className="w-5 h-5 -rotate-45"
                src={"/svg/banknotes.svg"}
                width={10}
                height={10}
                alt=""
              />
              Planning
            </Button>
            <Button
              onClick={() => router.push("/dashboard/goal-planning")}
              className={`${
                pathname === "/dashboard/goal-planning" ? "" : "bg-transparent"
              } flex gap-2 items-center justify-start`}
            >
              <Image
                className="w-5 h-5"
                src={"/svg/bolt.svg"}
                width={10}
                height={10}
                alt=""
              />
              Goal Planning
            </Button>
            <Button
              onClick={() => router.push("/dashboard/assistant")}
              className={`${
                pathname === "/dashboard/assistant" ? "" : "bg-transparent"
              } flex gap-2 items-center justify-start`}
            >
              <Image
                className="w-5 h-5"
                src={"/svg/chat.svg"}
                width={10}
                height={10}
                alt=""
              />
              Assistant
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <div className="bg-[#1A1A1A] p-6 lg:flex hidden flex-col items-center justify-start gap-10">
        <Logo />
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => router.push("/dashboard")}
            className={`${
              pathname === "/dashboard" ? "" : "bg-transparent"
            } flex gap-2 items-center justify-start w-[160px]`}
          >
            <Image
              className="w-6 h-6"
              src={"/svg/home.svg"}
              width={10}
              height={10}
              alt=""
            />
            Dashboard
          </Button>
          <Button
            onClick={() => router.push("/dashboard/planning")}
            className={`${
              pathname.includes("/dashboard/planning") ? "" : "bg-transparent"
            } flex gap-2 items-center justify-start`}
          >
            <Image
              className="w-6 h-6 -rotate-45"
              src={"/svg/banknotes.svg"}
              width={10}
              height={10}
              alt=""
            />
            Planning
          </Button>
          <Button
            onClick={() => router.push("/dashboard/goal-planning")}
            className={`${
              pathname === "/dashboard/goal-planning" ? "" : "bg-transparent"
            } flex gap-2 items-center justify-start`}
          >
            <Image
              className="w-6 h-6"
              src={"/svg/bolt.svg"}
              width={10}
              height={10}
              alt=""
            />
            Goal Planning
          </Button>
          <Button
            onClick={() => router.push("/dashboard/assistant")}
            className={`${
              pathname === "/dashboard/assistant" ? "" : "bg-transparent"
            } flex gap-2 items-center justify-start`}
          >
            <Image
              className="w-6 h-6"
              src={"/svg/chat.svg"}
              width={10}
              height={10}
              alt=""
            />
            Assistant
          </Button>
        </div>
      </div>
    </>
  );
}
