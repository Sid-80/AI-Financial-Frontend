"use client"
import { RootState } from "@/components/Redux/store"
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux"


export default function Page() {
  const router = useRouter();
  const isLoggedIn = useSelector((state:RootState)=>state.auth.isAuth);

  if(!isLoggedIn) return router.push('/');

  return (
    <div>
      Page
    </div>
  )
}
