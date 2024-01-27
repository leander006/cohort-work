// selector

import { atom, selector } from "recoil";
import axios from "axios";
export const notificationAtomCount = atom({
  key: "notificationAtomCount",
  default: selector({
    key: "notificationAtomCountSelector",
    get: async () => {
      const { data } = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );

      return data;
    },
  }),
});
