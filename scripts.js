document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1.typing');
    
    h1.addEventListener('animationend', (event) => {
        if (event.animationName === 'typing') {
            h1.classList.add('done');
        }

        // If you want to handle clicks on the image link
    const imageLink = document.querySelector('.image-link');
    imageLink.addEventListener('click', (event) => {
        alert('Image clicked!');
        // You can add more functionality here if needed
    });
});
