import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getUserAuth } from "../user/userAuth.mjs";

// Function which initiates what to do when submitting the form
export function addReaction(id) {
  // Get the auth token
  const jwt = getUserAuth();

  // Send the data object to the API
  fetch(`${API_BASE_URL}${API_POSTS_URL}/${id}/react/👍`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.message) {
        errorContainer.innerHTML = errorMessage(json.message);
      } else {
        errorContainer.innerHTML = successMessage("Like");

        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    })
    .catch((error) => console.log("error", error));
}
