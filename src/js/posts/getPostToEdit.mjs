export function getPostToEdit() {
  const editPost = document.querySelectorAll(".edit-post");

  // When edit button is clicked changes value of post-content to inputs

  editPost.forEach((e) => {
    e.addEventListener("click", (i) => {
      const closestPost = i.target.closest(".card-body");
      console.log(closestPost.childNodes);
      closestPost.childNodes[3].innerHTML = `<input type="text" class="form-control w-100" id="post-body" aria-describedby="bodyHelp" value="${closestPost.childNodes[3].innerText}" />`;
      closestPost.childNodes[5].innerHTML = `<input type="text" class="form-control w-100" id="post-body" aria-describedby="bodyHelp" value="${closestPost.childNodes[5].childNodes[1].src}" />`;

      // Creates parent div for buttons
      const div = document.createElement("div");

      // Creates button upon clicking edit
      div.innerHTML += `<button type="submit" class="btn btn-primary btn-sm mb-3">Save</button> <button type="submit" class="btn btn-primary btn-sm  mb-3">Cancel</button>`;
      closestPost.insertBefore(div, closestPost.childNodes[6]);
    });
  });
}
