import { getUserInfo } from "../../user/getUserInfo.mjs";
import { bannerImageHandler, profileImageHandler } from "/src/js/components/imageHandlers.mjs";

export function getUserPanelInfo() {
  // Get user info and display it

  const userInfo = getUserInfo();

  const profileImage = document.querySelectorAll(".profile-image");
  const userName = document.querySelectorAll(".profile-info-username");
  const bannerImage = document.querySelector(".banner-image");

  // Check if an image is set for the user, if not set to default
  let userAvatar = profileImageHandler(userInfo.avatar);

  // Add the image
  profileImage.forEach((image) => {
    image.innerHTML = `<img class="profile-image-attributes rounded-circle" src="${userAvatar}" alt="User Profile Image" />`;
  });

  if (bannerImage) {
    // Check if a banner image is set for the user, if not set to default
    let userBanner = bannerImageHandler(userInfo.banner);

    // Add the image
    bannerImage.innerHTML = `<img class="img-fluid" src="${userBanner}" alt="User Banner Image" />`;
  }

  // Add the name
  userName.forEach((name) => {
    name.innerText = `${userInfo.name}`;
  });
}
