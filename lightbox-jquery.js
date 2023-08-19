$(document).ready(function() {
    const galleryImages = $('.gallery-image');
    const lightbox = $('#lightbox');
    const lightboxImage = $('#lightbox-image');
    const closeButton = $('#close-button');

    galleryImages.click(function() {
        const imageSrc = $(this).attr('src');
        lightboxImage.attr('src', imageSrc);
        lightbox.show();
    });

    closeButton.click(function() {
        lightbox.hide();
    });
});
