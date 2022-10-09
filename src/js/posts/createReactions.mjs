import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getUserAuth } from "../user/userAuth.mjs";

// Fetch request : PUT /api/v1/social/posts/<id>/react/<symbol>, where symbol HAS to be a thumbs up!

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
        errorContainer.innerHTML = successMessage("Post creation");

        setTimeout(() => {
          location.reload();
        }, 1500);
      }
    })
    .catch((error) => console.log("error", error));
}

// Function arguments (id, 👍).

// Add reaction.length to display amount of reactions besides like button.

// postTemple add querySelector for button and add eventlistener "click" for createReaction function.
