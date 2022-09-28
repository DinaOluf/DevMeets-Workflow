import { displayPosts } from "../posts/getPosts.mjs";
import { getUserPanelInfo } from "../user/profilePanel.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";
import { getPostUrlParams, postsEndpoint } from "../util/variables.mjs";
import { options } from "../util/options.mjs";

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Run get posts function
displayPosts(postsEndpoint, getPostUrlParams, options);

// Run get user panel info function
getUserPanelInfo();
