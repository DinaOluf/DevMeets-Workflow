import { API_BASE_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { validateEmail } from "../components/validateEmail.mjs";

// Function which initiates what to do when submitting the form
export function handleRegister(evt) {
  evt.preventDefault();

  // Assign the inputs from the form to variables
  const [userName, email, password, avatar, banner] = evt.target.elements;

  // Check if the supplied email is a Noroff email
  let validatedEmail = "";

  if (!validateEmail(email.value)) {
    errorContainer.innerHTML = errorMessage("Invalid email");
  } else {
    errorContainer.innerHTML = "";
    validatedEmail = email.value;

    let userAvatar;
    if (avatar.value !== "" && avatar.value) {
      userAvatar = avatar.value;
    } else {
      userAvatar = "https://i.imgur.com/0D99Xsk.png";
    }

    let userBanner;
    if (banner.value !== "" && banner.value) {
      userBanner = banner.value;
    } else {
      userBanner = "https://i.imgur.com/M3m9Y3W.png";
    }

    // Construct the data object which is to be sent to the API
    const dataObj = JSON.stringify({
      name: userName.value,
      email: validatedEmail,
      password: password.value,
      avatar: userAvatar,
      banner: userBanner,
    });

    // Send the data object to the API
    fetch(`${API_BASE_URL}/api/v1/social/auth/register`, {
      method: "POST",
      body: dataObj,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    })
      .then((response) => response.json)
      .then((json) => {
        if (json.error) {
          errorContainer.innerHTML = errorMessage(json.message);
        } else {
          errorContainer.innerHTML = successMessage("Registration");

          setTimeout(() => {
            location.href = "/login.html";
          }, 1500);
        }
      })
      .catch((error) => console.log("error", error));
  }
}
