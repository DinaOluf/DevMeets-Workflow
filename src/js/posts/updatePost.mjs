import { API_BASE_URL, API_POSTS_URL } from "../util/variables.mjs";
import { options } from "../util/options.mjs";
import { getUserAuth } from "../user/userAuth.mjs";

export async function updatePost(postData) {
  const updatePostURL = `${API_BASE_URL}${API_POSTS_URL}${postData.id}`;

  const response = await fetch(updatePostURL, options, {
    method: "PUT",
    body: JSON.stringify(postData),
  });

  return await response.json();
}
