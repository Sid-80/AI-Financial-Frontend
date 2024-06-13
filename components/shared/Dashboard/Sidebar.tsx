"use client";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <Sheet key="left" >
        <SheetTrigger className="absolute top-4 left-4" asChild><Image
          className="w-6 h-6 sm:hidden"
          src={"/svg/burger.svg"}
          width={10}
          height={10}
          alt=""
        /></SheetTrigger>
        <SheetContent side="left" className="bg-[#1A1A1A] border-none w-[42%] p-6 flex flex-col items-center justify-start gap-10">
        <Logo />
          <div className="flex flex-col gap-2">
          <Button
            className={`${pathname === "/dashboard" ? "" : "bg-transparent"}`}
          >
            Dashboard
          </Button>
          <Button
            className={`${pathname === "/dashboard/bot" ? "" : "bg-transparent"}`}
          >
            Chatbot
          </Button>
        </div>
          {/* <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter> */}
        </SheetContent>
      </Sheet>

      <div className="bg-[#1A1A1A] p-6 lg:flex hidden flex-col items-center justify-start gap-10">
        <Logo />
        <div className="flex flex-col gap-2">
          <Button
            className={`${pathname === "/dashboard" ? "" : "bg-transparent"}`}
          >
            Dashboard
          </Button>
          <Button
            className={`${pathname === "/dashboard/bot" ? "" : "bg-transparent"}`}
          >
            Chatbot
          </Button>
        </div>
      </div>
    </>
  );
}
