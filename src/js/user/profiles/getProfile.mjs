import { API_BASE_URL, API_PROFILE_URL, getProfileUrlParams } from "/src/js/util/variables.mjs";
import { options } from "/src/js/util/options.mjs";
import { buildProfile } from "./buildProfile.mjs";

export async function getProfile(name) {
  const response = await fetch(`${API_BASE_URL}${API_PROFILE_URL}${name}${getProfileUrlParams}`, options);
  const data = await response.json();

  buildProfile(data);
}
