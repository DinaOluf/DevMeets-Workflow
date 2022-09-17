import { API_BASE_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { handleAuth } from "../components/userAuth.mjs";

// Connect to the correct form later
const form = document.querySelector(".login-form");

// Eventlistener for the submit handling
form.addEventListener("submit", handleSubmit);

// Function which initiates what to do when submitting the form
function handleSubmit(evt) {
  evt.preventDefault();

  // Assign the inputs from the form to variables
  const [email, password] = evt.target.elements;

  // Construct the data object which is to be sent to the API
  const dataObj = JSON.stringify({
    email: email.value,
    password: password.value,
  });

  // Send the data object to the API
  fetch(`${API_BASE_URL}/api/v1/social/auth/login`, {
    method: "POST",
    body: dataObj,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.message) {
        errorContainer.innerHTML = errorMessage(json.message);
      } else {
        errorContainer.style.display = "none";
        const authToken = json.accessToken;
        handleAuth(authToken);
      }
    })
    .catch((error) => console.log("error", error));
}
