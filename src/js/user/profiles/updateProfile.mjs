import { API_BASE_URL, API_PROFILE_URL, errorContainer } from "../../util/variables.mjs";
import { errorMessage } from "../../components/error.mjs";
import { successMessage } from "../../components/success.mjs";
import { getUserAuth } from "../userAuth.mjs";
import { getItem } from "../getUserInfo.mjs";

// Function which initiates what to do when submitting the form
export function updateProfileMedia(mediaType, media) {
  // Get the auth token
  const jwt = getUserAuth();

  // Get user info
  const userInfo = getItem("user");

  // Construct the data object which is to be sent to the API
  let dataObj = {
    [mediaType]: `${media}`,
  };

  // Send the data object to the API
  fetch(`${API_BASE_URL}${API_PROFILE_URL}${userInfo.name}/media`, {
    method: "PUT",
    body: JSON.stringify(dataObj),
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message) {
        errorContainer.innerHTML = errorMessage(json.message);
      } else {
        errorContainer.innerHTML = successMessage("Profile media edit");

        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    })
    .catch((error) => console.log("error", error));
}
