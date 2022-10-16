import { timeout } from "../util/timeout.mjs";
import { deletePost } from "./deletePost.mjs";

/**
 * Reads the post body and sends it to deletion. Takes no arguments. Is used together with an event listener to fire on the respective post.
 * @example
 * ```js
 * // Click icon which fires this function. The function runs and in turn fires the deletePost(id) function.
 * ```
 */
export function getPostToDelete() {
  const deletePostButton = document.querySelectorAll(".delete-post");

  // Clicking the Delete button in the cogwheel, targets the closest post and grabs the ID
  // and feeds it into the deletePost function.

  deletePostButton.forEach((e) => {
    e.addEventListener("click", (i) => {
      const closestPost = i.target.closest(".card-body");
      const postId = closestPost.querySelector(".post-id").innerText;

      deletePost(postId);

      // Reloads the website after 1 second after clicking delete.
      timeout(1000);
    });
  });
}
