// Get the profile dynamically through URL Search Params. Present the data in the existing HTML and if API.name matches
// localStorage.name, make follow button an edit profile button instead. Edit profile will be handled in a different branch.
// As will follow/unfollow function.

import { API_BASE_URL, API_PROFILE_URL } from "/src/js/util/variables.mjs";
import { options } from "/src/js/util/options.mjs";
import { buildProfile } from "./buildProfile.mjs";

export async function getProfile(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}${name}`, options);
  const data = await response.json();
  buildProfile(data);
}
