import { options } from "../util/options.mjs";
import { API_BASE_URL, getPostUrlParams, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";

const getPostsContainer = document.querySelector(".get-posts-container");

export async function getPosts() {
  try {
    // CLEAR EXISTING HTML
    errorContainer.innerHTML = "";
    getPostsContainer.innerHTML = "";

    // GET API DATA

    const response = await fetch(`${API_BASE_URL}/api/v1/social/posts${getPostUrlParams}`, options);
    const data = await response.json();

    console.log(data);

    // LOOP THE DATA AND DISPLAY IT.

    for (let i = 0; i < data.length; i++) {
      // DEFAULT VALUES

      // Display Date
      const date = data[i].updated;
      const dateFix = date.split("T")[0];
      const timeFix = date.split("T")[1];

      // Filtering out some annoying test posts by other users

      if (data[i].author.name === "string") {
        continue;
      }

      if (data[i].body === "string") {
        continue;
      }

      // Check if content image exists, if so add it
      let postMedia;
      if (!data[i].media || data[i].media === "string") {
        postMedia = "";
      } else {
        postMedia = data[i].media;
      }

      // Check if user has profile image, if not add placeholder

      let userProfileImage;

      if (!data[i].author.avatar || data[i].author.avatar === "string") {
        userProfileImage = "/dist/img/no-user-image-icon-0.jpg";
      } else {
        userProfileImage = data[i].author.avatar;
      }

      // DISPLAY POST

      getPostsContainer.innerHTML += `
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-start align-items-center">
            <img class="rounded-circle shadow-1-strong me-3" src="${userProfileImage}" alt="avatar" width="60" height="60" />
            <div>
              <h6 class="fw-bold text-primary mb-1">${data[i].author.name}</h6>
              <p class="text-muted small mb-0">Shared publicly - ${dateFix}, ${timeFix}</p>
            </div>
          </div>

          <p class="mt-3 mb-4 pb-2">
          ${data[i].body}
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
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
