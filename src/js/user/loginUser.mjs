import { API_BASE_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { setItem } from "./getUserInfo.mjs";
import { timeout } from "../util/timeout.mjs";

/**
 * Function which initiates what to do when submitting the form
 * @param {element} evt
 * @example
 * ```js
 * handleLogin(loginForm);
 * // Expect the input user information to be sent to the API for validation. If OK, the user will be logged in. If not, an error will display.
 * ```
 */
export async function handleLogin(evt) {
  evt.preventDefault();

  // Assign the inputs from the form to variables
  const [email, password] = evt.target.elements;

  // Construct the data object which is to be sent to the API
  const dataObj = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  // Send the data object to the API
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/social/auth/login`, {
      method: "POST",
      body: dataObj,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });

    const json = await response.json();

    if (json.message) {
      errorContainer.innerHTML = errorMessage(json.message);
    } else {
      errorContainer.style.display = "none";
      errorContainer.innerHTML = successMessage("Login");

      // Save user info
      setItem("user", {
        name: json.name,
        email: json.email,
        avatar: json.avatar,
      });

      // Save authentication token
      const authToken = json.accessToken;
      setItem("jwt", authToken);

      // Redirect
      timeout(1000);
      location.href = "./profile.html";
    }
  } catch (error) {
    console.log(error);
    errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
  }
}
