import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getUserAuth } from "../user/userAuth.mjs";

// Function which initiates what to do when submitting the form
export function editPost(evt) {
  // Assign the inputs from the form to variables
  const [id, title, body, media, tags] = evt.children.value;

  // Construct the data object which is to be sent to the API
  const dataObj = JSON.stringify({
    title: `${title}`,
    body: `${body}`,
    tags: [`${tags}`],
    media: `${media}`,
  });

  // Get the auth token
  const jwt = getUserAuth();

  // Send the data object to the API
  fetch(`${API_BASE_URL}${API_POSTS_URL}/${id}`, {
    method: "PUT",
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

        // setTimeout(() => {
        //   location.reload();
        // }, 1500);
      }
    })
    .catch((error) => console.log("error", error));
}
