import { followUnfollowRequest } from "./requests.mjs";
import { getItem, setItem } from "../../getUserInfo.mjs";

export function handleFollow(target, user) {
  // Set button innerHTML based on which state is clicked
  if (target.innerHTML === "Follow") {
    target.innerHTML = "Unfollow";
  } else {
    target.innerHTML = "Follow";
  }

  // Get the localStorage list of followers
  const followList = JSON.parse(getItem("follow"));

  // Check if the profile being viewed is already being followed
  const followExists = followList.find(function (fol) {
    return fol.name === user.name;
  });

  // If the profile is not already followed and button is clicked, start follow. Else, unfollow.
  if (!followExists) {
    const userToFollow = user;
    followList.push(userToFollow);

    // Set the new user to follow to localStorage
    setItem("follow", JSON.stringify(followList));

    // Push the new user to follow to the API
    followUnfollowRequest(user.name, "follow");
  } else {
    const newFollowing = followList.filter((fol) => fol.name !== user.name);
    // Set the new user to follow to localStorage
    setItem("follow", JSON.stringify(newFollowing));

    // Push the new user to follow to the API
    followUnfollowRequest(user.name, "unfollow");
  }
}
