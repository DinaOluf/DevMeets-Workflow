import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getItem } from "../user/getUserInfo.mjs";
import { timeout } from "../util/timeout.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {number} id the post ID to delete
 * @example
 * ```js
 * deletePost("1234");
 * // Expect post with ID matching "1234" to be deleted from the API
 * ```
 */
export async function deletePost(id) {
  // Get the auth token
  const jwt = getItem("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_POSTS_URL}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    if (json.message) {
      errorContainer.innerHTML = errorMessage(json.message);
    } else {
      errorContainer.innerHTML = successMessage("Post delete");
      timeout(1000);
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
