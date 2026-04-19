const titlu = document.querySelector('h1');
titlu.addEventListener('mouseenter', () => {
    titlu.style.color = 'forestgreen';
    titlu.style.transition = '0.5s'; // Face schimbarea lină
    titlu.style.cursor = 'pointer';
});
titlu.addEventListener('mouseleave', () => {
    titlu.style.color = 'black';
});