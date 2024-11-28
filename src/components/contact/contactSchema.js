import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Please enter a valid email",
    })
    .trim()
    .min(1, { message: "Email is required" })
    .email()
    .toLowerCase(),
  interest: z.array(z.string()).optional(),

  budget: z.object({ value: z.string(), label: z.string() }),

  phone: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Invalid phone number",
    })
    .regex(/^\+\d{1,4}[\s-]?\d{5,14}$/, {
      message: "Enter a valid phone number",
    }),
  message: z
    .string()
    .max(2000, { message: "Must be 5 or fewer characters long" })
    .optional(),
});
