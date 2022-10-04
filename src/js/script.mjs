import { deleteStorage } from "./util/deleteStorage.mjs";
import { getUserInfo } from "./user/getUserInfo.mjs";

const logOut = document.querySelector(".log-out-button");

// Handle logout
logOut.addEventListener("click", deleteStorage);

// Handle "My Profile" redirect

const navLink = document.querySelector(".profile-nav-link");

const userInfo = getUserInfo();

if (navLink) {
  navLink.href = `/profile.html?name=${userInfo.name}`;
}
