import { displayPostsFilter } from "../posts/getPosts.mjs";
import { getUserPanelInfo } from "../user/profiles/profilePanel.mjs";
import { createPost } from "../posts/createPost.mjs";
import { isUserLoggedIn } from "../user/isUserLoggedIn.mjs";
import { updatePost } from "../posts/updatePost.mjs";
import { clearAll } from "../util/clearInput.mjs";

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

// Connect to the correct cogwheel

const cogDrop = document.querySelectorAll(".cogDropdown");

// Add eventlistener to cogwheel

cogDrop.forEach((e) => {
  e.addEventListener("click", () => {
    console.log("cogclick");
    getEditPostButton();
  });
});

function getEditPostButton() {
  console.log("Hello");
  const editPost = document.querySelector(".edit-post");
  editPost.addEventListener("click", (e) => {
    const closestPost = e.closest(".card-body");
    console.log(closestPost);
  });
}
