import { getPosts } from "../posts/getPosts.mjs";
import { getUserPanelInfo } from "../user/profilePanel.mjs";
import { createPost } from "../posts/createPost.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Run get posts function
getPosts();

// Run get user panel info function

getUserPanelInfo();

// Connect to the correct form later
const form = document.querySelector(".create-post-form");

// Eventlistener for the submit handling
form.addEventListener("submit", createPost);
