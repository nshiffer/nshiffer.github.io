document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    // Rotate the shape in the home section
    const homeShape = document.getElementById('shape-home');
    if (homeShape) {
        homeShape.style.transform = `translate(-50%, -50%) rotate(${scrollPosition}deg)`;
    }

    // Move the shape in the about section horizontally
    const aboutShape = document.getElementById('shape-about');
    if (aboutShape) {
        aboutShape.style.transform = `translate(-50%, -50%) translateX(${scrollPosition}px)`;
    }

    // Add more transformations for other shapes
});
