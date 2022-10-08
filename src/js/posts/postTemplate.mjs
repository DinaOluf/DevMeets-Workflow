import { timeAgo } from "../components/timeAgo.mjs";
import { profileImageHandler } from "../components/imageHandlers.mjs";
import { getPostsContainer } from "../util/variables.mjs";
import { getItem } from "../user/getUserInfo.mjs";
import { addCogWheelEvent, createCog } from "../components/createCog.mjs";
import { getComments } from "./getComments.mjs";
import { createComment } from "./createComment.mjs";

export function postTemplate(sortedData) {
  getPostsContainer.innerHTML = "";

  for (let i = 0; i < sortedData.length; i++) {
    // DEFAULT VALUES
    // Display Date
    const date = sortedData[i].updated;
    const dateFix = timeAgo(date);

    // Filtering out some annoying test posts by other users

    if (sortedData[i].author.name === "string") {
      continue;
    }

    if (sortedData[i].body === "string") {
      continue;
    }

    // Add cogwheel to my posts
    let cogContainer = "";
    const userInfo = getItem("user");

    if (sortedData[i].author.name === userInfo.name) {
      cogContainer = createCog();
    }

    // Check if content image exists, if so add it
    let postMedia;
    if (!sortedData[i].media || sortedData[i].media === "string") {
      postMedia = "";
    } else {
      postMedia = `<p class="mt-3 mb-4 pb-2 post-media">
      <img class="w-50" src="${sortedData[i].media}" />
      </p>`;
    }

    // Check if user has profile image, if not add placeholder

    let userProfileImage = profileImageHandler(sortedData[i].author.avatar);

    // Get comments to display

    const commentsData = getComments(sortedData[i].comments);
    const commentId = sortedData[i].id;

    // DISPLAY POST
    getPostsContainer.innerHTML += `
        <div class="card w-100">
          <div class="card-body">
            <div class="d-flex flex-start align-items-center">
              <a href="/profile.html?name=${sortedData[i].author.name}">
                <img class="rounded-circle shadow-1-strong me-3" src="${userProfileImage}" alt="${sortedData[i].author.name}'s avatar" width="60" height="60" />
              </a>
              <div>
              <a href="/profile.html?name=${sortedData[i].author.name}"><h6 class="fw-bold text-primary mb-1">${sortedData[i].author.name}</h6></a>
                <p class="text-muted small mb-0">Shared publicly - ${dateFix}</p>
              </div>
              ${cogContainer}
            </div>
  
            <div class="d-none post-id">${sortedData[i].id}</div>

            <div class="d-none post-title">${sortedData[i].title}</div>

            <p class="mt-3 mb-4 pb-2 post-body">
            ${sortedData[i].body}
            </p>
  
            ${postMedia}

            <p class="mt-3 mb-4 pb-2 post-tags">
            ${sortedData[i].tags}
            </p>
  
            <div class="small d-flex justify-content-start">
              <a href="#!" class="d-flex align-items-center me-3">
                <i class="far fa-thumbs-up me-2"></i>
                <p class="mb-0">Like</p>
              </a>
              <a href="#!" class="d-flex align-items-center me-3">
                <i class="far fa-comment-dots me-2"></i>
                <p class="mb-0">Comment</p>
              </a>
              <a href="#!" class="d-flex align-items-center me-3">
                <i class="fas fa-share me-2"></i>
                <p class="mb-0">Share</p>
              </a>
              <a href="/post.html?id=${commentId}" class="d-flex align-items-center me-3">
                <p class="mb-0">&#128172; View Comments (${sortedData[i].comments.length})</p>
              </a>
            </div>
          </div>
          <form class="card-footer py-3 border-0 create-comment-form" style="background-color: #f8f9fa">
            <div class="d-flex flex-start w-100">
              <img class="rounded-circle shadow-1-strong me-3" src="dist/img/sindre.jpg" alt="avatar" width="40" height="40" />
              <div class="form-outline w-100">
                <textarea class="form-control w-100" placeholder="Write a comment.." id="textAreaExample" rows="4" style="background: #fff"></textarea>
              </div>
            </div>
            <div class="float-end mt-2 pt-1">
              <button type="submit" class="btn btn-primary btn-sm post-comment">Post comment</button>
              <button type="button" class="btn btn-primary btn-sm">Cancel</button>
            </div>
          </form>
          <div class="comment-section-wrap">${commentsData}</div>
        </div>`;
  }

  function getCommentId(id) {
    const getPostId = document.querySelectorAll(".card-body");
    const commentForm = document.querySelectorAll(".create-comment-form");
    const postComment = document.querySelectorAll(".post-comment");

    getPostId.forEach((e) => {
      e.addEventListener("click", (i) => {
        const closestId = i.target.closest(".card-body");

        const postId = closestId.childNodes[3].innerText;

        postComment.addEventListener("submit", createComment);

        console.log(postId);
      });
    });
  }

  getCommentId();
  // Add Cogwheel Event Listeners
  addCogWheelEvent();
}
