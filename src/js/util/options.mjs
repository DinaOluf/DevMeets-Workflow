import { getItem } from "../user/getUserInfo.mjs";

const jwt = getItem("jwt");

export const options = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
};
