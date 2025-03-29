import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");



const renderGallery = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item"><a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}" loading="lazy"/></a></li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", renderGallery);

new SimpleLightbox('.gallery a', { 
   captionsData: "alt",
   captionDelay: 250,
});
