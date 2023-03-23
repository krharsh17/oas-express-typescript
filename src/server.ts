import express from "express";
import bodyParser from "body-parser";


import usersRoutes from "./routes/users";
import ticketsRoutes from "./routes/tickets";


// Create the express app
const app = express();


// Configure the app to use the body parser middleware, so that you can access the request body
const jsonParser = bodyParser.json();


// Register each of the API resources
app.use("/api/users", jsonParser, usersRoutes);
app.use("/api/tickets", jsonParser, ticketsRoutes);


export default app;