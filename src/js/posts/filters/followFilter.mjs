import { getItem } from "../../user/getUserInfo.mjs";

const follow = getItem("follow");

// Sort passed in array if it includes posts by people user is following
export function sortFollow(posts) {
  const followerNames = follow.map((follower) => follower.name);
  const sortedArray = posts.filter((post) => followerNames.includes(post.author.name));
  return sortedArray;
}
