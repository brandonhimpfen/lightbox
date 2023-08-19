const galleryImages = document.querySelectorAll('.gallery-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.getElementById('close-button');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;
        lightbox.style.display = 'flex';
    });
});

closeButton.addEventListener('click', () => {
    lightbox.style.display = 'none';
});
