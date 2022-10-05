import { followUnfollowRequest } from "./requests.mjs";

export function unfollowUser(user) {
  console.log(`Unfollow ${user}`);
  followUnfollowRequest(user, "unfollow");
}
