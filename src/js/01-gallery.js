// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//! импорт library simplelightbox - я
import SimpleLightbox from 'simplelightbox';
// импорт стилей  library simplelightbox - я
import 'simplelightbox/dist/simple-lightbox.min.css';
//! end

const galleryConatainer = document.querySelector('.gallery');

const imagesMarkup = createImagesMarkup(galleryItems);

galleryConatainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryConatainer.addEventListener('click', onImageContainerClick);

function createImagesMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
            `;
        })
        .join('');
}


function onImageContainerClick(e) {
    e.preventDefault()
    const isPreviewImage = e.target.classList.contains('gallery__image');
    if (!isPreviewImage) {
        return;
    }
}

// настройки с библиотеки  SimpleLightbox
new SimpleLightbox('.gallery a', {

    captionsData: 'alt', //получить заголовок из данного атрибута
    captionDelay: 250    //задержка перед отображением подписи

});
// console.log(galleryItems);


console.log(galleryItems);
