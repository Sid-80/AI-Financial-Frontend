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
import { createUserSchema } from "../formValidation";
// import { useSelector } from "react-redux";
// import { RootState } from "@/Redux/store";
interface USER{
  firstName:string;
  lastName:string;
  phoneNumber:string;
  email:string;
  password:string;
}
export default function Page() {
  const [formData, setFormData] = useState<USER>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const [errors, setErrors] = useState<any[]>([]);
  // const { mutateAsync: newUser, isPending: loadingResponse } = useSignIn();
  // const isLoggedIn = useSelector((state:RootState)=>state.auth.isAuth);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = createUserSchema.safeParse({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
      });

      if (!response.success) {
        console.log("zod")
        let errArr: any[] = [];
        const { errors: err } = response.error;
        for (var i = 0; i < err.length; i++) {
          errArr.push({ for: err[i].path[0], message: err[i].message });
        }
        console.log(errArr[0].message);
        setErrors(errArr);
      }else{
        try {
          // const result = await newUser(formData);

          // if(result?.status === 201){
          //   router.push('/login')
          // }
          console.log(formData)

        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }

    } catch (error) {
      console.error(error);
    }
  };




  return (
    <Card className="bg-[#1F1F1F] w-full flex flex-col md:flex-row max-w-lg md:max-w-3xl lg:max-w-4xl absolute shadow-xl rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto min-h-[30vh] md:min-h-[63vh] lg:min-h-[75vh] ">
      <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center flex-col text-center p-4 md:p-6 rounded-b-lg md:rounded-bl-none md:rounded-l-lg min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
        <CardHeader className="w-full ">
          <CardTitle className="block md:absolute text-left top-14 md:top-[3.5rem] tracking-tight w-full md:w-60 text-2xl text-white font-bold">
            Plan Your Financial Goal with us
          </CardTitle>
          <CardDescription className="text-sm md:absolute text-left top-28 md:top-[7rem] w-full md:w-64 text-white leading-5 tracking-wide my-6 font-light">
            To keep connected with us please login with your personal info
          </CardDescription>
          <CardFooter className="absolute hidden md:block left-4 bottom-1 w-80 h-80">
            <Image
              alt="" width={1000} height={1000}
              src="/bg.svg"
            />
          </CardFooter>
        </CardHeader>
      </div>
      <div className="w-full md:w-1/2 lg:w-[45%] md:h-[58vh] lg:h-[70vh] lg:absolute md:absolute md:top-4 md:right-4 lg:right-4 lg:top-4 bg-white rounded p-4 md:p-6 flex flex-col items-center">
        <CardContent className=" ">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full items-center gap-4 justify-center flex flex-col">
              <h1 className="block text-2xl text-[#141E30] font-bold">
                Sign Up Now
              </h1>
              <div className="grid grid-cols-2 gap-4">

                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="name">First Name</Label>

                  <Input
                    id="firstName"
                    className="w-full"
                  value={formData.firstName}
                  onChange={handleChange}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.find((error) => error.for === "name")?.message}
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5 w-full">
                  <Label htmlFor="name">Last Name</Label>

                  <Input
                    id="lastName"
                    className="w-full"
                  value={formData.lastName}
                  onChange={handleChange}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.find((error) => error.for === "name")?.message}
                  </div>
                </div>
                </div>
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
                  <Label htmlFor="number">Phone Number</Label>

                  <Input
                    id="phoneNumber"
                    className="w-full"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  />
                  <div className="mt-1 text-xs text-red-500">
                    {errors.find((error) => error.for === "password")?.message}
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
                    <p>Use 8 or more character with a mix of letters, numbers & symbols</p>
                  </div>
                  <div className="mt-1 text-xs text-red-500">
                    {errors.find((error) => error.for === "password")?.message}
                  </div>
                </div>
              </div>
              <CardFooter className="flex flex-col items-center justify-center gap-1 mt-4">
                <Button type="submit">Sign Up</Button>
                <p className="text-xs" >Already have an account? <Link className="text-blue-500" href="./login" >Log in</Link> </p>
              </CardFooter>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}
