import tickets from "../data/tickets";
import { Ticket } from "../types/tickets";


function getTickets() {
  return tickets;
}


function getTicketById(id: number) {
  return tickets.find((ticket) => ticket.id === id);
}


function createTicket(ticket: Omit<Ticket, "id">) {
  const newTicket = {
    id: tickets.length + 1,
    ...ticket,
  };
  tickets.push(newTicket);
  return newTicket;
}


function updateTicket(id: number, ticket: Omit<Ticket, "id">) {
  const index = tickets.findIndex((ticket) => ticket.id === id);
  const oldTicket = tickets[index];
  const newTicket = { ...oldTicket, ...ticket };
  tickets[index] = newTicket;
  return newTicket;
}


function deleteTicket(id: number) {
  const index = tickets.findIndex((ticket) => ticket.id === id);
  tickets.splice(index, 1);
}


export default {
  getTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
};
