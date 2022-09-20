import { getUserInfo } from "../user/getUserInfo.mjs";

export function getUserPanelInfo() {
  // Get user info and display it

  const userInfo = getUserInfo();

  const profileImage = document.querySelectorAll(".profile-image");
  const userName = document.querySelectorAll(".profile-info-username");
  const bannerImage = document.querySelector(".banner-image");

  // Check if an image is set for the user, if not set to default
  let userAvatar = userInfo.avatar;

  if (!userAvatar || userAvatar === "string" || userAvatar === "https://img.service.com/avatar.jpg") {
    userAvatar = "/dist/img/no-user-image-icon-0.jpg";
  }

  // Add the image
  profileImage.forEach((image) => {
    image.innerHTML = `<img class="profile-image-attributes rounded-circle" src="${userAvatar}" alt="User Profile Image" />`;
  });

  if (bannerImage) {
    // Check if a banner image is set for the user, if not set to default
    let userBanner = userInfo.banner;

    if (!userBanner || userBanner === "string" || userBanner === "https://img.service.com/banner.jpg") {
      userBanner = "/dist/img/Hero-Banner-Placeholder-Dark-1024x480-1.png";
    }

    // Add the image
    bannerImage.innerHTML = `<img class="img-fluid" src="${userBanner}" alt="User Banner Image" />`;
  }

  // Add the name
  userName.forEach((name) => {
    name.innerText = `${userInfo.name}`;
  });
}
