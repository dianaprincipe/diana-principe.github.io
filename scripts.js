document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const button = document.createElement('button');
    button.textContent = 'Toggle Futuristic Theme';
    button.style.position = 'fixed';
    button.style.bottom = '10px';
    button.style.right = '10px';
    button.style.padding = '10px';
    button.style.backgroundColor = '#00FF00';
    button.style.color = '#000';
    button.style.border = 'none';
    button.style.cursor = 'pointer';
    button.style.fontSize = '1rem';
    body.appendChild(button);

    button.addEventListener('click', () => {
        if (body.style.backgroundColor === 'black') {
            body.style.backgroundColor = '#111';
            button.textContent = 'Toggle Classic Theme';
        } else {
            body.style.backgroundColor = '#000';
            button.textContent = 'Toggle Futuristic Theme';
        }
    });
});
