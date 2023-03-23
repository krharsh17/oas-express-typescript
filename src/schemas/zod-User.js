import { z } from "zod";

export default z.object({ id: z.number().int(), name: z.string() });
