const { z } = require("zod");

//creating  a object schema

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast 3 character long" })
    .max(255, { message: "Name should not be 255 character long" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Address" })
    .min(3, { message: "Email must be atleast 3 character long" })
    .max(255, { message: "Email should not be 255 character long" }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: " Phone must be atleast 10 numbers " })
    .max(20, { message: "Phone should not be 20 number long" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be atleast 7 character long" })
    .max(1024, { message: "Password should not be 1024 character long" }),
});

module.export = signupSchema;
