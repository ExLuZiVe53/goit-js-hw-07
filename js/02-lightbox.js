import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
galleryEl.innerHTML("beforeend", createGallery(galleryItems));

let gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

function createGallery(galleryItems) {
  return galleryItems.map(({ descripion, preview, original }) => {
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${descripion}" />
        </a>
    </li>`;
  });
}
