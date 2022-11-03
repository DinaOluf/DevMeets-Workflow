import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getItem } from "../user/getUserInfo.mjs";
import { timeout } from "../util/timeout.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {number} id the post ID to add reaction to
 * @example
 * ```js
 * addReaction("1234");
 * // Expect a reaction to be added to the post which matches id "1234"
 * ```
 */
export async function addReaction(id) {
  // Get the auth token
  const jwt = getItem("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_POSTS_URL}/${id}/react/👍`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    const json = await response.json();

    if (json.message) {
      errorContainer.innerHTML = errorMessage(json.message);
    } else {
      errorContainer.innerHTML = successMessage("Like");
      timeout(1000);
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
