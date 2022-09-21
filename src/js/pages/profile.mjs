import { getPosts } from "../posts/getPosts.mjs";
import { getUserPanelInfo } from "../user/profilePanel.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Run get posts function
getPosts();

// Run get user panel info function

getUserPanelInfo();
