import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getUserAuth } from "../user/userAuth.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {number} id the post ID to edit
 * @param {object} obj the edited values which are to be updated in the API, must be object
 * @example
 * ```js
 * editPost("1234", dataObj = {
    title: `I am a new title!`,
    body: `My body has been updated, nice`,
    tags: ["updated", "body"],
  };);
 * // Expect the post matching the ID "1234" to be updated with the new values provided in the dataObj object. Notice media is missing from the object, showing this will not be updated.
 * ```
 */
export async function editPost(id, obj) {
  // Get the auth token
  const jwt = getUserAuth();

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_POSTS_URL}/${id}`, {
      method: "PUT",
      body: obj,
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    if (json.message) {
      errorContainer.innerHTML = errorMessage(json.message);
    } else {
      errorContainer.innerHTML = successMessage("Post edit");
      timeout(1000);
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
