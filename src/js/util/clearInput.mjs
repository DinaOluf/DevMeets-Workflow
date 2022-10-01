const clearInput = document.getElementById("clearInput");

const titleInput = document.getElementById("post-title");
const contentInput = document.getElementById("post-content");
const tagsInput = document.getElementById("post-tags");
const urlInput = document.getElementById("post-url");

export function clearAll() {
  document.getElementById("post-title").value = "";
  document.getElementById("post-content").value = "";
  document.getElementById("post-tags").value = "";
  document.getElementById("post-url").value = "";
}

clearInput.addEventListener("click", clearAll);
