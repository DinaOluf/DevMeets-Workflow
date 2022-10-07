import { getPostSpecificContainer } from "../util/variables.mjs";
import { getCommentsContainer } from "../util/variables.mjs";
import { postTemplate } from "./postTemplate.mjs";
import { timeAgo } from "../components/timeAgo.mjs";
import { profileImageHandler } from "../components/imageHandlers.mjs";
import { getUserInfo } from "../user/getUserInfo.mjs";
import { getComments } from "./getComments.mjs";

export function getPostContainerSpecific(commentData) {
  getPostSpecificContainer.innerHTML = "";
  // Display Date
  // Display Post

  getPostSpecificContainer.innerHTML = `<div class="card w-50">
  <div class="card-body">
    <div class="d-flex flex-start align-items-center">
      <a href="/profile.html?name=">
        <img class="rounded-circle shadow-1-strong me-3" src="dist/img/Jonatan.jpg" alt="" width="60" height="60" />
      </a>
      <div>
        <a href=""><h6 class="fw-bold text-primary mb-1">NAME</h6></a>
        <p class="text-muted small mb-0">SHARED</p>
      </div>
    </div>

    <div class="d-none"></div>

    <div class="d-none post-title">TITLE</div>

    <p class="mt-3 mb-4 pb-2 post-body">TEXT CONTENT</p>

    <p class="mt-3 mb-4 pb-2 post-media">
      <img class="w-100" src="" />
    </p>

    <p class="mt-3 mb-4 pb-2 post-tags"></p>

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
    </div>
  </div>
  <form class="card-footer py-3 border-0" style="background-color: #f8f9fa">
    <div class="d-flex flex-start w-100">
      <img class="rounded-circle shadow-1-strong me-3" src="dist/img/sindre.jpg" alt="avatar" width="40" height="40" />
      <div class="form-outline w-100">
        <textarea class="form-control w-100" placeholder="Write a comment.." id="textAreaExample" rows="4" style="background: #fff"></textarea>
      </div>
    </div>
    <div class="float-end mt-2 pt-1">
      <button type="submit" class="btn btn-primary btn-sm">Post comment</button>
      <button type="button" class="btn btn-primary btn-sm">Cancel</button>
    </div>
  </form>
  <div class="comment-section-wrap">COMMENTS</div>
</div>`;
}
