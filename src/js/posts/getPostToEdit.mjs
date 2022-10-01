export function getPostToEdit() {
  const editPost = document.querySelector(".edit-post");
  editPost.addEventListener("click", (e) => {
    const closestPost = e.target.closest(".card-body");
    console.log(closestPost.childNodes);
    closestPost.childNodes[3].innerHTML = `<input type="text" class="form-control w-100" id="post-body" aria-describedby="bodyHelp" value="${closestPost.childNodes[3].innerText}" />`;
  });
}
