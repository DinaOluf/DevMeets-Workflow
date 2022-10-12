import { API_BASE_URL, API_PROFILE_URL, errorContainer } from "../../util/variables.mjs";
import { errorMessage } from "../../components/error.mjs";
import { successMessage } from "../../components/success.mjs";
import { getUserAuth } from "../userAuth.mjs";
import { getItem } from "../getUserInfo.mjs";

// Function which initiates what to do when submitting the form
export async function updateProfileMedia(mediaType, media) {
  // Get the auth token
  const jwt = getUserAuth();

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
      location.reload();
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
