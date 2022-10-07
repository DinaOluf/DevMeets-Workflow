import { deleteStorage } from "./util/deleteStorage.mjs";
import { getItem } from "./user/getUserInfo.mjs";
import { searchbarForm, searchbarInput } from "./util/variables.mjs";

const logOut = document.querySelector(".log-out-button");

// Handle logout
logOut.addEventListener("click", deleteStorage);

// Handle "My Profile" redirect

const navLink = document.querySelector(".profile-nav-link");

const userInfo = getItem("user");

if (navLink) {
  navLink.href = `/profile.html?name=${userInfo.name}`;
}

// Searchbar handling

function validateSearch(form) {
  form.preventDefault();

  location.href = "/search.html?search=" + searchbarInput.value;
}

searchbarForm.addEventListener("submit", validateSearch);
