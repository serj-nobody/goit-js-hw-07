import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  }).join('');
}

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery li a', {
  overlay: true,
  overlayOpacity: 0.8,
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

