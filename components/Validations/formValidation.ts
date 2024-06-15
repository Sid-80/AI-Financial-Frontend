import { z } from "zod";

export const createUserSchema = z.object({
  firstname: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .min(1, "Name is required")
    .max(255),
  lastname: z
    .string()
    .regex(/^[a-zA-Z]+$/)
    .min(1, "Name is required")
    .max(255),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(1, "Email is required"),
  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Invalid phone number. Must be a 10-digit number starting with 6, 7, 8, or 9"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain a lowercase letter")
    .regex(/[A-Z]/, "Password must contain a capital letter")
    .regex(/\d/, "Password must contain a number")
    .regex(/[!@#$%^&*]/, "Password must contain a special symbol"),
});

export const assistantSchema = z.object({
  prompt: z.string().min(2, { message: "User Prompt required!" }).max(200),
});

export const createRetirementSchema = z
  .object({
    currentAge: z
      .number()
      .min(10, { message: "Minimum age should be at least 10!!" })
      .max(50, { message: "Age should be less than 50!!" }),
    retirementAge: z
      .number()
      .min(40, { message: "Minimum age should be at least 40!!" })
      .max(80, { message: "Age should be less than 80!!" }),
    currentIncome: z
      .number()
      .min(500, { message: "Income should be at least 500!!" }),
    currentSavings: z.number().min(0, "Current Savings is required!!"),
    monthlySavings: z
      .number()
      .min(500, { message: "Income should be at least 500!!" }),
    expectedRetireExpenses: z
      .number()
      .gt(0, { message: "Expenses required!!" }),
    expectedRateOfReturn: z
      .number()
      .gt(0, { message: "Rate of return required!!" }),
    inflationRate: z
      .number()
      .min(0, { message: "It should be in percentage!!" }),
  })
  .refine((data) => data.retirementAge > data.currentAge, {
    message: "Retirement age must be greater than current age",
    path: ["retirementAge"],
  });
