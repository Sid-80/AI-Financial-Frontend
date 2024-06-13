"use client";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-[#1A1A1A] hidden p-6 sm:flex flex-col items-center justify-start gap-10">
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
  );
}
