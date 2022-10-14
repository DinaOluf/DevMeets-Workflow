import { API_BASE_URL, API_POSTS_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { getItem } from "../user/getUserInfo.mjs";
import { timeout } from "../util/timeout.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} form
 * @example
 * ```js
 * createPost(postForm);
 * // Expect a post to be created using the form input fields provided in the postForm element, if it is a form.
 * ```
 */
export async function createPost(evt) {
  evt.preventDefault();

  // Assign the inputs from the form to variables
  const [title, body, tags, media] = evt.target.elements;

  // Remove whitespace from tags input and split them at commas
  const pushedTags = tags.value.replace(/\s+/g, "").split(",");

  // Construct the data object which is to be sent to the API
  let dataObj = {
    title: `${title.value}`,
    body: `${body.value}`,
    tags: pushedTags,
    media: `${media.value}`,
  };

  if (!media.value || media.value === "") {
    delete dataObj.media;
  }

  // Get the auth token
  const jwt = getItem("jwt");

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}${API_POSTS_URL}`, {
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
      timeout(1000);
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
