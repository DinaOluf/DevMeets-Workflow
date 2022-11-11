import { API_BASE_URL, API_PROFILE_URL, getProfileUrlParams } from "../../util/variables.mjs";
import { options } from "../../util/options.mjs";
import { buildProfile } from "./buildProfile.mjs";

/**
 * A function which fetches the API data to build a profile with
 * @param {string} name the name of the user to fetch the profile of
 * @example
 * ```js
 * getProfile("Eric");
 * // Expect the function to fetch the profile information of the user
 * ```
 */
export async function getProfile(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}${name}${getProfileUrlParams}`, options);
  const data = await response.json();

  buildProfile(data);
}

/**
 * A function which fetches the API data for a profile
 * @param {string} name the name of the user to fetch the profile of
 * @example
 * ```js
 * getAProfile("Eric");
 * // Expect the function to fetch the profile information of the user and return it
 * ```
 */
export async function getAProfile(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}${name}${getProfileUrlParams}`, options);
  const data = await response.json();

  return data;
}
