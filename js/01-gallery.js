import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

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

createGalleryToListMarkup("beforeend", createGalleryMarkup(galleryItems));
