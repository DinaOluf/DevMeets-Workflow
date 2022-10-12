import { API_BASE_URL, errorContainer } from "../util/variables.mjs";
import { errorMessage } from "../components/error.mjs";
import { successMessage } from "../components/success.mjs";
import { validateEmail } from "../components/validateEmail.mjs";

// Function which initiates what to do when submitting the form
export async function handleRegister(evt) {
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
      userAvatar = "https://cdn.discordapp.com/attachments/931268688412299274/1026475050578231376/no-user-image-icon-0.jpg";
    }

    let userBanner;
    if (banner.value !== "" && banner.value) {
      userBanner = banner.value;
    } else {
      userBanner = "https://cdn.discordapp.com/attachments/931268688412299274/1026475078847823972/Hero-Banner-Placeholder-Dark-1024x480-1.png";
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
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/social/auth/register`, {
        method: "POST",
        body: dataObj,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      const json = await response.json();

      if (json.error) {
        errorContainer.innerHTML = errorMessage(json.message);
      } else {
        errorContainer.innerHTML = successMessage("Registration");
        location.href = "/login.html";
      }
    } catch (error) {
      console.log(error);
      errorContainer.innerHTML = errorMessage("An error occurred when calling the API, error: " + error);
    }
  }
}
