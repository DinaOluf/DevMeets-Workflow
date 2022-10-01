import { editPost } from "../posts/editPost.mjs";

export function getPostToEdit() {
  const editPostButton = document.querySelectorAll(".edit-post");

  // When edit button is clicked changes value of post-content to inputs

  editPostButton.forEach((e) => {
    e.addEventListener("click", (i) => {
      const closestPost = i.target.closest(".card-body");
      console.log(closestPost.childNodes);

      const postId = closestPost.childNodes[3].innerText;
      const postTitle = closestPost.childNodes[5];
      const postBody = closestPost.childNodes[7];
      const postMedia = closestPost.childNodes[9];
      const postTags = closestPost.childNodes[11];

      postTitle.innerHTML = `<input type="text" class="form-control w-100 postTitle" id="post-title" aria-describedby="titleHelp" value="${postTitle.innerText}" />`;

      postBody.innerHTML = `<input type="text" class="form-control w-100 postBody" id="post-body" aria-describedby="bodyHelp" value="${postBody.innerText}" />`;

      postMedia.innerHTML = `<input type="text" class="form-control w-100 postMedia" id="post-media" aria-describedby="mediaHelp" value="${postMedia.childNodes[1].src}" />`;

      postTags.innerHTML = `<input type="text" class="form-control w-100 postTags" id="post-tags" aria-describedby="tagsHelp" value="${postTags.innerText}" />`;

      // Creates parent div for buttons
      const div = document.createElement("div");

      // Creates button upon clicking edit
      div.innerHTML += `<button type="submit" class="btn btn-primary btn-sm mb-3 saveEdit">Save</button> <button type="submit" class="btn btn-primary btn-sm  mb-3">Cancel</button>`;
      closestPost.insertBefore(div, closestPost.childNodes[12]);

      const saveEdit = document.querySelector(".saveEdit");

      const inputTitle = document.querySelector(".postTitle").value;
      const inputBody = document.querySelector(".postBody").value;
      const inputMedia = document.querySelector(".postMedia").value;
      const inputTags = document.querySelector(".postTags").value;

      saveEdit.addEventListener("click", () => {
        editPost(postId, inputTitle, inputBody, inputTags, inputMedia);
        console.log(inputTitle);
      });
    });
  });
}

// Target buttons and handle submit
