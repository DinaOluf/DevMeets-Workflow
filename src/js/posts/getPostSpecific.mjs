import { API_BASE_URL, API_POSTS_URL } from "../util/variables.mjs";
import { getComments } from "./getComments.mjs";
import { displayPosts, getPosts } from "./getPosts.mjs";
import { getPostUrlParams } from "../util/variables.mjs";
import { options } from "../util/options.mjs";
import { postTemplate } from "./postTemplate.mjs";

// export async function getSinglePost(id) {
//   const data = await displayPosts(`${API_POSTS_URL}/${id}`, `${getPostUrlParams}`, options);
//   console.log(data);
// }
debugger;

export async function getSinglePost(id) {
  try {
    const data = await getPosts(`${API_BASE_URL}${API_POSTS_URL}/${id}${getPostUrlParams}`, options);
    postTemplate(data);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
