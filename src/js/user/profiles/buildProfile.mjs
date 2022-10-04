import { bannerImageHandler, profileImageHandler } from "/src/js/components/imageHandlers.mjs";
import { getUserInfo } from "../getUserInfo.mjs";

export function buildProfile(data) {
  const profileImage = document.querySelectorAll(".profile-image");
  const userName = document.querySelectorAll(".profile-info-username");
  const bannerImage = document.querySelector(".banner-image");
  const follow = document.querySelector(".follow");

  // Check if an image is set for the user, if not set to default
  let userAvatar = profileImageHandler(data.avatar);

  // Add the image
  profileImage.forEach((image) => {
    image.innerHTML = `<img class="profile-image-attributes rounded-circle" src="${userAvatar}" alt="User Profile Image" />`;
  });

  if (bannerImage) {
    // Check if a banner image is set for the user, if not set to default
    let userBanner = bannerImageHandler(data.banner);

    // Add the image
    bannerImage.innerHTML = `<img class="img-fluid" src="${userBanner}" alt="User Banner Image" />`;
  }

  // Add the name
  userName.forEach((name) => {
    name.innerText = `${data.name}`;
  });

  // Check if name matches saved name in localStorage, if so change button to be edit instead of follow
  const userInfo = getUserInfo();

  if (data.name === userInfo.name) {
    follow.innerHTML = "Edit profile";
  }

  if (follow.innerHTML === "Follow") {
    follow.addEventListener("click", () => {
      console.log("Following mode");
      // RUN FOLLOW CODE HERE LATER
    });
  }

  if (follow.innerHTML === "Edit profile") {
    follow.addEventListener("click", () => {
      console.log("Editing mode");
      // RUN EDIT PROFILE CODE HERE LATER
    });
  }
}
