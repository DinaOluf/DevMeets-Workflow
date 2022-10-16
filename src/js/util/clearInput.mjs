/**
 * Function which clears input forms when the button is clicked
 * @example
 * ```js
 * clearAll();
 * // Call the function in order to clear the inputs
 * ```
 */
export function clearAll() {
  document.getElementById("post-title").value = "";
  document.getElementById("post-content").value = "";
  document.getElementById("post-tags").value = "";
  document.getElementById("post-url").value = "";
}

/**
 * Sets the event listener for clearing inputs button
 * @example
 * ```js
 * setClearAllListener();
 * // Call the function in order to set the listener
 * ```
 */
export function setClearAllListener() {
  const clearInput = document.getElementById("clearInput");
  clearInput.addEventListener("click", clearAll);
}
