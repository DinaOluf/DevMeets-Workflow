import { getPostToEdit } from "../posts/getPostToEdit.mjs";

export function createCog() {
  const cogHtml = `<div class="dropdown ms-auto">
    <div class="cog-dropdown pb-5">
      <svg
        type="button"
        id="cog-dropdown"
        data-bs-toggle="dropdown"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        class="bi bi-gear-fill me-3 ms-3 cogwheel-icon"
        viewBox="0 0 16 16"
      >
        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
      </svg>
      <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="comment-dropdown">
        <li class="dropdown-item edit-post">Edit Post</li>
        <li class="dropdown-item">Delete Post</li>
      </ul>
    </div>
  </div>`;
  return cogHtml;
}

export function addCogWheelEvent() {
  // Connect to the correct cogwheel
  const cogDrop = document.querySelectorAll(".cogwheel-icon");

  // Add eventlistener to cogwheel
  cogDrop.forEach((e) => {
    e.addEventListener("click", () => {
      getPostToEdit();
    });
  });
}
