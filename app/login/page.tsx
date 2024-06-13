"use client";
import * as React from "react";
import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUserSchema } from "../../components/Validations/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "@/types";
import { useLogin } from "@/lib/React-query/Mutation";
import { RootState } from "@/components/Redux/store";
import { logIn } from "@/components/Redux/Auth/auth-slice";
export default function Page() {
  const [formData, setFormData] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const [errors, setErrors] = useState<any[]>([]);
  const isLoggedIn = useSelector((state:RootState)=>state.auth.isAuth);
  const { mutateAsync: userLogin, isPending: loadingResponse } = useLogin();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await userLogin(formData);

      if (result?.status === 200) {
        const { _id, email } = result.data.user;
        const { accessToken, refreshToken } = result.data;
        dispatch(
          logIn({ id: _id, email, refreshToken, accessToken })
        );
        router.push("/dashboard");
      } else {
        console.log("Invalid User Credentials");
      }
    } catch (error) {
      console.log("Please try again later!");
      console.error("Error Login User:", error);
    }
  };


  if(isLoggedIn) return router.push('/dashboard')

  return (
    <Card className="bg-[#1F1F1F] border-0 w-full flex flex-col md:flex-row max-w-lg md:max-w-3xl lg:max-w-4xl absolute shadow-xl rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto min-h-[30vh] md:min-h-[63vh] lg:min-h-[75vh]">
  <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center flex-col text-center p-4 md:p-6 rounded-b-lg md:rounded-bl-none md:rounded-l-lg min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
    <CardHeader className="w-full ">
      <CardTitle className="block md:absolute text-left top-14 md:top-[3.5rem] tracking-tight w-full md:w-60 text-2xl text-white font-bold">
        Welcome Back!
      </CardTitle>
      <CardDescription className="text-sm md:absolute text-left top-28 md:top-[7rem] w-full md:w-64 text-white leading-5 tracking-wide my-6 font-light">
        Sign In To Plan Your Financial Goal
      </CardDescription>
      <CardFooter className="absolute hidden md:block left-4 bottom-1 w-80 h-80">
        <Image alt="" width={1000} height={1000} src="/bg.svg" />
      </CardFooter>
    </CardHeader>
  </div>
  <div className="w-full md:w-1/2 lg:w-[45%] md:h-[58vh] lg:h-[70vh] lg:absolute md:absolute md:top-4 md:right-4 lg:right-4 lg:top-4 bg-white rounded justify-center p-4 md:p-6 flex flex-col items-center">
    <CardContent className="w-full">
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full items-center gap-4 justify-center flex flex-col">
          <h1 className="block text-2xl text-[#141E30] font-bold">Sign In</h1>
          <div className="flex flex-col space-y-1.5 w-full">
            <Label htmlFor="email">Email</Label>
            <Input id="email" className="w-full" value={formData.email} onChange={handleChange} />
            <div className="mt-1 text-xs text-red-500">
              {errors.find((error) => error.for === "email")?.message}
            </div>
          </div>
          <div className="flex flex-col space-y-1.5 w-full">
            <Label htmlFor="password">Password</Label>
            <Input id="password" className="w-full" value={formData.password} onChange={handleChange} />
            <div className="text-[0.55rem] text-gray-500 w-full">
              <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>
            </div>
            <div className="mt-1 text-xs text-red-500">
              {errors.find((error) => error.for === "password")?.message}
            </div>
          </div>
        </div>
        <CardFooter className="flex flex-col items-center justify-center gap-1 mt-4">
          <Button type="submit">Sign In</Button>
          <p className="text-xs">
            Create account <Link className="text-blue-500" href="./register">Sign Up</Link>
          </p>
        </CardFooter>
      </form>
    </CardContent>
  </div>
</Card>

  );
}
