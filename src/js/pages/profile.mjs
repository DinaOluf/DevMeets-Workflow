import { displayPosts } from "../posts/getPosts.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";
import { getProfile } from "../user/profiles/getProfile.mjs";
import { getPostUrlParams, API_POSTS_URL } from "../util/variables.mjs";
import { options } from "../util/options.mjs";
import { getItem } from "../user/getUserInfo.mjs";

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Run get posts function
displayPosts(API_POSTS_URL, getPostUrlParams, options);

// Get user info
const userInfo = getItem("user");

// QUERY STRINGS

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const name = params.get("name");

// if the id is null, then redirect to the home page. If not, create the profile.
if (!name) {
  location.href = `/profile.html?name=${userInfo.name}`;
} else {
  getProfile(name);
}
