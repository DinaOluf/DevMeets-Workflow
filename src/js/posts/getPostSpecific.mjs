import { API_BASE_URL, API_POSTS_URL } from "../util/variables.mjs";
import { getPosts } from "./getPosts.mjs";
import { getPostUrlParams } from "../util/variables.mjs";
import { options } from "../util/options.mjs";
import { postTemplate } from "./postTemplate.mjs";
import { errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";

export async function getSinglePost(id) {
  try {
    let data = [];
    data.push(await getPosts(`${API_BASE_URL}${API_POSTS_URL}/${id}${getPostUrlParams}`, options));

    postTemplate(data);
    console.log(data);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
