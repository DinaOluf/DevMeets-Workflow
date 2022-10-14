import { getItem } from "../../user/getUserInfo.mjs";
import { bannerImageHandler, profileImageHandler } from "/src/js/components/imageHandlers.mjs";
import { buildFollowingList } from "./buildFollowingList.mjs";

/**
 * A function which uses data saved in localStorage to build profile information from the API
 * @example
 * ```js
 * getUserPanelInfo();
 * // Call the function and it will grab values from localStorage and use these to build the necessary profile components.
 * ```
 */
export function getUserPanelInfo() {
  // Get user info and display it

  const userInfo = getItem("user");

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
    name.innerHTML = `${userInfo.name}`;
  });

  // Build profile sidepanel
  buildFollowingList(userInfo);
}
