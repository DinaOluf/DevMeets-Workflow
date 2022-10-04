import { postTemplate } from "./postTemplate.mjs";
import { timeAgo } from "../components/timeAgo.mjs";

export function getComments(data) {
  let html = "";
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    const date = data[i].created;
    const dateFix = timeAgo(date);

    if (i === 3) {
      break;
    }

    html += `<div class="ps-5">
                      <div class="comment-section d-flex">
                        <div class="d-flex flex-start align-items-center w-75 mt-3 mb-3">
                          <div>
                            <h6 class="fw-bold text-primary mb-1 profile-info-username">${data[i].owner}</h6>
                            <p class="text-muted small mb-0">${dateFix}</p>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mb-3">
                        <div class="d-flex flex-column">
                          <div class="d-flex flex-start align-items-center mt-1 mb-1">
                            <p>${data[i].body}</p>
                          </div>
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
                              <p class="mb-0">&#9998; Edit</p>
                            </a>
                            <a href="#!" class="d-flex align-items-center me-3">
                              <p class="mb-0">&#10006; Delete</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      </div>`;
  }

  return html;
}
