import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
            <a class="gallery__link js-target" href="${original}">
            <img
            class="gallery__image js-target"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
            </a>
        </li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
gallery.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("js-target")) {
    return;
  }

  const imageSource = event.target.dataset.source;
  const clickedImage = galleryItems.find(
    ({ original }) => original === imageSource
  );

  const instance = basicLightbox.create(
    `
      <img src="${clickedImage.original}"/>
  `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscape);
      },
      onClose: (instance) => {
        document.addEventListener("keydown", onEscape);
      },
    }
  );
  instance.show();

  function onEscape(evt) {
    const isEscapePressed = evt.code === "Escape";
    if (!isEscapePressed) {
      return;
    }
    instance.close();
  }
}
