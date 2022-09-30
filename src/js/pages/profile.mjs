import { displayPosts } from "../posts/getPosts.mjs";
import { getUserPanelInfo } from "../user/profiles/profilePanel.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";
import { getProfile } from "../user/profiles/getProfile.mjs";
import { getPostUrlParams, API_POSTS_URL } from "../util/variables.mjs";
import { options } from "../util/options.mjs";

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Run get posts function
displayPosts(API_POSTS_URL, getPostUrlParams, options);

// Run get user panel info function
getUserPanelInfo();

// QUERY STRINGS

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const name = params.get("name");

// if the id is null, then redirect to the home page. If not, create the profile.
if (!name) {
  location.href = "/";
} else {
  getProfile(name);
}
