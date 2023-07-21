import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

galleryHtml("beforeend", createGalleryMarkup(galleryItems));
