import { getSinglePost } from "../posts/getPostSpecific.mjs";

// QUERY STRINGS

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// if the id is null, then redirect to the home page. If not, create the profile.
if (!id) {
  location.href = "./index.html";
} else {
  getSinglePost(id);
}
