import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
   <a class="gallery__link js-target" href="${original}">
        <img class="gallery__image js-target" 
        src="${preview}" 
        alt="${description}" />
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsDelay: 250,
  captionsData: "alt",
});
