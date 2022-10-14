import { getItem } from "../../getUserInfo.mjs";
import { API_BASE_URL, API_PROFILE_URL } from "../../../util/variables.mjs";
import { errorContainer } from "../../../util/variables.mjs";
import { errorMessage } from "../../../components/error.mjs";
import { successMessage } from "../../../components/success.mjs";

/**
 * A request which handles following/unfollowing a user in the API
 * @param {string} user API data, in this case a single user
 * @param {string} type wether to "follow" or "unfollow" the specified user
 * @example
 * ```js
 * followUnfollowRequest(user.name, "follow");
 * // Expect returned request status from the API.
 * ```
 */
export async function followUnfollowRequest(user, type) {
  // Request body should be empty
  let dataObj = {};

  // Get the auth token
  const jwt = getItem("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}${user}/${type}`, {
      method: "PUT",
      body: JSON.stringify(dataObj),
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    if (json.message) {
      errorContainer.innerHTML = errorMessage(json.message);
    } else {
      errorContainer.innerHTML = successMessage("Post creation");
      timeout(1000);
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
