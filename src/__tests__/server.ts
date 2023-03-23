import jestOpenAPI from "jest-openapi";
import request from "supertest";
import path from "path";
import server from "../server";
import { UserRequest } from "../types/users";
import { TicketRequest } from "../types/tickets";


// Import your OpenAPI spec
jestOpenAPI(path.join(__dirname, "../../openapi.yaml"));


// Run tests to validate that your API is compliant with your OpenAPI spec
describe("server.ts", () => {
  describe("Users API", () => {
    it("GET /users", async () => {
      const res = await request(server).get("/api/users");
      expect(res.status).toEqual(200);
      expect(res).toSatisfyApiSpec();
    });


    it("GET /users/:id", async () => {
      const res = await request(server).get("/api/users/1");
      expect(res.status).toEqual(200);
      expect(res).toSatisfyApiSpec();
    });


    it("POST /users", async () => {
      const res = await request(server)
     .post("/api/users")
     .send({
         name: "John Doe",
     } as UserRequest);
      expect(res.status).toEqual(201);
      expect(res).toSatisfyApiSpec();
    });


    it("PUT /users/:id", async () => {
      const res = await request(server)
     .put("/api/users/1")
     .send({
         name: "John Doe",
     } as UserRequest);
      expect(res.status).toEqual(200);
      expect(res).toSatisfyApiSpec();
    });


    it("DELETE /users/:id", async () => {
      const res = await request(server).delete("/api/users/1");
      expect(res.status).toEqual(204);
      expect(res).toSatisfyApiSpec();
    });
  });


  describe("Tickets API", () => {
    it("GET /tickets", async () => {
      const res = await request(server).get("/api/tickets");
      expect(res.status).toEqual(200);
      expect(res).toSatisfyApiSpec();
    });


    it("GET /tickets/:id", async () => {
      const res = await request(server).get("/api/tickets/1");
      expect(res.status).toEqual(200);
      expect(res).toSatisfyApiSpec();
    });


    it("POST /tickets", async () => {
      const res = await request(server)
     .post("/api/tickets")
     .send({
         title: "ticket",
         description: "ticket description",
         author_user_id: 1,
         assigned_user_id: 1,
     } as TicketRequest);
      expect(res.status).toEqual(201);
      expect(res).toSatisfyApiSpec();
    });


    it("PUT /tickets/:id", async () => {
      const res = await request(server)
     .put("/api/tickets/1")
     .send({
         title: "ticket",
         description: "ticket description",
         author_user_id: 1,
         assigned_user_id: 1,
     } as TicketRequest);
      expect(res.status).toEqual(200);
      expect(res).toSatisfyApiSpec();
    });


    it("DELETE /tickets/:id", async () => {
      const res = await request(server).delete("/api/tickets/1");
      expect(res.status).toEqual(204);
      expect(res).toSatisfyApiSpec();
    });
  });
});