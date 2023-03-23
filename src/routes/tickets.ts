import ticketsController from "../controllers/tickets";
import { Router } from "express";
import { validateRequestBody } from "zod-express-middleware";
import zodTicketRequest from "../schemas/zod-TicketRequest";


const router = Router();


router.post(
  "/",
  validateRequestBody(zodTicketRequest.strict()),
  ticketsController.createTicket
);
router.get("/", ticketsController.getTickets);
router.get("/:id", ticketsController.getTicketById);
router.put(
  "/:id",
  validateRequestBody(zodTicketRequest.strict()),
  ticketsController.updateTicket
);
router.delete("/:id", ticketsController.deleteTicket);


export default router;