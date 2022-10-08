import { displayPostsFilter } from "../posts/getPosts.mjs";
import { getUserPanelInfo } from "../user/profiles/profilePanel.mjs";
import { createPost } from "../posts/createPost.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";
import { createComment } from "../posts/createComment.mjs";

// Check if user is logged in, if no, redirect
isUserLoggedIn();

// Run get posts function
displayPostsFilter();

// Run get user panel info function

getUserPanelInfo();

// Connect to the correct form
const form = document.querySelector(".create-post-form");

// Eventlistener for the submit handling
form.addEventListener("submit", createPost);

// // Connect to the correct form
// const commentForm = document.querySelector(".create-comment-form");

// // Eventlistener for the submit handling
// commentForm.addEventListener("submit", createComment);
