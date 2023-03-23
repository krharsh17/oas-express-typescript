// Import the generated zod schemas from the schemas folder. These are based on your OpenAPI spec.
import zodUserRequest from "../schemas/zod-UserRequest";
import zodUser from "../schemas/zod-User";


import { z } from "zod";


// Use zod to infer the types from the zod schemas
export type UserRequest = z.infer<typeof zodUserRequest>;


export type User = z.infer<typeof zodUser>;
