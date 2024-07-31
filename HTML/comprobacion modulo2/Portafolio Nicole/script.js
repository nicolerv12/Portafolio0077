document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Formulario enviado. ¡Gracias por tu mensaje!');
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const showMoreButton = document.getElementById('showMore');
    const moreInfo = document.getElementById('moreInfo');

    showMoreButton.addEventListener('click', function() {
        if (moreInfo.classList.contains('hidden')) {
            moreInfo.classList.remove('hidden');
            showMoreButton.textContent = 'Leer menos';
        } else {
            moreInfo.classList.add('hidden');
            showMoreButton.textContent = 'Leer más';
        }
    });
});
