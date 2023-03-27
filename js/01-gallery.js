import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems.map(({preview, original, description}) => `
  <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`).join('');

gallery.innerHTML = galleryMarkup;

gallery.addEventListener('click', (event) => {
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  
  const source = event.target.dataset.source;
  
  const modal = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
  `);
  
  modal.show();
});