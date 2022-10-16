import { getAllPosts } from "../posts/getPosts.mjs";
import { postTemplate } from "../posts/postTemplate.mjs";

/**
 * Handles the page's search function. The value argument is the search field input which is then checked against the results from the API to find matches.
 * @param {string} value search field input
 * @example
 * ```js
 * handleSearch(test)
 * // Expect return to show every post which has the string "test" in it somewhere
 * ```
 */
export async function handleSearch(value) {
  const data = await getAllPosts();

  const filtered = data.filter((post) => {
    return (
      post.author.name.toLowerCase().includes(value.toLowerCase()) ||
      post.title.toLowerCase().includes(value.toLowerCase()) ||
      post.body.toLowerCase().includes(value.toLowerCase())
    );
  });
  postTemplate(filtered);
}
