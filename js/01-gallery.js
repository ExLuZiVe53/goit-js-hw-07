import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryHtml = document.querySelector(".gallery");
galleryHtml.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  showImg(event.target);
}
function showImg(target) {
  const instance = basicLightbox.create(
    `<div class="modal">
    <img src="${target.dataset.source}" width="900" height="600">
    </div>`
  );
  instance.show();

  galleryHtml.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ description, preview, original }) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
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
