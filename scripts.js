document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1.typing');
    
    h1.addEventListener('animationend', (event) => {
        if (event.animationName === 'typing') {
            h1.classList.add('done');
        }
    });
});
