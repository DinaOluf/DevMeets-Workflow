import { bannerImageHandler, profileImageHandler } from "/src/js/components/imageHandlers.mjs";

export function buildProfile(data) {
  const profileImage = document.querySelectorAll(".profile-image");
  const userName = document.querySelectorAll(".profile-info-username");
  const bannerImage = document.querySelector(".banner-image");

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
}
