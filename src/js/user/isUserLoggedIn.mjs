import { getItem } from "./getUserInfo.mjs";

/**
 * Function which checks if a user is logged in or not by, and redirects to login page if user is not logged in.
 * @example
 * ```js
 * isUserLoggedIn;
 * // Call the function to begin checking if a user is logged in or not.
 * ```
 */
export function isUserLoggedIn() {
  const checkAuth = getItem("jwt");

  if (checkAuth.length === 0) {
    location.href = "./login.html";
  } else {
    return;
  }
}
