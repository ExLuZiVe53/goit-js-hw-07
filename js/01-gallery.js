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
  const connection = basicLightbox.create(
    `<img src="${target.dataset.source}" width="800" height="600">`
  );
  connection.show();

  galleryHtml.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      connection.close();
    }
  });
}

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
