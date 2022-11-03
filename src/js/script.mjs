import { deleteStorage } from "./util/deleteStorage.mjs";
import { getItem } from "./user/getUserInfo.mjs";
import { searchbarForm } from "./util/variables.mjs";

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
  const [input] = form.target.elements;
  location.href = `/search.html?search=${input.value}`;
}

searchbarForm.forEach((e) => {
  e.addEventListener("submit", validateSearch);
});
