import { deletePost } from "./deletePost.mjs";

export function getPostToDelete() {
  const deletePostButton = document.querySelectorAll(".delete-post");

  deletePostButton.forEach((e) => {
    e.addEventListener("click", (i) => {
      const closestPost = i.target.closest(".card-body");
      const postId = closestPost.childNodes[3].innerText;

      deletePost(postId);
      setTimeout(location.reload.bind(location), 1000);
    });
  });
}
