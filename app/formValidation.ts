import { z } from 'zod';

export const createUserSchema = z.object({
    firstname: z.string().regex(/^[a-zA-Z0-9]+$/).min(1,'Name is required').max(255),
    lastname: z.string().regex(/^[a-zA-Z0-9]+$/).min(1,'Name is required').max(255),
    email: z.string().email({ message: "Please enter a valid email address." }).min(1, 'Email is required'),
    phone: z.string().regex(/^[6-9]\d{9}$/, {
        message: "Invalid phone number. Must be a 10-digit number starting with 6, 7, 8, or 9.",
      }),
    password: z.string().min(8, "Password must be at least 8 characters long").regex(/[a-z]/, "Password must contain a lowercase letter").regex(/[A-Z]/, "Password must contain a capital letter").regex(/\d/, "Password must contain a number").regex(/[!@#$%^&*]/, "Password must contain a special symbol"),
});

export const loginUserSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }).min(1, 'Email is required'),
  password: z.string().min(8, "Password must be at least 8 characters long").regex(/[a-z]/, "Password must contain a lowercase letter").regex(/[A-Z]/, "Password must contain a capital letter").regex(/\d/, "Password must contain a number").regex(/[!@#$%^&*]/, "Password must contain a special symbol"),
});