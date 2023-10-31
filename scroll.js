// JavaScript for scrolling through projects
document.addEventListener('DOMContentLoaded', function () {
    const projectGallery = document.querySelector('.project-gallery');
    const scrollRight = document.querySelector('.scroll-right');
    const scrollLeft = document.querySelector('.scroll-left');
    const projectWidth = 300; // Adjust this value to fit your project card width

    let scrollPosition = 0;

    // Handle scrolling to the right
    scrollRight.addEventListener('click', function () {
        if (scrollPosition < projectGallery.scrollWidth - projectGallery.clientWidth) {
            scrollPosition += projectWidth;
            projectGallery.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    });

    // Handle scrolling to the left
    scrollLeft.addEventListener('click', function () {
        if (scrollPosition > 0) {
            scrollPosition -= projectWidth;
            projectGallery.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});
