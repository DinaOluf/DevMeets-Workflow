export function getPostToEdit() {
  const editPost = document.querySelector(".edit-post");
  editPost.addEventListener("click", (e) => {
    const closestPost = e.target.closest(".card-body");
    console.log(closestPost);
  });
}
