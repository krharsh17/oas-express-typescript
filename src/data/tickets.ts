import { Ticket } from "../types/tickets";


const tickets: Ticket[] = [
  {
    id: 1,
    title: "Ticket 1",
    description: "Ticket 1 description",
    author_user_id: 1,
    assigned_user_id: 2,
  },
  {
    id: 2,
    title: "Ticket 2",
    description: "Ticket 2 description",
    author_user_id: 2,
    assigned_user_id: 3,
  },
  {
    id: 3,
    title: "Ticket 3",
    description: "Ticket 3 description",
    author_user_id: 3,
    assigned_user_id: 4,
  },
  {
    id: 4,
    title: "Ticket 4",
    description: "Ticket 4 description",
    author_user_id: 4,
    assigned_user_id: 1,
  },
];


export default tickets;