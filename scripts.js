document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close-btn');

    // Open modal
    contactBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
