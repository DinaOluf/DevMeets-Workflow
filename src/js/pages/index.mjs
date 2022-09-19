import { getUserInfo } from "../user/getUserInfo.mjs";
import { getPosts } from "../posts/getPosts.mjs";

// Run get posts function
getPosts();

// Get user info and display it

const userInfo = getUserInfo();

const profileImage = document.querySelectorAll(".profile-image");
const userName = document.querySelectorAll(".profile-info-username");

profileImage.forEach((image) => {
  image.innerHTML = `<img class="profile-image-attributes rounded-circle" src="${userInfo.avatar}" alt="User Profile Image" />`;
});

userName.forEach((name) => {
  name.innerText = `${userInfo.name}`;
});
