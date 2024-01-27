// Atom family

import { atomFamily, selectorFamily } from "recoil";
import { Todos } from "../Todos";
import axios from "axios";
export const notificationFamily = atomFamily({
  key: "notificationFamily",
  default: (id) => {
    let foundTodo = null;
    for (let i = 0; i < Todos.length; i++) {
      if (Todos[i].id === id) {
        foundTodo = Todos[i];
      }
    }
    return foundTodo;
  },
});

// Atom family selector

export const notificationFamilySelector = atomFamily({
  key: "notificationFamilySelector",
  default: selectorFamily({
    key: "notificationsSelector",
    get:
      (id) =>
      async ({ get }) => {
        await new Promise((r) => setTimeout(r, 5000));
        const { data } = await axios.get(
          `https://sum-server.100xdevs.com/todo?id=${id}`
        );
        return data.todo;
      },
  }),
});
