import { editComment } from "./editComment.mjs";

export function getCommentToEdit() {
  const editCommentButton = document.querySelectorAll(".edit-comment-button");

  editCommentButton.forEach((e) => {
    e.addEventListener("click", (i) => {
      // Target the closest comment to edit button
      const closestComment = i.target.closest(".comment-text");

      // Get the necessary elements from the comments
      const postComment = closestComment.childNodes[1];
      const postId = closestComment.childNodes[3].innerText;
      const postTemplate = closestComment.childNodes[3];

      console.log(postId);
      // Clear content from comment

      postComment.outerHTML = "";
      // Create a form for easier submission of the edited post values
      const commentForm = document.createElement("form");
      commentForm.classList.add("border-0");
      commentForm.classList.add("my-0");
      commentForm.classList.add("w-75");
      commentForm.classList.add("editCommentForm");
      closestComment.insertBefore(commentForm, postTemplate);

      //   // Get the form for submission handling
      const editCommentForm = document.querySelector(".editCommentForm");

      //   // Add the necessary inputs to the created form so users can actually edit the comment
      editCommentForm.innerHTML += `<input type="text" class="form-control d-none w-100 mt-3 mb-4 pb-2 postId" id="post-id" aria-describedby="idHelp" value="${postId}" />`;
      editCommentForm.innerHTML += `<input type="text" class="form-control w-100 mt-1 mb-2 pb-2 postBody" id="post-body" aria-describedby="bodyHelp" value="${postComment.innerText.trim()}" />`;

      //   // Adds button to save changes
      editCommentForm.innerHTML += `<button type="submit" class="btn btn-primary btn-sm mb-3 saveEdit">Save</button> <button type="button" class="btn btn-primary btn-sm  mb-3">Cancel</button>`;

      // Submit the edited form
      editCommentForm.addEventListener("submit", newCommentInputs);
    });
  });
}
function newCommentInputs(evt) {
  evt.preventDefault();

  // Assign the inputs from the form to variables
  const [id, body] = evt.target.elements;

  // Build the new post with edited values
  const dataObj = JSON.stringify({
    body: `${body.value}`,
  });

  // Send to edit handler
  editComment(id.value, dataObj);
}
