import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getUserAuth } from "../user/userAuth.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} form
 * @example
 * ```js
 * createComment(commentsForm);
 * // Expect a comment to be created using the form input fields provided in the commentsForm element, if it is a form.
 * ```
 */
export async function createComment(evt) {
  evt.preventDefault();
  // Assign the inputs from the form to variables
  const [id, body] = evt.target.elements;

  // Construct the data object which is to be sent to the API
  let dataObj = {
    body: `${body.value}`,
  };

  // Get the auth token
  const jwt = getUserAuth();

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_POSTS_URL}/${id.value}/comment`, {
      method: "POST",
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
      location.reload();
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
