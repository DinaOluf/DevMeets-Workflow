import { getUserAuth } from "../user/userAuth.mjs";

const jwt = getUserAuth();

export const options = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
};
