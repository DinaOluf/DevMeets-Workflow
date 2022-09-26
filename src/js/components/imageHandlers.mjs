// Handles profile images
export function profileImageHandler(image) {
  let userProfileImage;

  if (!image || image === "string" || image === "https://img.service.com/avatar.jpg" || !isImageLink(image)) {
    userProfileImage = "/dist/img/no-user-image-icon-0.jpg";
  } else {
    userProfileImage = image;
  }
  return userProfileImage;
}

// Handles banner images
export function bannerImageHandler(image) {
  let userBannerImage;

  if (!image || image === "string" || image === "https://img.service.com/banner.jpg" || !isImageLink(image)) {
    userBannerImage = "/dist/img/Hero-Banner-Placeholder-Dark-1024x480-1.png";
  } else {
    userBannerImage = image;
  }
  return userBannerImage;
}

// RegEx to check if an appended image isn't a link, thanks Alexander
export function isImageLink(url) {
  const imgRegEx = /\.(jpg|jpeg|png|webp|avif|gif)(?=\?.+|$)/;
  return imgRegEx.test(url.toLowerCase());
}
