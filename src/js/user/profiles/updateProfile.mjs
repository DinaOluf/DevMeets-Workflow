import { API_BASE_URL, API_PROFILE_URL, errorContainer } from "../../util/variables.mjs";
import { errorMessage } from "../../components/error.mjs";
import { successMessage } from "../../components/success.mjs";
import { getItem } from "../getUserInfo.mjs";

/**
 * Function which initiates what to do when submitting the form editAvatar/editBanner
 * @param {string} mediaType the type of edit, avatar/banner
 * @param {string} media the value to edit
 * @example
 * ```js
 * updateProfileMedia("avatar", "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg")
 * // Expect the function to change the "avatar" value to the provided media URL
 * ```
 */
export async function updateProfileMedia(mediaType, media) {
  // Get the auth token
  const jwt = getItem("jwt");

  // Get user info
  const userInfo = getItem("user");

  // Construct the data object which is to be sent to the API
  let dataObj = {
    [mediaType]: `${media}`,
  };

  try {
    // Send the data object to the API
    const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}${userInfo.name}/media`, {
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
      errorContainer.innerHTML = successMessage("Profile media edit");
      timeout(1000);
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
