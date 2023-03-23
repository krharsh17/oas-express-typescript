import zodTicketRequest from "../schemas/zod-TicketRequest";
import zodTicket from "../schemas/zod-Ticket";


import { z } from "zod";


export type TicketRequest = z.infer<typeof zodTicketRequest>;


export type Ticket = z.infer<typeof zodTicket>;
