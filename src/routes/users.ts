import usersController from "../controllers/users";
import { Router } from "express";
import { validateRequestBody } from "zod-express-middleware";
import zodUserRequest from "../schemas/zod-UserRequest";


// Create the router for this resource
const router = Router();


// Define each of the routes available for this resource, and their handlers
// Note that the POST and PUT routes use the validateRequestBody middleware
// Which will validate the request body against the zod schema that gets generated from your OpenAPI spec


router.post(
  "/",
  validateRequestBody(zodUserRequest.strict()),
  usersController.createUser
);
router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put(
  "/:id",
  validateRequestBody(zodUserRequest.strict()),
  usersController.updateUser
);
router.delete("/:id", usersController.deleteUser);


export default router;