import { API_BASE_URL, API_POSTS_URL } from "../util/variables.mjs";
import { getComments } from "./getComments.mjs";
import { getPosts } from "./getPosts.mjs";

export async function getSinglePosts(url, opt) {
  // GET API DATA

  const response = await fetch(url, opt);
  const data = await response.json();
  return data;
}

// Simple function to quickly display any data returned from the API. Pass in endpoint, parameters and options.
export async function displayPost(id) {
  try {
    const data = await getPosts(`${API_BASE_URL}${API_POSTS_URL}${id}`, opt);
    getComments(data);
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
