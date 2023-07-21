import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryHtml = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`
    )
    .join("");
}

galleryHtml.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

window.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.currentTarget === event.target.contains("gallery__item")) {
    return;
  }
  console.log(event.target);
}
