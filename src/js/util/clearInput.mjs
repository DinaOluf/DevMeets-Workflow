export function clearAll() {
  document.getElementById("post-title").value = "";
  document.getElementById("post-content").value = "";
  document.getElementById("post-tags").value = "";
  document.getElementById("post-url").value = "";
}

export function setClearAllListener() {
  const clearInput = document.getElementById("clearInput");
  clearInput.addEventListener("click", clearAll);
}