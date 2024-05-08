import { z } from "zod";

const Schema = z.object({
  name: z.string().min(3),
  price: z.number().min(1).max(100)
});

export default Schema;
