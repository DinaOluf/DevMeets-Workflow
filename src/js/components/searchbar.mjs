import { getAllPosts } from "../posts/getPosts.mjs";
import { postTemplate } from "../posts/postTemplate.mjs";

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
