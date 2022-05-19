import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(gallery) {
  return gallery.map(({ preview, original, description }) => {
    return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
  }).join('');
}

gallery.insertAdjacentHTML('afterbegin', galleryMarkup);

let instance

function onGalleryItemClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }
  instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`)
  window.addEventListener('keydown', onKeybordEscButtonClick);
  instance.show();
}

function onKeybordEscButtonClick(evt) {
  if (evt.code === 'Escape') {
    window.removeEventListener('keydown', onKeybordEscButtonClick);
    instance.close()
  }
}







