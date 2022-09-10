import { options } from "./options.js";
import { API_BASE_URL } from "./variables.js";

const response = await fetch(`${API_BASE_URL}/api/v1/social/posts`, options);
const data = await response.json();

console.log(data);
