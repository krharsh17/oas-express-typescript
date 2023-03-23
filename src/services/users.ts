import users from "../data/users";
import { User } from "../types/users";


// Here, you define the functions that will be called by the controllers.
// At this layer, you can add business logic, and interact with your storage layer.
// The types used here are derived from your OpenAPI spec, via zod.


function getUsers() {
  return users;
}


function getUserById(id: number) {
  return users.find((user) => user.id === id);
}


function createUser(user: Omit<User, "id">) {
  const newUser = {
    id: users.length + 1,
    ...user,
  };
  users.push(newUser);
  return newUser;
}


function updateUser(id: number, user: Omit<User, "id">) {
  const index = users.findIndex((user) => user.id === id);
  const oldUser = users[index];
  const newUser = { ...oldUser, ...user };
  users[index] = newUser;
  return newUser;
}


function deleteUser(id: number) {
  const index = users.findIndex((user) => user.id === id);
  users.splice(index, 1);
}


export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
