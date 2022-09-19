import { getUserInfo } from "../user/getUserInfo.mjs";
import { getPosts } from "../posts/getPosts.mjs";

// Run get posts function
getPosts();

// Get user info and display it

const userInfo = getUserInfo();

const profileImage = document.querySelectorAll(".profile-image");
const userName = document.querySelectorAll(".profile-info-username");

// Check if an image is set for the user, if not set to default
let userAvatar = userInfo.avatar;

if (!userAvatar || userAvatar === "string" || userAvatar === "https://img.service.com/avatar.jpg") {
  userAvatar = "/dist/img/no-user-image-icon-0.jpg";
}

// Add the image
profileImage.forEach((image) => {
  image.innerHTML = `<img class="profile-image-attributes rounded-circle" src="${userAvatar}" alt="User Profile Image" />`;
});

// Add the name
userName.forEach((name) => {
  name.innerText = `${userInfo.name}`;
});
