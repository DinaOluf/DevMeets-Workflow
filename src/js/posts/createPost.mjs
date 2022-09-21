import { API_BASE_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getUserAuth } from "../user/userAuth.mjs";

// Function which initiates what to do when submitting the form
export function createPost(evt) {
  evt.preventDefault();

  // Assign the inputs from the form to variables
  const [title, body, tags, media] = evt.target.elements;

  // Construct the data object which is to be sent to the API
  const dataObj = JSON.stringify({
    title: `${title.value}`,
    body: `${body.value}`,
    tags: [`${tags.value}`],
    media: `${media.value}`,
  });

  // Get the auth token
  const jwt = getUserAuth();

  // Send the data object to the API
  fetch(`${API_BASE_URL}/api/v1/social/posts`, {
    method: "POST",
    body: dataObj,
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
        }),
          2000;
      }
    })
    .catch((error) => console.log("error", error));
}
