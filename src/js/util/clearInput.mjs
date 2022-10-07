const clearInput = document.getElementById("clearInput");

export function clearAll() {
  document.getElementById("post-title").value = "";
  document.getElementById("post-content").value = "";
  document.getElementById("post-tags").value = "";
  document.getElementById("post-url").value = "";
}

clearInput.addEventListener("click", clearAll);
