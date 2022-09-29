import { timeAgo } from "../components/timeAgo.mjs";
import { profileImageHandler } from "../components/imageHandlers.mjs";
import { getPostsContainer } from "../util/variables.mjs";
import { isImageLink } from "../components/imageHandlers.mjs";

export function postTemplate(sortedData) {
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

    // Check if content image exists, if so add it
    let postMedia;
    if (!sortedData[i].media || sortedData[i].media === "string" || !isImageLink(sortedData[i].media)) {
      postMedia = "";
    } else {
      postMedia = sortedData[i].media;
    }

    // Check if user has profile image, if not add placeholder

    let userProfileImage = profileImageHandler(sortedData[i].author.avatar);

    // DISPLAY POST

    getPostsContainer.innerHTML += `
        <div class="card">
          <div class="card-body">
            <div class="d-flex flex-start align-items-center">
              <img class="rounded-circle shadow-1-strong me-3" src="${userProfileImage}" alt="avatar" width="60" height="60" />
              <div>
                <h6 class="fw-bold text-primary mb-1">${sortedData[i].author.name}</h6>
                <p class="text-muted small mb-0">Shared publicly - ${dateFix}</p>
              </div>
            </div>
  
            <p class="mt-3 mb-4 pb-2">
            ${sortedData[i].body}
            </p>
  
            <p class="mt-3 mb-4 pb-2">
            <img class="w-100" src="${postMedia}" />
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
        </div>`;
  }
}
