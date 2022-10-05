import { bannerImageHandler, profileImageHandler } from "/src/js/components/imageHandlers.mjs";
import { setItem, getItem, updateItem } from "../getUserInfo.mjs";
import { buildEditForm } from "./buildEditForm.mjs";
import { followUser } from "./follow-unfollow/follow.mjs";
import { unfollowUser } from "./follow-unfollow/unfollow.mjs";

export function buildProfile(data) {
  const profileImage = document.querySelector(".profile-image");
  const editProfileImg = document.querySelector(".editable-profile-image");
  const userName = document.querySelectorAll(".profile-info-username");
  const bannerImage = document.querySelector(".banner-image");
  const follow = document.querySelector(".follow");

  // Check if an image is set for the user, if not set to default
  let userAvatar = profileImageHandler(data.avatar);

  // Add the image
  editProfileImg.innerHTML = `<img class="profile-image-attributes rounded-circle avatar-to-hover" src="${userAvatar}" alt="User Profile Image" />
                      <a href="" class="me-3 profile-edit-avatar">&#9998; Edit</a>`;

  profileImage.innerHTML = `<img class="profile-image-attributes rounded-circle" src="${userAvatar}" alt="User Profile Image" />`;

  if (data.banner) {
    // Check if a banner image is set for the user, if not set to default
    let userBanner = bannerImageHandler(data.banner);

    // Add the image
    bannerImage.innerHTML = `<img class="img-fluid banner-to-hover" src="${userBanner}" alt="User Banner Image" />
                            <a href="" class="me-3 profile-edit-banner">&#9998; Edit</a>`;
  }

  // Add the name
  userName.forEach((name) => {
    name.innerText = `${data.name}`;
  });

  // Set up eventListeners for hover states
  const editAvatar = document.querySelector(".profile-edit-avatar");
  if (editAvatar) {
    editAvatar.addEventListener("click", (e) => {
      e.preventDefault();
      buildEditForm("avatar");
    });
  }

  const editBanner = document.querySelector(".profile-edit-banner");
  if (editBanner) {
    editBanner.addEventListener("click", (e) => {
      e.preventDefault();
      buildEditForm("banner");
    });
  }

  // Check if name matches saved name in localStorage, if so change button to be edit instead of follow and recheck current follower information
  const userInfo = getItem("user");

  if (data.name === userInfo.name) {
    follow.style.display = "none";

    let following = [];

    for (let i = 0; i < data.following.length; i++) {
      following.push(data.following[i]);
    }

    getItem("follow");
    setItem("follow", JSON.stringify(following));
  }

  // Set eventListeners for both clicking follow/unfollow
  if (follow.innerHTML === "Follow") {
    follow.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Following mode");
      follow.innerHTML === "Unfollow";
      followUser({
        name: data.name,
        avatar: data.avatar,
      });
    });
  }

  if (follow.innerHTML === "Unfollow") {
    follow.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Unfollowing mode");
      follow.innerHTML === "Follow";
      unfollowUser(data);
    });
  }
}
