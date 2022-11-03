import { getMyPosts } from "../posts/getPosts.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";
import { getProfile } from "../user/profiles/getProfile.mjs";
import { getPostUrlParams, API_PROFILE_URL } from "../util/variables.mjs";
import { options } from "../util/options.mjs";
import { getItem } from "../user/getUserInfo.mjs";
import { clearAll } from "../util/clearInput.mjs";
import { createPost } from "../posts/createPost.mjs";

// Get user info
const userInfo = getItem("user");

// QUERY STRINGS

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const name = params.get("name");

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Clears inputs on post creation

clearInput.addEventListener("click", clearAll);

// Connect to the correct form
const form = document.querySelector(".create-post-form");

// Eventlistener for the submit handling
form.addEventListener("submit", createPost);

// Run get posts function
getMyPosts(API_PROFILE_URL, getPostUrlParams, name, options);

// if the id is null, then redirect to the home page. If not, create the profile.
if (!name) {
  location.href = `/profile.html?name=${userInfo.name}`;
} else {
  getProfile(name);
}
