window.onload = function() {
    var images = document.querySelectorAll('.galeria img');
    images.forEach(function(img) {
        img.addEventListener('click', function(event) {
            event.target.style.transform = 'scale(1.5)';
        });

        img.addEventListener('mouseout', function(event) {
            event.target.style.transform = 'scale(1)';
        });
    });

    let index = 0;
    const slides = document.querySelectorAll('.slide');

    function nextSlide() {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length; // Wraca do pierwszego slajdu po ostatnim
        slides[index].classList.add('active');
    }

    function prevSlide() {
        slides[index].classList.remove('active');
        index = (index - 1 + slides.length) % slides.length; // Wraca do ostatniego slajdu po pierwszym
        slides[index].classList.add('active');
    }

    // Przewijanie slajdów co 3 sekundy
    setInterval(nextSlide, 3000);

    let startX;
    let endX;
    const slider = document.querySelector('.galeria');

    // Nasłuchiwanie na zdarzenie dotknięcia
    slider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    // Nasłuchiwanie na zdarzenie przeciągnięcia
    slider.addEventListener('touchmove', function(e) {
        endX = e.touches[0].clientX;
    });

    // Nasłuchiwanie na zdarzenie zakończenia dotyku
    slider.addEventListener('touchend', function() {
        let threshold = 100; // minimalna odległość przeciągnięcia, aby wywołać przewijanie
        if (startX - endX > threshold) {
            nextSlide(); // przewijanie w prawo
        } else if (endX - startX > threshold) {
            prevSlide(); // przewijanie w lewo
        }
    });
};