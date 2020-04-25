import gallery from "./galery-items.js"


const docList = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".js-lightbox")
const esc = document.querySelector(".lightbox__button")
let image = document.querySelector(".lightbox__image")
const murkup = createGallery(gallery);
docList.insertAdjacentHTML("beforeend", murkup)



function createGalleryMarkup(arr) {
    const lisImage = `
    <li class="gallery__item">
  <a
    class="gallery__link"
    href="${arr.preview}"
  >
    <img
      class="gallery__image"
      src="${arr.preview}"
      data-source="${arr.original}"
      alt="${arr.description}"
    />
  </a>
</li>
    `
    return lisImage
};


function createGallery(arr) {
    return arr
    .map(el => createGalleryMarkup(el))
    .join(' ')
};


docList.addEventListener("click", e => {
    e.preventDefault()
    image.removeAttribute('src')
    image.setAttribute('src', e.target.dataset.source);
    lightBox.classList.toggle("is-open");
});


esc.addEventListener("click", e => {
    lightBox.classList.toggle("is-open");
    image.removeAttribute('src');
})
