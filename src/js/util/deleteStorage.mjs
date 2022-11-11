/**
 * Function which clears localStorage upon log out.
 * @example
 * ```js
 * deleteStorage();
 * // Call the function in order to clear localStorage completely and redirect to login
 * ```
 */
export function deleteStorage() {
  localStorage.clear();

  location.href = "./login.html";
}
