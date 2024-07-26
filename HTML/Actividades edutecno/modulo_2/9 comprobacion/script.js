// Mostrar el segundo div al pasar el mouse sobre el primer div
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

text1.addEventListener('mouseover', () => {
    text2.style.display = 'block';
});

text1.addEventListener('mouseout', () => {
    text2.style.display = 'none';
});

// Agrandar la imagen un 100% 
const caja2 = document.getElementById('caja2');
const img = document.getElementById('img');

caja2.addEventListener('click', () => {
    img.style.transform = 'scale(2)';
});

caja2.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
});

// Agrandar la letra al hacer doble clic en el tercer div
const caja3 = document.getElementById('caja3');

caja3.addEventListener('dblclick', () => {
    const currentSize = window.getComputedStyle(caja3).fontSize;
    const newSize = parseFloat(currentSize) * 1.5; // Aumentar el tamaño de la letra en un 50%
    caja3.style.fontSize = `${newSize}px`;
});

