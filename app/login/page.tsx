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
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { loginUserSchema } from "../formValidation";
import { useLogin } from "@/lib/React-query/Mutation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/Redux/store";
import { logIn } from "@/components/Redux/Auth/auth-slice";
interface LoginUser {
  email: string;
  password: string;
}
export default function Page() {
  const [formData, setFormData] = useState<LoginUser>({
    email: "",
    password: "",
  });

  const { mutateAsync: loginMutation, isPending: loadingResponse } = useLogin();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();
  const router = useRouter();
  const [errors, setErrors] = useState<any[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  if (isLoggedIn) return router.push("/dashboard");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = loginUserSchema.safeParse({
        email: formData.email,
        password: formData.password,
      });

      if (!response.success) {
        let errArr: any[] = [];
        const { errors: err } = response.error;
        for (var i = 0; i < err.length; i++) {
          errArr.push({ for: err[i].path[0], message: err[i].message });
        }
        setErrors(errArr);
      } else {
        try {
          const res = await loginMutation(formData);
          dispatch(
            logIn({
              accessToken: res?.data.accessToken,
              refreshToken: res?.data.refreshToken,
              id: res?.data.user._id,
              email: res?.data.user.email,
            })
          );
          router.push("/dashboard");
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className=" bg-[#1F1F1F]   w-full flex flex-col md:flex-row max-w-lg md:max-w-3xl lg:max-w-4xl absolute  shadow-xl rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto min-h-[30vh] md:min-h-[63vh] lg:min-h-[75vh] ">
      <div className="w-full md:w-1/2 lg:w-1/3  flex items-center justify-center flex-col text-center p-4 md:p-6 rounded-b-lg md:rounded-bl-none md:rounded-l-lg min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
        <CardHeader className="w-full ">
          <CardTitle className="block text-left absolute top-[3.5rem] tracking-tight w-60 text-2xl text-white font-bold">
            Welcome Back !
          </CardTitle>
          <CardDescription className="text-sm text-left absolute top-[7rem] w-64 text-white leading-5 tracking-wide my-6 mt-[25px] mb-[35px] font-light">
            Sign In To Plan Your Financial Goal
          </CardDescription>
          <CardFooter className="absolute left-4 bottom-1 w-80 h-80  ">
            <Image alt="" width={1000} height={1000} src="/bg.svg" />
          </CardFooter>
        </CardHeader>
      </div>
      <div className=" lg:w-96 absolute h-[32.5rem] w-96 right-5 top-5 bottom-5 bg-white rounded  p-4 md:p-6 flex flex-col items-center">
        <CardContent className=" ">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full items-center gap-4 justify-center flex flex-col">
              <h1 className="block text-2xl text-[#141E30] font-bold">
                Sign In
              </h1>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  className="w-full"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="mt-1 text-xs text-red-500">
                  {errors.find((error) => error.for === "email")?.message}
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Label htmlFor="password">Password</Label>

                <Input
                  id="password"
                  className="w-full"
                  value={formData.password}
                  onChange={handleChange}
                />

                <div className=" text-[0.55rem] text-gray-500 w-80">
                  <p>
                    Use 8 or more character with a mix of letters, numbers &
                    symbols
                  </p>
                </div>
                <div className="mt-1 text-xs text-red-500">
                  {errors.find((error) => error.for === "password")?.message}
                </div>
              </div>
            </div>
            <CardFooter className="flex flex-col items-center justify-center gap-1 mt-4 ">
              <p className="text-xs">
                Create account
                <Link className="text-blue-500" href="./register">
                  Sign Up
                </Link>
              </p>
              <Button type="submit">Sign In</Button>
            </CardFooter>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
