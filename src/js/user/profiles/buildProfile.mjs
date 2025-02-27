import { bannerImageHandler, profileImageHandler } from "../../components/imageHandlers.mjs";
import { setItem, getItem } from "../getUserInfo.mjs";
import { buildEditForm } from "./buildEditForm.mjs";
import { handleFollow } from "./follow-unfollow/follow.mjs";
import { buildFollowingList } from "./buildFollowingList.mjs";

/**
 * A function which builds the HTML for the user profile
 * @param {array} data the data for the specified user
 * @example
 * ```js
 * buildProfile(data);
 * // Expect the function to build a profile based on the API data
 * ```
 */
export function buildProfile(data) {
  const profileImage = document.querySelector(".profile-image");
  const editProfileImg = document.querySelector(".editable-profile-image");
  const userName = document.querySelectorAll(".profile-info-username");
  const bannerImage = document.querySelector(".banner-image");
  const follow = document.querySelector(".follow");

  // Check if an image is set for the user, if not set to default
  let userAvatar = profileImageHandler(data.avatar);

  // Add the image
  editProfileImg.innerHTML = `<img class="profile-image-attributes rounded-circle avatar-to-hover" src="${userAvatar}" alt="User Profile Image" />`;

  profileImage.innerHTML = `<img class="profile-image-attributes rounded-circle me-2" src="${userAvatar}" alt="User Profile Image" />`;

  // Check if a banner image is set for the user, if not set to default
  let userBanner = bannerImageHandler(data.banner);

  // Add the image
  bannerImage.innerHTML = `<img class="img-fluid banner-to-hover" src="${userBanner}" alt="User Banner Image" />`;

  // Add the name
  userName.forEach((name) => {
    name.innerText = `${data.name}`;
  });

  // Check if name matches saved name in localStorage, if so change button to be edit instead of follow and recheck current follower information
  const userInfo = getItem("user");

  if (data.name === userInfo.name) {
    editProfileImg.innerHTML += `<a href="#!" class="me-3 profile-edit-avatar justify-content-center align-items-center">&#9998; Edit</a>`;

    bannerImage.innerHTML += `<a href="#!" class="me-3 profile-edit-banner justify-content-center align-items-center rounded">&#9998; Edit</a>`;

    follow.style.display = "none";

    let following = [];

    for (let i = 0; i < data.following.length; i++) {
      following.push(data.following[i]);
    }

    getItem("follow");
    setItem("follow", JSON.stringify(following));
  }

  // Set initial follow/unfollow state for button
  let followHtml = "Follow";

  // Get the localStorage list of followers
  const followList = JSON.parse(getItem("follow"));

  // Check if the profile being viewed is already being followed
  const doesObjectExist = followList.find(function (fol) {
    return fol.name === data.name;
  });

  // Set button HTML if profile is already being followed
  if (doesObjectExist) {
    followHtml = "Unfollow";
  }

  follow.innerHTML = followHtml;

  // Build the user object
  const user = {
    name: data.name,
    avatar: data.avatar,
  };

  // Set eventListeners for both clicking follow/unfollow and pass in which state button is being pressed as well as the user to build
  follow.addEventListener("click", (e) => {
    handleFollow(e.target, user);
  });

  // Build profile side panel
  buildFollowingList(data);

  // Set up eventListeners for hover states
  const editAvatar = document.querySelector(".profile-edit-avatar");
  if (editAvatar) {
    editAvatar.addEventListener("click", (e) => {
      e.preventDefault();
      buildEditForm("avatar");
      editAvatar.classList = "d-none";
    });
  }

  const editBanner = document.querySelector(".profile-edit-banner");
  if (editBanner) {
    editBanner.addEventListener("click", (e) => {
      e.preventDefault();
      buildEditForm("banner");
      editBanner.classList = "d-none";
    });
  }
}
