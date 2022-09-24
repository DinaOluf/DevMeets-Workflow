// Handles profile images
export function profileImageHandler(image) {
  let userProfileImage;

  if (!image || image === "string" || image === "https://img.service.com/avatar.jpg") {
    userProfileImage = "/dist/img/no-user-image-icon-0.jpg";
  } else {
    userProfileImage = image;
    return userProfileImage;
  }
}
