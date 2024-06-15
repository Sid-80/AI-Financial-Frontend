"use client";
import { logOut } from "@/components/Redux/Auth/auth-slice";
import { RootState } from "@/components/Redux/store";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/lib/React-query/Mutation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const { mutateAsync: useLogoutMutation } = useLogout();
  const _id = useSelector((state: RootState) => state.auth.id);

  const LogoutHandler = () => {
    useLogoutMutation(_id);
    dispatch(logOut());
  };

  return (
    <div className="flex p-2 sm:p-3 lg:p-4 px-4 items-center justify-between">
      <div className="flex gap-1 items-center justify-center">
        <Image
          className="w-6 h-6 sm:hidden"
          src={"/svg/burger.svg"}
          width={10}
          height={10}
          alt=""
        />
        <h1 className="text-white text-[14px] font-semibold sm:text-[20px]">
          {pathname === "/dashboard" && "Dashboard"}
          {(pathname === "/dashboard/planning" || pathname === "/dashboard/planning/create") && "Retirement Planning"}
          {pathname === "/dashboard/goal-planning" && "Goal-based Planning"}
          {pathname === "/dashboard/assistant" && "Personal Assistant"}
        </h1>
      </div>
      <div className="flex gap-2">
        <Button size={"icon"}>
          <Image
            className="w-6 h-6"
            src={"/svg/settings.svg"}
            width={10}
            height={10}
            alt=""
          />
        </Button>
        <Button
          onClick={() => {
            LogoutHandler();
          }}
          size={"icon"}
        >
          <Image
            className="w-6 h-6"
            src={"/svg/logout.svg"}
            width={10}
            height={10}
            alt=""
          />
        </Button>
      </div>
    </div>
  );
}
