import { followUnfollowRequest } from "./requests.mjs";
import { getItem, setItem } from "../../getUserInfo.mjs";

export function followUser(user) {
  // Get the list of current followed people
  const follow = JSON.parse(getItem("follow"));

  // Add the new user to follow to the list of current followed people
  follow.push(user);

  // Set the new user to follow to localStorage
  setItem("follow", JSON.stringify(follow));

  // Push the new user to follow to the API
  followUnfollowRequest(user.name, "follow");
}
