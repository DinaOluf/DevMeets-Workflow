import { editPost } from "../posts/editPost.mjs";

export function getPostToEdit() {
  const editPostButton = document.querySelectorAll(".edit-post");

  // When edit button is clicked changes value of post-content to inputs

  editPostButton.forEach((e) => {
    e.addEventListener("click", (i) => {
      // Target the closest card to the clicked cogwheel
      const closestPost = i.target.closest(".card-body");

      // Get all of the necessary elements from the post
      const postId = closestPost.querySelector(".post-id");
      const postTitle = closestPost.querySelector(".post-title");
      const postBody = closestPost.querySelector(".post-body");
      const postMedia = closestPost.querySelector(".post-media");
      const postTags = closestPost.querySelector(".post-tags");
      const socialIcons = closestPost.querySelector(".post-social-icons");

      const idValue = postId.innerText;
      const titleValue = postTitle.innerText;
      let mediaValue = "";
      const bodyValue = postBody.innerText;
      const tagsValue = postTags.innerHTML;

      // Clear the post's content
      postTitle.outerHTML = "";
      postBody.outerHTML = "";
      postTags.outerHTML = "";

      if (postMedia) {
        mediaValue = postMedia.firstElementChild;
        postMedia.innerHTML = "";
      }

      // Create a form for easier submission of the edited post values
      const form = document.createElement("form");
      form.classList.add("card-body");
      form.classList.add("py-2");
      form.classList.add("border-0");
      form.classList.add("editPostForm");
      closestPost.insertBefore(form, socialIcons);

      // Get the form for submission handling
      const editPostForm = document.querySelector(".editPostForm");

      // Add the necessary inputs to the created form so users can actually edit the post
      editPostForm.innerHTML += `<input type="text" class="form-control d-none w-100 mt-3 mb-4 pb-2 postId" id="post-id" aria-describedby="idHelp" value="${idValue}" />`;
      editPostForm.innerHTML += `<input type="text" class="form-control w-100 mt-3 mb-4 pb-2 postTitle" id="post-title" aria-describedby="titleHelp" value="${titleValue.trim()}" />`;
      editPostForm.innerHTML += `<input type="text" class="form-control w-100 mt-3 mb-4 pb-2 postBody" id="post-body" aria-describedby="bodyHelp" value="${bodyValue.trim()}" />`;
      if (postMedia) {
        editPostForm.innerHTML += `<input type="text" class="form-control w-100 mt-3 mb-4 pb-2 postMedia" id="post-media" aria-describedby="mediaHelp" value="${mediaValue.src}" />`;
      }
      editPostForm.innerHTML += `<input type="text" class="form-control w-100 mt-3 mb-4 pb-2 postTags" id="post-tags" aria-describedby="tagsHelp" value="${tagsValue.trim()}" />`;

      // Creates button upon clicking edit
      editPostForm.innerHTML += `<button type="submit" class="btn btn-primary btn-sm mb-3 saveEdit">Save</button> <button type="button" class="btn btn-primary btn-sm mb-3" onclick="location.reload()">Cancel</button>`;

      // Submit the edited form
      editPostForm.addEventListener("submit", getNewInputs);
    });
  });
}

// Target buttons and handle submit

function getNewInputs(evt) {
  evt.preventDefault();

  // Assign the inputs from the form to variables
  const [id, title, body, media, tags] = evt.target.elements;

  // Build the new post with edited values
  const dataObj = JSON.stringify({
    title: `${title.value}`,
    body: `${body.value}`,
    tags: [`${tags.value}`],
    media: `${media.value}`,
  });

  // Send to edit handler
  editPost(id.value, dataObj);
}
