import { z } from "zod";

export const userRegisterationSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(7),
});
