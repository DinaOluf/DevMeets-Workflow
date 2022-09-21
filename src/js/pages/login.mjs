import { handleLogin } from "../user/loginUser.mjs";

// Connect to the correct form later
const form = document.querySelector(".login-form");

// Eventlistener for the submit handling
form.addEventListener("submit", handleLogin);
