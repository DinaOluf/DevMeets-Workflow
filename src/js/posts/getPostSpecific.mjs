import { API_BASE_URL, API_POSTS_URL } from "../util/variables.mjs";
import { getPosts } from "./getPosts.mjs";
import { getPostUrlParams } from "../util/variables.mjs";
import { options } from "../util/options.mjs";
import { postTemplate } from "./postTemplate.mjs";
import { errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";

/**
 * Get a single post from the API using id
 * @param {number} id id for the post you wish to display
 * @returns data from API and displays it using postTemplate function
 * @example
 * ```js
 * getSinglePost(1234);
 * // Expect returned array with data from API
 * ```
 */
export async function getSinglePost(id) {
  try {
    let data = [];
    data.push(await getPosts(`${API_BASE_URL}${API_POSTS_URL}/${id}${getPostUrlParams}`, options));

    postTemplate(data);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
