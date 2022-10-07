import { getUserAuth } from "../../userAuth.mjs";
import { API_BASE_URL, API_PROFILE_URL } from "../../../util/variables.mjs";
import { errorContainer } from "../../../util/variables.mjs";
import { errorMessage } from "../../../components/error.mjs";
import { successMessage } from "../../../components/success.mjs";

export function followUnfollowRequest(user, type) {
  // Request body should be empty
  let dataObj = {};

  // Get the auth token
  const jwt = getUserAuth();

  // Send the data object to the API
  fetch(`${API_BASE_URL}${API_PROFILE_URL}${user}/${type}`, {
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
        errorContainer.innerHTML = successMessage("Post creation");

        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    })
    .catch((error) => console.log("error", error));
}
