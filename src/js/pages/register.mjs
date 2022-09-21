import { handleRegister } from "../user/registerUser.mjs";

// Connect to the correct form later
const form = document.querySelector(".register-form");

// Eventlistener for the submit handling
form.addEventListener("submit", handleRegister);
