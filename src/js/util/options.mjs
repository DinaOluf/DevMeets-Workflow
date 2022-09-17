import { getUserAuth } from "../components/userAuth.mjs";

const jwt = getUserAuth();

export const options = {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
};
