import { getItem, setItem } from "../../user/getUserInfo.mjs";

// Sort passed in array if it includes posts by people user is following
export function sortFollow(posts) {
  setItem("follow", []);
  const follow = getItem("follow");
  const followerNames = follow.map((follower) => follower.name);
  const sortedArray = posts.filter((post) => followerNames.includes(post.author.name));
  return sortedArray;
}
