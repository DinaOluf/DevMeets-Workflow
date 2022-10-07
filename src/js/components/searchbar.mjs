import { getAllPosts } from "../posts/getPosts.mjs";
import { postTemplate } from "../posts/postTemplate.mjs";

export async function handleSearch(value) {
  const data = await getAllPosts();

  const filtered = data.filter((post) => {
    return post.author.name.toLowerCase().includes(value) || post.title.toLowerCase().includes(value) || post.body.toLowerCase().includes(value);
  });
  postTemplate(filtered);
}
