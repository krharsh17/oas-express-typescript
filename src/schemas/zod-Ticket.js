import { z } from "zod";

export default z.object({
  id: z.number().int().optional(),
  title: z.string().min(1).max(255).optional(),
  description: z.string().min(1).max(1024).optional(),
  author_user_id: z.number().int().optional(),
  assigned_user_id: z.number().int().nullable().optional(),
});
